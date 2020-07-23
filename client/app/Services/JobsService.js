import store from "../store.js";
import Job from "../Models/Jobs.js";

const _api = axios.create({
    baseURL: "//localhost:3000/api",
    timeout: 8000
})
//Public
class JobsService {
    constructor() {
        console.log("Hello from the job service")
    }
    addJob(rawJobData) {
        _api.post("jobs", rawJobData).then(res => {
            console.log(res);
            this.getJobs()
        }).catch(err => console.error(err))
    }
    deleteJob(jobId) {
        _api.delete("jobs/" + jobId).then(res => {
            this.getJobs()
        }).catch(err => console.error(err))
    }
    getJobs() {
        _api.get("jobs").then(res => {
            console.log(res);
            let jobs = res.data.data.map(rawJobData => new Job(rawJobData))
            store.commit("jobs", jobs)
        }).catch(err => console.error(err))
    }
}

const SERVICE = new JobsService();
export default SERVICE;
