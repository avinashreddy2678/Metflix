import './App.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Sliders from './components/Sliders';

function Home() {
  const trendingurl="https://api.themoviedb.org/3/trending/movie/day?api_key=8373bc45584784eb69a771ffff4afac7  ";
  const toprated='https://api.themoviedb.org/3/movie/top_rated?api_key=8373bc45584784eb69a771ffff4afac7';
  const popular="https://api.themoviedb.org/3/movie/popular?api_key=8373bc45584784eb69a771ffff4afac7";
  const upcoming="https://api.themoviedb.org/3/movie/upcoming?api_key=8373bc45584784eb69a771ffff4afac7";
  return (
    <div className="App">
    
      <Navbar></Navbar>
      <Banner></Banner>
      <Sliders title="Trending now" url={trendingurl} isLarge></Sliders>
       <Sliders title="Top-Rated" url={toprated}></Sliders>
      <Sliders title="Popular" url={popular}></Sliders>  
      <Sliders title="Upcoming" url={upcoming}/>

    </div>
  );
}

export default Home;
