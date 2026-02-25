const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = './products.json';

// Helper to read JSON file
const readData = () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
};

// Helper to write to JSON file
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// --- ROUTES ---

// Get all products
app.get('/api/products', (req, res) => {
    res.json(readData());
});

// Add or Update product
app.post('/api/products', (req, res) => {
    const products = readData();
    const newProduct = { id: Date.now(), ...req.body };
    products.push(newProduct);
    writeData(products);
    res.status(201).json(newProduct);
});

// Delete product
app.delete('/api/products/:id', (req, res) => {
    let products = readData();
    products = products.filter(p => p.id != req.params.id);
    writeData(products);
    res.json({ message: "Deleted" });
});

// Admin Login Logic (matches your frontend credentials)
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin123") {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: "Invalid login" });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));