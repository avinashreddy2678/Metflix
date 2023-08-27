import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import './Searchpage.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
function Searchpage() {
   const navigate =useNavigate();



    const [data,setdata]=useState([]);
    const [searchElement,setsearchElement]=useState("");
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=8373bc45584784eb69a771ffff4afac7`)
        .then(response => response.json())
        .then(data => {
          const genres = data.genres;
          setdata(genres);
    },[])
    
  })
  const clickHandle=(event)=>{
        setsearchElement(event.target.value);
  };
  const clickenter=()=>{
    setsearchElement("");
    navigate(`/search/key/${searchElement}`)
  }
  // with movie id
  const grabkey=(newid)=>{
       navigate(`/searchs/id/${newid}`)
  }

  return (
    <>
     <Navbar/>
     
     {/* */}
    
    <div className="mycontainer">
              <div className="searchBox">
                          <input type="text" placeholder='search here' onChange={clickHandle} value={searchElement}/>
                         <button className='search-button' onClick={()=>{clickenter()}}><FaSearch/></button>
              </div>
            <div className='Lists'>
              {data.map(movie=>(
                <div className="buttons" key={movie.id}>
                  
                <button onClick={  ()=>{grabkey(movie.id)}  } >{movie.name}</button>
               
                </div>
              ))}
             
            </div>
            </div>
                
 
    </>
  )
}

export default Searchpage
