import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService"



export class HousesController extends BaseController {
    constructor() {
        super("api/houses")
        this.router
            .get('', this.getAll)
            .get('/:id', this.getHouseById)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            let houses = await housesService.getAll()
            res.send({ data: houses, message: "got the houses" })
        } catch (error) {
            next(error)
        }
    }
    async getHouseById(req, res, next) {
        try {
            let house = await housesService.getHouseById(req.params.id)
            res.send({
                data: house, message: " got the house"
            })
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let rawHouseData = req.body
            let house = await housesService.create(rawHouseData)
            res.send({ data: house, message: "created the house!" })
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            let rawEditedHouseData = req.body
            let house = await housesService.edit(req.params.id, rawEditedHouseData)
            res.send({ data: house, message: "edited the house!" })
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await housesService.delete(req.params.id)
            res.send("Deleted")
        } catch (error) {
            next(error)
        }
    }
}
