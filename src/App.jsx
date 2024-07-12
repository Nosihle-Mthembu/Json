import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const traineeDataURL = "http://localhost:4000/trainee";
  const [list,setList] = useState([]);
  useEffect(() =>{
    console.log("Succeed")
    const fetchtraineeData = async () =>{
      try{
        const response = await fetch(traineeDataURL);
        const traineeData = await response.json();
        setList(traineeData);
        // console.log("My name is", traineeData);
      }
      catch(error){
        alert(error);
      }
    };
    (async() => await fetchtraineeData())()
  },[]
);
  const car = {type:"Fiat", model:"500", color:"white"};
  const trainee = {Name:"Nosihle",
    surname:"Mthembu",
    location: "Imbali",
    colour:"Black",
    favouritecolour:"Gray",
    age:23,
  }

  return (
    <>
      <h1>{car.model}</h1>
      
      <>
      {/* {trainee.length > 0 &&}/ */}
      {list.map((trainee) => (
        <div key={trainee.length}>
          <h1>My name is {trainee.Name}</h1>
        </div>
      ))}
    </>

          {/* <h1>My name is {trainee.Name}</h1> */}

      <p>I live at {trainee.location} and my favourite colour is {trainee.favouritecolour}.</p>
    </>
  )
}

export default App
