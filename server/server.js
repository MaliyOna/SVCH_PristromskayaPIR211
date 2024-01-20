const express = require('express')
const cors = require('cors')
const allRouter = require('./routers/allRouter')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001

const app = express();

app.use(cors())
app.use(express.json());
app.use("/all", allRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://veronikapr777:1fJDx336HXf6FI4a@cluster0.bxjndwv.mongodb.net/?retryWrites=true&w=majority`)

        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}

start();