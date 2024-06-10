const mongoose = require('mongoose')

// async function main() {
//     await mongoose.connect("mongodb+srv://admin:admin@internship.u9knsrp.mongodb.net/?retryWrites=true&w=majority&appName=Internship")
//     console.log('Connected')
// }


const connection = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://admin:admin@internship.u9knsrp.mongodb.net/backend?retryWrites=true&w=majority&appName=Internship");
        console.log(conn.connection.name)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connection;