const express = require('express');
const app = express();
const db = require('./src/DB');

db.query('Create TABLE orders (orderId             INT IDENTITY,    orderDate           DATETIME,    totalAmount         DECIMAL(10,2),    shiptoAddress       VARCHAR(50),    shiptoCity          VARCHAR(40),    shiptoState         VARCHAR(20),    shiptoPostalCode    VARCHAR(20),    shiptoCountry       VARCHAR(40),    customerId          INT,    PRIMARY KEY (orderId)');

const PORT = 3300;



app.get('/', (req, res) => {
    res.send(db.query('SELECT *'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})