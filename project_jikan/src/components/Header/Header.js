import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

function Header() {
    return (
        <div className='Header'>
            <h1>HENRY Anime List</h1>
            <Nav />
        </div>
    )
}

export default Header