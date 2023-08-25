import React, { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'
import { Link } from 'react-router-dom'

const Home = () => {

    // titles
    let { photos } = useContext(AppContext)

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='planetListContainer'>
      {/* <h1 className='cureTitle'>Cure Your Spacey</h1>   */}
      <img src="https://cutewallpaper.org/25/animated-galaxy-wallpaper-gifs/aesthetic-77e0e-galaxy-61404-wallpaper-7fcce-gif-b474c-largest-40883-wallpaper-3d09b-portal.gif" className='topeGif'/>
      {/* <h2>Visit a planet</h2> */}
      <img src='https://i.ibb.co/dGhVFzW/VISIT-A-PLANET.png' alt='visit text' className='visitTxt' ></img>
      <img src="https://cutewallpaper.org/25/animated-galaxy-wallpaper-gifs/aesthetic-77e0e-galaxy-61404-wallpaper-7fcce-gif-b474c-largest-40883-wallpaper-3d09b-portal.gif" className='topeGif'/>
      {/* <h2>HOME PAGE</h2> */}

      <ul>
        { 
            photos.map(( photo, index ) => {
                return (
                    <Link to={`/${photo.title.replaceAll(' ', '')}`}>
                        <li key={index}> {photo.title}</li>
                    </Link>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Home
