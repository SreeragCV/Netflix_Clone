import { useContext } from "react";
import { ResultContext } from "../../Store/CreateContext";
import { imageUrl } from "../../Constants/Constants";
import './Search.css'

function SearchResult() {
  const { movie } = useContext(ResultContext);
  console.log(movie)
  
  return (
  <div className="ParentDiv">
    <div className="posters">
      {
        movie?.map((movie)=>{
          return(
            
              <img className="searchImg"  src={imageUrl+movie.poster_path} alt="" />
            )
        })
      }
      </div>
  </div>
  );
}

export default SearchResult;
