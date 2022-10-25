const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
    passenger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Passenger"
    },
    route: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Route"
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
    seatIndex: Number
});
const Reserve = mongoose.model("Reserve", reserveSchema);
module.exports = Reserve;
