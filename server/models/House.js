import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema({
    levels: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true }
},
    { timestamps: true, toJSON: { virtuals: true } })

export default House