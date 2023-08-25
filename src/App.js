import { useContext } from 'react';
import './App.css';
import { AppContext } from './contexts/app_context';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home-page/Home';
import SpaceItem from './pages/space-item/SpaceItem';
import Picture from './components/picture/Picture';
import Title from './components/title/Title';
import Explanation from './components/explanation/Explanation';
import { Link } from 'react-router-dom/dist';

function App() {

  let { test, photos } = useContext( AppContext )
  console.log(photos)

  return (
    <div className="App">
          <div className='titleContainer'>
          {/* <img src="https://cutewallpaper.org/25/animated-galaxy-wallpaper-gifs/aesthetic-77e0e-galaxy-61404-wallpaper-7fcce-gif-b474c-largest-40883-wallpaper-3d09b-portal.gif"/> */}
          <Link to="/">
          <img className='main' src="https://i.ibb.co/nM6Hzcv/g-E-lo-GO1png.png"/>
          </Link>
         
      </div>
      {/* <hr/> */}
     <Routes>
  <Route path="/" element={<Home />} />
  {photos.map((photo, index) => (
    <Route
      key={index}
      path={`/${photo.title.replaceAll(' ', '')}`}
      element={<SpaceItem item={photo} />}
    />
  ))}
</Routes>

  
      {/* {
        photos.map(( photo, index ) => {
          return (
            <div key={index}>
              <Title photo={photo} />
              <Picture photo={photo}/>
              <Explanation photo={photo}/>
              <hr/>
            </div>
          )
        })
      } */}
    </div>
  );
}

export default App;
