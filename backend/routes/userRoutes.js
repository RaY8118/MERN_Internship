const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    res.send("hello")
})

router.post('/get', (req, res) => {
    console.log(req)
    res.send("hello")
})


module.exports = router