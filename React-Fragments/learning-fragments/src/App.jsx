import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'

function App() {
  let foodItems = ["roti", "Dal", "salad", "green", "milk"];
  return (
    <>
      <h1 className="lead">Heathy Iteams</h1>
      <ul className="list-group">
        {
          foodItems.map((food) => (
            <li className="list-group-item">{food}</li>
          ))
        }
      </ul>
    </>
  );
}

 export default App
   