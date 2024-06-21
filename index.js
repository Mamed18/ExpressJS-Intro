const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { getAllCars, getCarById, deleteCar } = require('./controllers/carController')
dotenv.config()
const port = process.env.port || 4000


app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/cars',getAllCars)
app.get('/cars/:id',getCarById)
app.delete('/cars/:id',deleteCar)

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})