import { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import { options, imageUrl } from '../../Constants/Constants'
import { bannerImage } from '../../urls'

function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {
   axios.get(bannerImage, options).then( (res) => {
    setMovie(res.data.results[17])
   })
  }, [])

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.poster_path : "" })`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div className='banner_buttons'>
            <button className='button' id='play'>&#9654; Play</button>
            <button className='button'>More Info</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
      <div className='fade_bottom' ></div>
    </div>
  )
}

export default Banner
