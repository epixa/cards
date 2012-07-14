# Cards

Cards is a card game platform built in JavaScript for modern browsers. The idea
is to have a system in which it is easy to develop most card games for realtime
multiplayer gaming in the browser.

## Backend

The backend is powered by node.js. Application setup and routing occurs through
express.js. Client data synchronization is handled with socket-io. Data is
persisted in mongodb through mongoose.js.

## Frontend

The frontend is built atop backbone.js + require.js.

## Installation

* Clone this repo
* cd into the directory
* ```npm install -d``` to install all required backend dependencies
* ```node server.js``` to startup the app server in development on port 3000
* Load http://localhost:3000 in your browser

Note: Mongod will have to be running. When in development, some dummy data will
      automatically be inserted if it hasn't already.
