import axios from "axios";
import React, { useState } from "react";

function Weather() {
 
    // object of Date()
    const d = new Date();
    console.log(d);
   // useState for setting inputCity start
   const[inputCity,setInputCity]=useState("");

  /// useState for setting inputCity end
    // code for gettin day
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekday[d.getDay()];

    // api details
    const apiKey = "6979f25dc0e700c0585e379dd7038a58";
    const [data, setData] = useState({});
    const getWeatherDetails = (cityName) => {
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
        axios.get(apiURL).then((res) => {
            console.log("response", res.data);
            setData(res.data);
        }).catch((err) => {
            console.log("Error", err);
        })
    }
// getInputData method start 
  const getInputData=(e)=>{
   setInputCity(e.target.value);
  }

// getInputData method end
  //handlerSearch method start 
 const handlerSearch=()=>{
     getWeatherDetails(inputCity);
 }
return (
        <div className="wrapper-class  mr-auto mt-auto mb-auto w-1/4 h-1/4 p-5 rounded-t-lg font-[Poppins] bg-sky-500 shadow-2xl shadow-sky-800 ml-auto">

            <h1 className="text-center font-bold font-[Poppins] tracking-widest text-lg uppercase text-white ">
                Weather Forcast</h1>
            <div className="weather-info-section p-4  bg-black bg-opacity-20 rounded-t-md mt-6  ">
                <h2 className="text-white text-sm   text-center tracking-widest">Weather Report </h2>
                <hr/>
                <div className="time-day flex justify-between mt-2">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/27-weather/weather.svg" className="w-14 h-14" alt="weather-icons" />
                    <h2 className="text-center text-white mt-auto mb-auto">{((d.getHours())%12)}:{d.getMinutes()} {d.getHours>12?'AM':'PM'}</h2>
                </div>
                <div className="time-day flex justify-between mt-2">
                    <h2 className="text-center  ">{day}</h2>
                    <h1 className="text-white mt-auto mb-auto ">{data.name}<br />{((data.main?.temp) - 273.15).toFixed(2)}°C</h1>
                </div>     
          </div>
            <div className="input-fields ml-auto mr-auto p-4 bg-white">
                <input type="search" name="city" placeholder="Enter city" onChange={getInputData} value={inputCity} className="w-full h-10 rounded-md mt-2  bg-black bg-opacity-20 text-center uppercase" />
                <input type="submit" name="search" placeholder="Search" onClick={handlerSearch} className="w-full h-10 rounded-md mt-2 bg-black bg-opacity-60 cursor-pointer text-white hover:text-black hover:border-black-400   hover:bg-white" />
            </div>
        </div>
    )

}

export default Weather;
