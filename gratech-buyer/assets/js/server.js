const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static('public'));

// Handle form submissions
app.post('/submit-form', (req, res) => {
    // Process form submission here
    // For simplicity, just sending a success response
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});