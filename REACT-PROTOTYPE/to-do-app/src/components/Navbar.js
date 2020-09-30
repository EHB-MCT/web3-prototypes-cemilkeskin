import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from './SivebarData'
import './Navbar.css'

function Navbar() { 

    const[sidebar, setSidebar] = useState(false)
    
    
    return ( 
        
            <nav className="nav-menu">
                <ul className='nav-menu-items'>
                    {/* <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>

                        </Link> 
                    </li> */}
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                <span>{item.title}</span>
                                </Link> 
                                </li>
                        )
                    })}
                </ul>
            </nav> 

    )
}

export default Navbar
