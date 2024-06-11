const express = require('express')
const app = express()
const port = 3000
const connect = require('./dbConnection')
const userRoutes = require('./routes/userRoutes')
const userModel = require('./models/userModel')
connect();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
// app.get('/', (req, res) => {
//     res.send("heloow")
// })

// app.post('/create', (req, res) => {
//     console.log(req)
//     res.send("Post req received")
// })

// app.get('/get', (req, res) => {
//     res.send('Get req recieved')
// })


app.get("/getData", async (req, res) => {
    const data = await userModel.find();
    res.json(data)
});

app.post("/getData", async (req, res) => {
    console.log(req.body);
    try {
        const user = new userModel({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        });
        const saveuser = await user.save();
        res.status(201).sendStatus(saveuser);
    } catch (err) {
        res.status(500).send(err);
    }

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


