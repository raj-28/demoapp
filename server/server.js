const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Use cors middleware

// Sample data
const backendData = { message: "Hello from backend!" };

app.get('/data', (req, res) => {
    res.json(backendData);
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
