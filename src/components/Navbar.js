import React from 'react'
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate();
  return (
    
    <div className='nav-bar'>
      <div className="title">
       
        <div className="name">
           <div onClick={()=>{navigate('/')}}> <img src="https://t3.ftcdn.net/jpg/01/25/57/92/360_F_125579217_HL9SYmJR8KzVZ5Jfddr4BPyD3QxSSHtZ.jpg" alt=""/> </div>

        <span><h3>Movies</h3></span>
        </div>
        </div>
        <div className="right">
            <div className="search">
              <div className="search_input">
            <Link to={'/search/'}>
            <button className='search-button'><FaSearch/></button>
                </Link>
               
              </div>
            </div>
            <div className="profile">
            <h3>Profile</h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar
