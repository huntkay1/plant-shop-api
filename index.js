const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost', // or your MySQL server IP
    user: 'root', // your MySQL username
    password: 'Pickles98!', // your MySQL password
    database: 'fake_plant_shop' // your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// // Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Fake Plant Store API');
});

// Route to get all products
app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});