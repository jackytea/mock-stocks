# Mock Stocks Trading Platform

## Overview

Mock Stocks is a trading and investment platform simulation built with the [MERN](https://www.mongodb.com/mern-stack) stack and utilizing [Socket.IO](https://socket.io/) for real time price updates. It is not a reflection of the real world markets and stock performance. You can visit the site [here.](https://epic-swanson-085a9a.netlify.app/)

## Table of Contents

- [Tech](#tech)<br/>
- [Data](#data)<br/>
- [Architecture](#architecture)<br/>
- [Demos](#demo-gifs)<br/>

## Tech

This project utilizes the [MERN](https://www.mongodb.com/mern-stack) stack and [Socket.IO](https://socket.io/) library. For authentication, a [JWT](https://jwt.io/) solution was implemented.

**Front-End**

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

**Back-End**

- [Node.JS](https://nodejs.org/en/)
- [Express.JS](https://expressjs.com/)
- [Mongoose.JS](https://mongoosejs.com/)
- [Socket.IO](https://socket.io/)

**Database**

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

**Authentication**

- [JSON Web Tokens](https://jwt.io/)

## Data

Stock data in this project was generated via [Mockaroo](https://www.mockaroo.com/) and is not reflective of real world market prices.

## Architecture

**System Architecture**

Big picture view of the application at a glance.

![System Architecture](./architecture_diagrams/MockStocksSystem.png "System Architecture")

**Database Architecture**

MongoDB database structure using [normalized data models.](https://docs.mongodb.com/manual/core/data-model-design/#normalized-data-models)

![Database Architecture](./architecture_diagrams/MockStocksDatabase.png "Database Architecture")

## Demo GIFs

**Home Page**

![Home Page](./demo_gifs/MockStocksHomePage.gif "Home Page")

**Browsing Markets**
![Markets](./demo_gifs/MockStocksBrowsing.gif "Markets")

**Buying A Stock**
![Buying](./demo_gifs/MockStocksBuying.gif "Buying")

**User Settings and Logging**
![Settings](./demo_gifs/MockStocksSettings.gif "Settings")