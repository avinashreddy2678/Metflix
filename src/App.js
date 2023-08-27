import React from 'react'
import Home from './Home.js'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Searchpage from './componentsearch/Searchpage.js'
import Pagewithid from './componentsearch/Pagewithid.js'
import Pagewithkey from './componentsearch/Pagewithkey.js'
import Moviedetail from './Moviedetail/Moviedetail.js'
function App() {
  return (
    <div>
      
     {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/searchs/id/:newid" element={<Pagewithid />} />  
        <Route path="/search/key/:mykey" element={<Pagewithkey  />} />
        <Route path='/movie/:myid' element={<Moviedetail/>}/>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
