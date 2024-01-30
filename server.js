// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/apod', async (req, res) => {
    try {
        const apiKey = process.env.NASA_API_KEY;
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
