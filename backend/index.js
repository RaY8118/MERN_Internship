const express = require('express')
const app = express()
const port = 3000
const connect = require('./dbConnection')
const userRoutes = require('./routes/userRoutes')
connect();

app.use("/api/users", require("./routes/userRoutes"));
app.get('/', (req, res) => {
    res.send("heloow")
})

app.post('/create', (req, res) => {
    console.log(req)
    res.send("Post req received")
})

app.get('/get', (req, res) => {
    res.send('Get req recieved')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


