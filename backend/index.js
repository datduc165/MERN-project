// db.getCollection("seats").updateOne({"_id":ObjectId("629344edec5a91318984b753")},{$set:{"bus":{"_id" : ObjectId("629347bcb139547574e9ffd8")}}})
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const mongoose = require('mongoose');
// const res = require("express/lib/response");
const cors = require("cors");

// import module
const Vehicle = require("./models/Vehicle");
const Passenger = require("./models/Passenger");
const Route = require("./models/Route");
const Reserve = require("./models/Reserve");
// import controller
const { getVehicle, createVehicle } = require("./controllers/Vehicle");
const { getRoute, createRoute, asignBusRoute } = require("./controllers/Route");


// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(bodyParser.json({ extended: true }));
// app.use(express.json());
app.use(cors());


// ######################################################################################
const CONNECTION_URL = "mongodb+srv://datduc165:Doilathe165@cluster0.6bgk5qs.mongodb.net/buslineDB?retryWrites=true&w=majority";
// "mongodb+srv://datduc165:Doilathe165@cluster0.6bgk5qs.mongodb.net/buslineDB";

const PORT = 3001;

mongoose.connect(CONNECTION_URL, err => {
    if (err) throw err;
    else console.log('connected to mongoDB!!!')
});
// ######################################################################################

//####################################################################################### 
/*Route.findOne({ _id: "" }, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("this is the result of Route when FindOne \n", result);
        // departDateTime stored in database will be defaultly printed in IOS format,
        // but we can use toLocaleTimeString or toLocaleDateString to print out the time and date in String format
        // const dateTimeString = result.departDateTime.toLocaleTimeString('en-US', { hour12: false, 
        //     hour: "numeric", 
        //     minute: "numeric"});
        // console.log(dateTimeString);
        //--------------------------------
        // const date1 = new Date(2022,05,03);
        // const sampleTime = '16:30';
        // const hours = sampleTime.slice(0, 2);
        // const minutes = sampleTime.slice(3);
        // date1.setHours(hours, minutes);
        // console.log(date1.getHours());
        // result.departDateTime=date1;
        // result.save(function(err){
        //     if(err){ console.log("Fail to update route")}
        //     else{
        //         console.log("Route when add date \n", result);
        //     }
        // });
    }
});*/

app.get("/", (req, res) => {
    console.log("Hi ~~~`")
    res.send("hello world~");
});
//#######################################################################################
app.get("/getVehicle", getVehicle);
//#######################################################################################
app.post("/createVehicle", createVehicle);
//#######################################################################################
app.get("/getRoute", getRoute);
//#######################################################################################
app.post("/createRoute", createRoute);
//#######################################################################################
app.post("/asignVehicle", asignBusRoute)
//#######################################################################################
//#######################################################################################
//#######################################################################################

app.listen(PORT, function (err) {
    if (err) throw err;
    else console.log("Server started successfully on port:", PORT);
});