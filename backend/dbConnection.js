const mongoose = require('mongoose')

// async function main() {
//     await mongoose.connect(process.env.MONGO_URI)
//     console.log('Connected')
// }


const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(conn.connection.name)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connection;