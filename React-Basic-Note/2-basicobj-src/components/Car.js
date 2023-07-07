import React, { useState } from 'react'

export default function Car() {
    function changeModel(e) {
         
        setCar((previousState)=> {
         return {...previousState, model: e.target.value}
        })
    }
    const [model, setModel] = useState("Fiesta")
    const [car , setCar] = useState ({
       "brand": "Ford" ,
       "model": model,
       "year": 2023,
       "color": "red"
    }) 
  return (
     <>
     <h3>I have a {car.brand}- {car.model} car with {car.year} year and  {car.color} color</h3>
     <label>Model :</label>
     <input type='text' onChange={(e)=> {

        changeModel(e)
     }} />
     </>
  )
}
