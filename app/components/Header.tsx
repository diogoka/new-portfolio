import React from 'react'
import Link from 'next/link'
import './Header.css'


const Header = () => {
  return (
    
    
    <div className='header'>
    <Link href="/">index</Link>  
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/contact">Contact</Link>
    </div>
    
  )
}

export default Header