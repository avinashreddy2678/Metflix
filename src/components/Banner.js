import React, { useEffect, useState } from 'react'
import './Banner.css';
function Banner() {

  const [ data,setdata]=useState([]);
  useEffect(()=>{
    function fetchdata(){
          fetch(' https://api.themoviedb.org/3/discover/movie?api_key=8373bc45584784eb69a771ffff4afac7&with_original_language=ta'
          )
          .then(response=>response.json())
          .then(data=>{
            setdata(data.results[Math.floor(Math.random()*20+1)]);
          })
    }
    fetchdata();
  },[])


  return (
    <>
    <div className="banner" >
            <div className="img_container">
              
              <div className="myimg">
              <div className="display_img">
                <img src={`https://image.tmdb.org/t/p/w500${ data.poster_path}`} alt={data.title} />
              </div>
              </div>
              <div className="content">
                  <div className="title">
                    <h1>{data.title}</h1>
                  </div>
                  <div className="buttons">
                    <button>Play</button>
                    <button>Mylist</button>
                  </div>
                  <div className="overview">
                    <p>{data.overview}</p>
                  </div>
              </div>
            </div>
    </div>
    </>
  )
}

export default Banner
