
export default class Car {
    constructor(data) {
        this.id = data._id || data.id
        this.make = data.make
        this.model = data.model
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description

    }

    get Template() {
        return /* html */`
        <div class="col-4 border border-rounded shadow">
        <h1>${this.make}</h1>
        <h1>${this.model}</h1>
        <h1>${this.year}</h1>
        <h1>${this.price}</h1>
        <img class="img-fluid" src="${this.imgUrl}">
        <h1>${this.description}</h1>
        <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
        <button class="btn btn-success" onclick="app.carsController.bidOnCar('${this.id}')">Bid</button>
        </div>
        `
    }
}