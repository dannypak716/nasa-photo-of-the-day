import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Header';
import NASA from './NASA';
import Footer from './Footer';

function App() {
  const [nasaPic, setNasaPic] = useState([]);

  useEffect( () => {
    axios.get ('https://api.nasa.gov/planetary/apod?api_key=ZtuxhRNJqMmPL1ZUidSK3B8xjHrMdU3G9XYvTbxi')
    .then ( res => {
      setNasaPic(res.data);
    }).catch( err => console.log(err));
  }, [])


  return (
    <div className = "App">
      <div className = "Header">
        <Header />
      </div>
      <div className = "NASA">
        <NASA nasaPic = {nasaPic} />
      </div>
      <div className = "Footer">
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
