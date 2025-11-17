// Import the Express library
const express = require('express');
// Create an instance of the Express application
const app = express();
// Define the port the server will run on
const port = 3000;

// Middleware:
// Use built-in express middleware to parse incoming JSON payloads.
// This allows you to access data sent via POST requests in req.body.
app.use(express.json());

// --- GET Endpoint ---
// Handles GET requests to the root URL ('/')
app.get('/', (req, res) => {
  console.log('GET request received on /');
  // Send a simple JSON response
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the simple Node.js API! Try POSTing to, test the files does it fetch new feature /data.  new change adde for test',
    available_routes: ['GET /', 'POST /data']
  });
});

// --- POST Endpoint ---
// Handles POST requests to the '/data' URL
app.post('/data', (req, res) => {
  console.log('POST request received on /data');
  
  // The JSON data sent by the client is available in req.body
  const receivedData = req.body;

  if (!receivedData || Object.keys(receivedData).length === 0) {
    // If no data is found in the body
    return res.status(400).json({
      status: 'error',
      message: 'Please send a JSON body with your POST request.'
    });
  }

  // Log the data and send a confirmation response
  console.log('Data received:', receivedData);

  res.status(201).json({
    status: 'success',
    message: 'Data successfully processed!',
    received_data_echo: receivedData
  });
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`\nServer is running successfully on: http://localhost:${port}`);
  console.log(`\nServer is run for test on: http://localhost:${port}`);
  console.log(`\nServer is run for test on: http://localhost:${port}`);
  console.log('---');
  console.log('Test GET: curl http://localhost:3000/');
  console.log('Test POST: curl -X POST -H "Content-Type: application/json" -d \'{"key": "value"}\' http://localhost:3000/data');
  console.log('---');
});
