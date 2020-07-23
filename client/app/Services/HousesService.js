import store from "../store.js";
import House from "../Models/House.js";


const _api = axios.create({
    baseURL: "//localhost:3000/api",
    timeout: 8000
})
//Public
class HousesService {
    constructor() {
        console.log("Hello from the house service")
    }
    addHouse(rawHouseData) {
        _api.post("houses", rawHouseData).then(res => {
            console.log(res);
            this.getHouses()
        }).catch(err => console.error(err))
    }
    deleteHouse(houseId) {
        _api.delete("houses/" + houseId).then(res => {
            this.getHouses()
        }).catch(err => console.error(err))
    }
    getHouses() {
        _api.get("houses").then(res => {
            console.log(res);
            let houses = res.data.data.map(rawHouseData => new House(rawHouseData))
            store.commit("houses", houses)
        }).catch(err => console.error(err))
    }
    bidOnHouse(houseId) {
        let updatedHouse = store.State.houses.find(house => house.id == houseId)
        updatedHouse.price += 10000
        _api.put("houses/" + houseId, updatedHouse).then(res => {
            let houses = store.State.houses.map(c => {
                if (c.id == houseId) {
                    return new House(res.data.data)
                }
                else {
                    return new House(c)
                }
            })
            store.commit("houses", houses)
        }).then(err => console.error(err))
    }
}

const SERVICE = new HousesService();
export default SERVICE;
