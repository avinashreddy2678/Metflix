import React, { useEffect, useState } from 'react'
import './Pagewithid.css'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../Card/Card';
import '../Card/Card.css'
function Pagewithid() {
  // const param=;
  const {newid}=useParams();
    const [data,setdata]=useState([]);
   

    useEffect(() => {
      
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8373bc45584784eb69a771ffff4afac7&with_genres=${newid}`)
    .then(data=>data.json())
    .then(response => {
          setdata(response.results);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
   
  return (
    <>
    <Navbar/>
       
    <div className='listcontainer'>   
          {data.map(movie => (
           
           
            <Card movie={movie}/>
      
       
          ))}
          
        

  </div>

  </>
  )
}

export default Pagewithid
