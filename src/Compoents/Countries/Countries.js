import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([])
useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => setCountries(json))
},[])
  return (
    <div className='countries'>
        {
            countries.map(country => <Country country ={country}></Country>)
        }
        
    </div>
  )
}



