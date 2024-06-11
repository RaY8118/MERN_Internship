const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controller/userController')
// const app = express()
// app.use("/api/users", require("./routes/userRoutes"));

router.get('/get', (req, res) => {
    res.send("hello")
})

router.post('/create', registerUser)

router.post('/login', loginUser)

router.get('/data', getUsers)

module.exports = router