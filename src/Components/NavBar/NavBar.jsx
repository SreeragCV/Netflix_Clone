import React, {useContext} from 'react'
import './NavBar.css'
import axios from 'axios';
import { options } from '../../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import { ResultContext } from '../../Store/CreateContext';


function NavBar() {

const navigate = useNavigate();

const {movie, setMovie} = useContext(ResultContext)

  const searchMovie = (keywords) => {
    axios.get(`https://api.themoviedb.org/3/search/keyword?query=${keywords}`, options).then(res => {
      console.log(res.data.results)
    })
    navigate('/results')
  }

  const foundMovie = (e) => {
    setMovie(e.target.value)
  }



  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <input className='input' value={movie} onChange={foundMovie} type="text" placeholder='Search...' />
      <button onClick={() => searchMovie(movie)} className='btn'>&#x1F50E;&#xFE0E;</button>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}


export default NavBar
