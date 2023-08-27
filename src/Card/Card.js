import React from 'react'
import './Card.css'
import { useNavigate } from "react-router-dom";

function Card({movie}) {
  const navigate=useNavigate();
  const posterWidth = 323; 
  const posterHeight = 450;
  const defaultWidth = 300;
  const defaultHeight = 300;
  const imgurl=movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:'https://cinemate1001.netlify.app/static/media/backup.e70252f8aea393e02447.jpg '
  const width=movie.poster_path?posterWidth : defaultWidth;
  const height=movie.poster_path?posterHeight:defaultHeight;
  

  const handleimageclcik=(id)=>{
    console.log(id)
    navigate(`/movie/${id}`)
   }

  return (
    <>
        <div className="card_container">
            <div className="cardimg">
                <img onClick={()=>handleimageclcik(movie.id)} src={imgurl} width={width} height={height} alt=""  />
            </div>
            <div className="cardtitle">
                  {movie.original_title}
            </div>
            <div className="overview">
                <p>{movie.overview}</p>
            </div>
        </div>
    </>
  )
}

export default Card
