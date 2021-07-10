import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import User from '../models/user.js';
import PurchasedStock from '../models/purchased_stock.js';
import Transaction from '../models/transaction.js';
import ActionLog from '../models/action_log.js';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
const router = express.Router();

export const registerUser = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHashed = await bcrypt.hash(password, salt);
    const createdUser = await User.create({ email: email, password: passwordHashed, name: `${firstName} ${lastName}`, coins: 100000 });
    const token = jwt.sign({ email: createdUser.email, id: createdUser._id }, jwtSecret, { expiresIn: "1h" });

    const registerLog = new ActionLog({
      userId: createdUser._id,
      logAction: "REGISTER"
    });
    await registerLog.save();

    res.status(201).json({ result: createdUser, token: token });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering the user." });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    const passwordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: "Invalid login credentials." });
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, jwtSecret, { expiresIn: "1h" });

    const loginLog = new ActionLog({
      userId: existingUser._id,
      logAction: "LOGIN"
    });
    await loginLog.save();

    res.status(200).json({ result: existingUser, token: token });
  } catch (err) {
    res.status(500).json({ message: "An error occurred while registering the user." });
  }
};

export const getUserInfo = async (req, res) => {
  try {
    const userData = await User.findById(req.userId);
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching the user requested." });
  }
};

export const updateUserName = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.userId)) {
      return res.status(404).send(`No user with id: ${req.userId}`);
    }

    if (req.userId === process.env.GUEST_ID) {
      return res.status(400).send("Not allowed to modify guest account!");
    }

    await User.findByIdAndUpdate(req.userId, { name: `${firstName} ${lastName}` });
    res.status(200).json({ message: "Username successfully updated!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred updating your username." });
  }
};

export const updateUserPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, newPasswordConfirmed } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.userId)) {
      return res.status(404).send(`No user with id: ${req.userId}`);
    }

    if (req.userId === process.env.GUEST_ID) {
      return res.status(400).send("Not allowed to modify guest account!");
    }

    if (newPassword !== newPasswordConfirmed) {
      return res.status(400).json({ message: "Passwords do not match!." });
    }

    const userData = await User.findById(req.userId);
    const passwordCorrect = await bcrypt.compare(currentPassword, userData.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: "Invalid old password!" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHashed = await bcrypt.hash(newPassword, salt);

    await User.findByIdAndUpdate(req.userId, { password: passwordHashed });
    res.status(200).json({ message: "Password successfully updated!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred updating your username." });
  }
};

export const removeUser = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.userId)) {
      return res.status(404).send(`No user with id: ${req.userId}`);
    }

    if (req.userId === process.env.GUEST_ID) {
      return res.status(400).send("Not allowed to modify guest account!");
    }

    await ActionLog.deleteMany({ userId: req.userId });
    await Transaction.deleteMany({ userId: req.userId });
    await PurchasedStock.deleteMany({ userId: req.userId });
    await User.findByIdAndDelete(req.userId);

    res.status(200).json({ message: "User successfully deleted!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred removing the user." });
  }
}

export default router;
