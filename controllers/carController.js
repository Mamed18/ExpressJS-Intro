const axios = require('axios')

//service to get all cars
const getAllCars = async (req,res) => {
    try {
        const { data } = await axios.get('https://663f715ee3a7c3218a4d14c1.mockapi.io/api/cars')
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//service to get car by id
const getCarById = async (req,res) => {
    try {
        const { data } = await axios.get(`https://663f715ee3a7c3218a4d14c1.mockapi.io/api/cars/${req.params.id}`)
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//service to delete car by id
const deleteCar = async (req,res) => {
    try {
        const { data } = await axios.delete(`https://663f715ee3a7c3218a4d14c1.mockapi.io/api/cars/${req.params.id}`)
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {getAllCars, getCarById, deleteCar}