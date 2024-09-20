const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080; // Update the PORT to use environment variable or default to 8080
const burgersData = require('./burgers.json'); // Import the JSON file

app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Serve static files from the 'assets' directory
app.use('/assets', express.static('assets'));

app.get('/burgers', (req, res) => {
    // Update the image paths to be absolute URLs with current hostname
    const hostname = req.hostname;
    const protocol = req.protocol;
    const updatedBurgersData = burgersData.map((chair, index) => ({
        ...chair,
        image: `${protocol}://${hostname}/assets/burgers_product_${index + 1}.png` // Generate dynamic PNG image URLs
    }));
    res.status(200).json(updatedBurgersData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



