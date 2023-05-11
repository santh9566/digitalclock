import React,{ useState,useEffect }from 'react';
import './App.css';
import Image from './image.jpg'

function App() {
    const [time,setTime]=useState(new Date());

    useEffect (() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      },1000);

      return()=>{
        clearInterval(intervalId);
      };
    },[]);

    return(
      <div className="App">
        <img src= {Image} alt='background'></img>

        <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
  }
      

export default App;
