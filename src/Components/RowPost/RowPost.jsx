import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios';
import { options, imageUrl } from '../../Constants/Constants';


function RowPost({title, isSmall, url}) {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(url, options).then(res => {
            setMovie(res.data.results)
            console.log(res.data.results);
        })
    }, [])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {movie.map((obj, i) => (
                    <img className={isSmall ? 'smallPoster' : 'poster'} alt='poster' src={obj ? `${imageUrl+obj.backdrop_path}` : "" } key={i} />
                ))}
                
            </div>
        </div>
    )
}

export default RowPost