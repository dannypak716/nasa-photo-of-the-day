import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [nasaPic, setNasaPic] = useState([]);

  useEffect( () => {
    axios.get ('https://api.nasa.gov/planetary/apod?api_key=ZtuxhRNJqMmPL1ZUidSK3B8xjHrMdU3G9XYvTbxi')
    .then ( res => {
      setNasaPic(res.data);
    }).catch( err => console.log(err));
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
