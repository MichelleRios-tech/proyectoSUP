import React from 'react'
import{Link} from 'react-router-dom'

function Nav() {
    return (
        <div className='Nav'>
            <Link to='/home'>Home</Link>
            <Link to='/Landing'>Landing</Link>
        </div>
    )
}

export default Nav
