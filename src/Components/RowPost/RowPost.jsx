import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios';
import { options, imageUrl } from '../../Constants/Constants';
import YouTube from 'react-youtube';



function RowPost({title, isSmall, url}) {

    const [movie, setMovie] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(url, options).then(res => {
            setMovie(res.data.results)
        }).catch( err => {
            console.log(err);
        })
    }, [])

    const handleMovie = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options).then(res => {
         if(res.data.results.length !== 0){
            setUrlId(res.data.results[0]); } else {
                console.log('addas');
            }
      })
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {movie.map((obj, i) => (
                    <div key={i}>
                    <img onClick={() => handleMovie(obj.id)} className={isSmall ? 'smallPoster' : 'poster'} alt='poster' src={obj ? `${imageUrl+obj.backdrop_path}` : "" } key={i} />
                    <h4>{obj.title}</h4>
                    </div>
                ))}
            </div>
            { urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost