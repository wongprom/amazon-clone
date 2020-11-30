const express = require('express');
const functions = require('firebase-functions');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HssWsDHIJLf7ahjKhYBGTryG1jn3U10pEuHXPysqCRLSPqCfyxqPYrpMAO5wkwJUmE8JDjK5CD37qHbt2D4xaHw00rp6U01F9'
);

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello World'));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listend command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-f609f/us-central1/api
