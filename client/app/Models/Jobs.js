
export default class Job {
    constructor(data) {
        this.id = data._id || data.id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.rate = data.rate
        this.hours = data.hours
        this.description = data.description

    }

    get Template() {
        return `
        <div class="col-3 border border-rounded shadow">
        <h1>${this.company}</h1>
        <h1>${this.jobTitle}</h1>
        <h1>${this.rate}</h1>
        <h1>${this.hours}</h1>
        <h1>${this.description}</h1>
        <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
        `
    }
}