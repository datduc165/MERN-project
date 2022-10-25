const mongoose = require('mongoose');
const listLocation = ['Ho Chi Minh city', 'Nha Trang city', 'Da Nang city', 'Hue city', 'Cam Ranh city']

const routeSchema = new mongoose.Schema({
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    },
    reserve: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reserve"
    }],
    fare: Number,
    fromLocation: {
        type: String,
        enum: listLocation
    },
    toLocation: {
        type: String,
        enum: listLocation
    },
    departDateTime: Date //this will also have the time for it.
});

const Route = mongoose.model("Route", routeSchema);
module.exports = Route;
