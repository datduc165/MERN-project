const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    reserve: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reserve"
    },
    lastName: String,
    firstName: String,
    phone: Number
});
const Passenger = mongoose.model("Passenger", passengerSchema);
module.exports = Passenger;