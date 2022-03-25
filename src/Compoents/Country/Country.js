import React from 'react'
import './Country.css'

export default function Country(props) {
    console.log(props)
    const {name,population,region, area,flags} = props.country;
  return (
    <div className='country'>
      <img src={flags.png} alt="" srcset="" />
        <h1>Name: {name.common}</h1>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p><small>Area: {area}</small></p>
    </div>
  )
}
