import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";




class HousesService {
    async edit(houseId, rawEditedHouseData) {
        return await dbContext.Houses.findByIdAndUpdate(houseId, rawEditedHouseData, { upsert: true })
    }
    async delete(houseId) {
        return await dbContext.Houses.findByIdAndDelete(houseId)
    }
    async getAll() {
        return await dbContext.Houses.find()
    }

    async getHouseById(id) {
        let house = await dbContext.Houses.findById(id)
        if (!house) {
            throw new BadRequest("Invalid Id")
        }
        return house
    }
    async create(rawHouseData) {
        let house = await dbContext.Houses.create(rawHouseData)
        return house
    }

}



export const housesService = new HousesService();