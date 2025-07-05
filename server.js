const express = require('express');
const app = express();
const db = require('./src/DB');

const PORT = 3300;

app.get('/', (req, res) => {
    res.send('Back End ');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})