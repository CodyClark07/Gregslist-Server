import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";




class JobsService {
    async edit(jobId, rawEditedJobData) {
        return await dbContext.Jobs.findByIdAndUpdate(jobId, rawEditedJobData, { upsert: true })
    }
    async delete(jobId) {
        return await dbContext.Jobs.findByIdAndDelete(jobId)
    }
    async getAll() {
        return await dbContext.Jobs.find()
    }

    async getJobById(id) {
        let job = await dbContext.Jobs.findById(id)
        if (!job) {
            throw new BadRequest("Invalid Id")
        }
        return job
    }
    async create(rawJobData) {
        let Job = await dbContext.Jobs.create(rawJobData)
        return Job
    }

}



export const jobsService = new JobsService();