
import Car from "../Models/Car.js";
import store from "../store.js";



const _api = axios.create({
    baseURL: "//localhost:3000/api",
    timeout: 8000
})
//Public
class CarsService {
    constructor() {
        console.log("Hello from the car service")
    }
    addCar(rawCarData) {
        _api.post("cars", rawCarData).then(res => {
            console.log(res);
            this.getCars()
        }).catch(err => console.error(err))

    }
    deleteCar(carId) {
        _api.delete("cars/" + carId).then(res => {
            this.getCars()
        }).catch(err => console.error(err))
    }
    bidOnCar(carId) {
        let updatedCar = store.State.cars.find(car => car.id == carId)
        updatedCar.price += 500
        _api.put("cars/" + carId, updatedCar).then(res => {
            let cars = store.State.cars.map(c => {
                if (c.id == carId) {
                    return new Car(res.data.data)
                }
                else {
                    return new Car(c)
                }
            })
            store.commit("cars", cars)
        }).then(err => console.error(err))
    }

    getCars() {
        _api.get("cars").then(res => {
            console.log(res);
            let cars = res.data.data.map(rawCarData => new Car(rawCarData))
            store.commit("cars", cars)
        }).catch(err => console.error(err))
    }
}

const SERVICE = new CarsService();
export default SERVICE;
