import BaseController from "../utils/BaseController";
import express from "express"
import { carsService } from "../services/CarsService";



export class CarsController extends BaseController {
    constructor() {
        super("api/cars")
        this.router
            .get('', this.getAll)
            .get('/:id', this.getCarById)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }
    async getAll(req, res, next) {
        try {
            let cars = await carsService.getAll()
            res.send({
                data: cars, message: "got the cars"
            })
        } catch (error) {
            next(error)
        }
    }

    async getCarById(req, res, next) {
        try {
            let car = await carsService.getCarById(req.params.id)
            res.send({
                data: car, message: "got the car"
            })
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let rawCarData = req.body
            let car = await carsService.create(rawCarData)
            res.send({ data: car, message: "created the car!" })
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            let rawEditedCarData = req.body
            let car = await carsService.edit(req.params.id, rawEditedCarData)
            res.send({ data: car, message: "edited the car!" })
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await carsService.delete(req.params.id)
            res.send("Deleted")
        } catch (error) {
            next(error)
        }
    }
}