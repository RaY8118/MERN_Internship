const express = require('express');
const cors = require('cors');
const connect = require('./dbConnection');
const userModel = require('./models/userModel');

const app = express();
const port = 4000;
const dotenv = require('dotenv');
dotenv.config({ path: "./config/config.env" });
// Connect to the database
connect();

// Middleware to enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow these HTTP methods
    credentials: true, // Allow cookies to be sent with requests
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Define your routes
app.use("/api/users", require("./routes/userRoutes"));

// Example route
app.get("/getData", async (req, res) => {
    try {
        const data = await userModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
