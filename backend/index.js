// required packages
import path from 'path';
import http from 'http';
import cors from 'cors';
import dotenv from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';

// api functions and routes
import stockRoutes from './routes/stocks.js';
import userRoutes from './routes/users.js';
import purchasedStockRoutes from './routes/purchased_stocks.js';
import actionLogRoutes from './routes/action_logs.js';
import transactionRoutes from './routes/transactions.js';
import { tickers } from './web_sockets/tickers.js';

// environment configuration
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setup express.js and socket.io
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// express.js configuration
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// express.js routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.use('/stocks', stockRoutes);
app.use('/user', userRoutes);
app.use('/purchased', purchasedStockRoutes);
app.use('/logs', actionLogRoutes);
app.use('/transactions', transactionRoutes);
app.get('*', (req, res) => {
  res.status(404).sendFile(__dirname + '/not_found.html');
});

// socket.io data emission
io.on('connection', (socket) => {
  tickers(socket);
});

// mongodb and server connections
const CONNECTION_URL = process.env.MONGO_CONNECTION_STRING;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => server.listen(PORT, () => console.log(`Node.JS Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`An error has occurred: ${error}`));

mongoose.set('useFindAndModify', false);
