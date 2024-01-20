const express = require('express')
const cors = require('cors')
const allRouter = require('./routers/allRouter')

const PORT = process.env.PORT || 3001

const app = express();

app.use(cors())
app.use(express.json());
app.use("/all", allRouter);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`)
        });
    } catch (error) {
        console.log(`error`)
    }
}

start();