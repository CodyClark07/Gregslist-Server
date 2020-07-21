import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors";

class CarsService {
    async edit(carId, rawEditedCarData) {
        return await dbContext.Cars.findByIdAndUpdate(carId, rawEditedCarData, { upsert: true })
    }

    async delete(carId) {
        return await dbContext.Cars.findByIdAndDelete(carId)
    }

    async getCarById(id) {
        let car = await dbContext.Cars.findById(id)
        if (!car) {
            throw new BadRequest("Invalid Id")
        }
        return car
    }
    async getAll() {
        return await dbContext.Cars.find()
    }
    async create(rawCarData) {
        let car = await dbContext.Cars.create(rawCarData)
        return car
    }
}

export const carsService = new CarsService();