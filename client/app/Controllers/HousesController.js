import _housesService from "../Services/HousesService.js";

import store from "../store.js";

function _draw() {
    let template = ""
    let houses = store.State.houses
    houses.forEach(house => template += house.Template)
    document.getElementById("houses").innerHTML = template
}
//Public
export default class HouseController {
    constructor() {
        console.log("hello from house controller")
        store.subscribe("houses", _draw)
    }
    addHouse(event) {
        event.preventDefault()
        let formData = event.target

        let rawHouseData = {
            levels: formData.levels.value,
            bedrooms: formData.bedrooms.value,
            bathrooms: formData.bathrooms.value,
            year: formData.year.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value,
            description: formData.description.value,
        }
        _housesService.addHouse(rawHouseData)

        document.getElementById("Houses").classList.add("hidden")
        document.getElementById("houses").classList.add("hidden")
        document.getElementById("post-house").classList.add("hidden")
    }
    deleteHouse(houseId) {
        _housesService.deleteHouse(houseId)

    }
    bidOnHouse(houseId) {
        _housesService.bidOnHouse(houseId)
    }
    Houses() {
        document.getElementById("houses").classList.remove("hidden")
        document.getElementById("post-house").classList.remove("hidden")
        document.getElementById("post-car").classList.add("hidden")
        document.getElementById("cars").classList.add("hidden")
        document.getElementById("post-job").classList.add("hidden")
        document.getElementById("Jobs").classList.add("hidden")
        document.getElementById("job").classList.add("hidden")
        document.getElementById("Cars").classList.add("hidden")

        _housesService.getHouses()
    }

    postHouse() {
        document.getElementById("Houses").classList.remove("hidden")

    }
}
