# Mock Stocks Trading Platform

## Overview

Mock Stocks is a trading and investment platform simulation built with the [MERN](https://www.mongodb.com/mern-stack) stack and utilizing [Socket.IO](https://socket.io/) for real time price updates. It is not a reflection of the real world markets and stock performance. You can visit the site [here.](https://epic-swanson-085a9a.netlify.app/)

## Table of Contents

- [Tech](#tech)<br/>
- [Data](#data)<br/>
- [Developing](#developing)<br/>
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

**Design**

Refer to the `Database Architecture` diagram in the [Architecture](#architecture)<br/> section below to see the various data models used in the database. See the [`/backend/models`](https://github.com/JackyTea/Mock-Stocks/tree/main/backend/models) directory for implementation details.

**Stock**

This project uses [JSON](https://www.json.org/json-en.html) to represent stock data in the form of:

```json
// stock object
[
  {
    "id": 0,
    "ticker": "String",
    "exchange": "String",
    "name": "String",
    "initialPrice": 0.00,
    "currentPrice": 0.00,
    "description": "String",
    "ipoDate": "String",
    "siteURL": "String",
    "industries": ["String", "String"],
    "icon": "URL",
    "favorited": true,
    "timesBought": 0
  }
]
```

The [schema](https://mongoosejs.com/docs/guide.html) of this model can be found [here.](https://github.com/JackyTea/Mock-Stocks/blob/main/backend/models/stock.js)

## Developing

To run this application locally, you will need the following prerequisite programs:

- [Node.JS and NPM](https://nodejs.org/en/)
- [Create React App](https://github.com/facebook/create-react-app)
- [MongoDB](https://www.mongodb.com/)

**Back-End Setup**

First, install the necessary packages via:

```
npm i
```

Refer to the [`package.json`](https://github.com/JackyTea/Mock-Stocks/blob/main/backend/package.json) in the [`/backend`](https://github.com/JackyTea/Mock-Stocks/tree/main/backend) directory for more information about what is being installed.

Then, setup the `.env` file in the root of the [`/backend`](https://github.com/JackyTea/Mock-Stocks/tree/main/backend) directory. (**Note**: this will be gitignored)

```bash
# for mongodb connection
MONGO_CONNECTION_STRING=mongo_secret_here

# for authentication via signing tokens
JWT_SECRET=jwt_secret_here

# for guest account login (mongo objectID)
GUEST_ID=guest_id_here
```

Now you can spin up the backend. Default port is `5000`. This can be changed in [`index.js`](https://github.com/JackyTea/Mock-Stocks/blob/main/backend/index.js#L54).

```bash
# start server
node .

# explicit command
node index.js
```

**Front-End Setup**

First, install the necessary packages via:

```
npm i
```

Refer to the [`package.json`](https://github.com/JackyTea/Mock-Stocks/blob/main/frontend/package.json) in the [`/frontend`](https://github.com/JackyTea/Mock-Stocks/tree/main/frontend) directory for more information about what is being installed.

Then, setup the `.env` file in the root of the [`/frontend`](https://github.com/JackyTea/Mock-Stocks/tree/main/frontend) directory. (**Note**: this will be gitignored) Also see that `REACT_APP_GUEST_EMAIL` and `REACT_APP_GUEST_PASS` take [base64](https://en.wikipedia.org/wiki/Base64) encoded strings. You can easily encode your credentials using this [site](https://www.base64encode.org/) or with the [`btoa()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa) function.

```bash
# backend connection to REST API
REACT_APP_STOCKS_API=api_url

# email of the guest account (encoded)
REACT_APP_GUEST_EMAIL=base64_encoded_string

# password of the guest account (encoded)
REACT_APP_GUEST_PASS=base64_encoded_string
```

Now you can spin up the frontend. Default port is `3000` for a [`create-react-app`](https://github.com/facebook/create-react-app) project.

```bash
# start react app
npm start
```

## Architecture

**System Architecture**

Big picture view of the application at a glance.

![System Architecture](./architecture_diagrams/MockStocksSystem.png "System Architecture")

**Database Architecture**

MongoDB database structure following [normalized data models.](https://docs.mongodb.com/manual/core/data-model-design/#normalized-data-models)

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
