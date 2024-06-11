const User = require('../models/userModel')

const registerUser = async (req, res) => {
    const { email, password, role } = req.body;
    console.log(email, password, role)
    const existingUser = await User.findOne({
        email,
        password
    })
    if (existingUser) {
        res.send("user already exist!!!!")
    }
    else {
        const user = await User.create({
            email,
            password,
            role
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email,
            password
        })
        console.log("User found", user)
    } catch (err) {
        console.log(err)
    }
}

async function getUsers(req, res) {
    const Users = await User.find();
    console.log(Users)
    res.status(200).json(Users)
}
module.exports = { registerUser, loginUser, getUsers }