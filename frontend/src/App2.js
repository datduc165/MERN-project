import { useState, useEffect } from "react";
import Axios from "axios";
function App() {
    const [listOfVehicles, setListOfVehicles] = useState([]);
    const [vehicle, setVehicle] = useState({ 
      busCode: "",
      maxSeat:"",
      type:""
    });
    function handleChange(event){
      const {name, value}= event.target;
      console.log(event.target);
      setVehicle((prevValue)=>{
        return {
          ...prevValue,
          [name]:value
        }
      })
    }
    useEffect(() => {
      Axios.get("http://localhost:3001/getVehicle").then((response) => {
  
        // setListOfVehicles((preResult) =>[...preResult,response.data]);
        setListOfVehicles(response.data);
        // console.log(typeof(response.data[0].route[0].departDateTime));
        console.log("Am i repeating")
      })
    }, []);
    const createVehicle = () => {
      Axios.post("http://localhost:3001/createVehicle", vehicle).then((response) => {
        console.log(response);
        alert("Bus Created!");
        // need to check if the respone return that the bus is created
        // then we will update the list of vehicles as well with the submitted vehicle
        // TO DO more
      })
    }
    function getDateTime(dateTimeString) {
      let dateTime = new Date(dateTimeString)
      return dateTime.toLocaleString();
    }
    return (
      <div >
  
        <header className="App-header">
          {listOfVehicles.map((vehicle) => {
            return (
              <div>
                <h2>Bus Number: {vehicle.busCode}</h2>
                <h2>Max Seat: {vehicle.maxSeat}</h2>
                {/* <h2>Depart: {getDateTime(vehicle.route[0].departDateTime)}</h2> */}
              </div>
            )
          })}
          <div className="App-header">
            <input type="text" name="busCode" onChange={handleChange} value={vehicle.busCode} placeholder='Bus code...' />
            <input type="number" name="maxSeat" onChange={handleChange} value={vehicle.maxSeat} placeholder='Max seat...' />
            <input type="checkbox" name="type" id="vehicleType" onChange={handleChange} value="true" />
            <label for="vehicleType">Is this a vip type</label>
            <button onClick={createVehicle}> Create vehicle</button>
          </div>
        </header>
      </div>
    );
  }

  export default App2;