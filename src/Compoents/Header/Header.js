import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div>
        <h1>Welcome my React app</h1>
        <nav className='menu'>
            <a href="/home">home</a>
            <a href="/shops">shops</a>
            <a href="/about us">about us</a>
        </nav>
    </div>
  )
}
