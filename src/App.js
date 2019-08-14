import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import Video from "./components/nasa.js";

function App() {
const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=7TEedvatBtcZa95WqVIdCySPyv7Fed6GNGxpefyi&date=2012-03-14")
    .then((info)=>{
        console.log (info.data)
  setData(info.data)
  console.log (data);
    })
    .catch(error=>{
        console.log(error);
    })
},
[]);
console.log (data)  
  return (
    <div className="App">
      <div className="shuttle">
          <h1>NASA</h1>
            <div>
              {console.log(nasa)}
              {<Video date={nasa.date} explanation={nasa.explanation} 
              src={nasa.url} media_type={nasa.media_type} hdurl={nasa.hdurl}/> }
            </div>
        </div>
    </div>
  );
}

export default App;
