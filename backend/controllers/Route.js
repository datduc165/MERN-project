const { isObjectIdOrHexString } = require("mongoose");
const Route = require("../models/Route");
const Vehicle = require("../models/Vehicle");

async function getRoute(req, res) {
    // Route.find({}, function (err, foundRoutes) {
    //     if (err) { console.log(err) }
    //     else {
    //         console.log("successfully get ROUTE from controller file!");
    //         res.json(foundRoutes);
    //     }
    // })
    const routeFounds = await Route.find({}).populate('bus', "busCode maxSeat");
    res.status(200).json(routeFounds);

};

async function createRoute(req, res) {
    const route = req.body;
    // route.departDateTime? console.log(route.departDateTime):console.log(route.fare);
    if (route.departDateTime) {
        const stringDate = route.departDateTime;
        route.departDateTime = new Date(stringDate);
        // console.log(route.departDateTime.toTimeString());
        const newRoute = new Route(route);
        await newRoute.save((err) => {
            if (err) console.log(err);
            else {
                console.log("Create route successfully~");
                res.status(201).json("OKila");
            }
        });
    } else {
        const newRoute = new Route(route);
        await newRoute.save((err) => {
            if (err) console.log(err);
            else {
                console.log("create route without depart Time successfully~");
                res.status(201).json("OKila");
            }
        });
    }


}
// asignBusRoute done, can asign bus schedule but it lack about departDateTime,
async function asignBusRoute(req, res) {
    const busSchedule = req.body;
    if (busSchedule.busCode) {
        let busResult;
        Vehicle.findOne({ "busCode": busSchedule.busCode }, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                busResult = result;
                // console.log("found bus! ",busResult._id)
            }
        });
        const routeFound = await Route.findById(busSchedule.routeId)

        // console.log("found route~~~")
        busResult.route.push(routeFound); //update Vehicle database
        routeFound.bus = busResult._id; //update Route database
        try { await routeFound.save(); } catch (error) { res.status(404).json({ message: error.message }) }
        try { await busResult.save(); } catch (error) { res.status(404).json({ message: error.message }) }


    }
    res.status(200).json("OKila for asignVehicle");
}


module.exports = { getRoute, createRoute, asignBusRoute };