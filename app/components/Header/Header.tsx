import React from 'react'
import Link from 'next/link'
import './Header.css'


const Header = () => {
  return (
    <header className='header'>
    <Link className='my-link' href="/">index</Link>  
    <Link className='my-link' href="/about">About</Link>
    <Link className='my-link' href="/projects">Projects</Link>
    <Link className='my-link' href="/contact">Contact</Link>
    </header>
    
  )
}

export default Header