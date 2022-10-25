const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    route:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Route"
    }],
    busCode: String,
    maxSeat: Number,
    type: Boolean,

});
// vehicle should also have a record of its routes
const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;