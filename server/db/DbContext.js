import ValueSchema from "../models/Value";
import CarSchema from "../models/Car";
import HouseSchema from "../models/House"
import JobSchema from "../models/Job"
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
  Houses = mongoose.model("House", HouseSchema);
  Jobs = mongoose.model("Job", JobSchema);


}

export const dbContext = new DbContext();
