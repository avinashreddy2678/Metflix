import React, { useEffect, useState } from 'react'
import './Sliders.css';
import { useNavigate } from "react-router-dom";
function Sliders({title,url,isLarge}) {
    let navigate=useNavigate();
    const [movies,setmovies]=useState([]);
     useEffect(()=>{
             function fetchdata(){
                   fetch(url)
                   .then(response=>response.json())
                   .then(data=>{
                    setmovies(data.results)
                   })
            }
            fetchdata();
     }, [url])
     const handleimgclcik=(id)=>{
      console.log(id)
      navigate(`/movie/${id}`)
     }
  return (
    <>
    <div className='Slider'>
      <h1> {title}</h1> 
      <div className="container">
         {movies.map(movie =>(
               <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${ isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} onClick={()=>(handleimgclcik(movie.id))}/>
          ) )
         }
      </div>
    </div>
      
    </>
  )
}

export default Sliders
