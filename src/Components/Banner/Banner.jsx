import { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import { options } from '../../Constants/Constants'
import { imageUrl } from '../../Constants/Constants'

function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {
   axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=horror', options).then( (res) => {
    console.log(res.data.results[0])
    setMovie(res.data.results[18])
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
