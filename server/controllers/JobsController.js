import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService"



export class JobsController extends BaseController {
    constructor() {
        super("api/jobs")
        this.router
            .get('', this.getAll)
            .get('/:id', this.getJobById)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            let jobs = await jobsService.getAll()
            res.send({ data: jobs, message: "got the jobs" })
        } catch (error) {
            next(error)
        }
    }
    async getJobById(req, res, next) {
        try {
            let job = await jobsService.getJobById(req.params.id)
            res.send({
                data: job, message: " got the job"
            })
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let rawJobData = req.body
            let job = await jobsService.create(rawJobData)
            res.send({ data: job, message: "created the job!" })
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            let rawEditedJobData = req.body
            let job = await jobsService.edit(req.params.id, rawEditedJobData)
            res.send({ data: job, message: "edited the job!" })
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await jobsService.delete(req.params.id)
            res.send("Deleted")
        } catch (error) {
            next(error)
        }
    }
}
