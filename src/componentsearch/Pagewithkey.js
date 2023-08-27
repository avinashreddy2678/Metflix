import React, { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
// import './Pagewithid.css'
function Pagewithkey() {
  const { mykey }= useParams();
  const [data,setdata]=useState([]);
    useEffect(()=>{
        setdata([]);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8373bc45584784eb69a771ffff4afac7&query=${mykey}`)

        .then(response=>response.json())
        .then(data=>{
            setdata(data.results)
        })

    },[mykey])
   console.log({mykey})
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

export default Pagewithkey
