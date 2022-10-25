const Vehicle = require("../models/Vehicle");
async function getVehicle(req, res) {
    try{
        const foundResult = await Vehicle.find({}).populate('route', '');
        console.log("Vehicle controller got request, doing the job...");
        // console.log(typeof(foundResult[0].route[0].departDateTime));
        // console.log(foundResult[0].route[0].departDateTime);
        res.status(200).json(foundResult);
        console.log("?")
    }catch (error){
        res.status(404).json({message:error.message})
    }
    
    // res.send(foundResult);
};
async function createVehicle(req, res) {
    const bus = req.body;
    // console.log(bus);
    if (bus.type == '') {
        bus.type = "false";
    }
    // console.log("print bus again: ", bus);
    if (bus.busCode !== null && bus.busCode !== '') {
        const newBus = new Vehicle(bus);
        
        try{
            // await newBus.save();
            res.status(201).json("Done creating bus");
        }catch (error){
            res.status(409).json({message:error.message})
        }
        
    } else { 
        res.send("busCode can't be blank. It need a NAME ");
        // we need to send the status as well

    }


}
module.exports = { getVehicle, createVehicle };