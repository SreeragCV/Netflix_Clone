import { useContext } from "react";
import { ResultContext } from "../../Store/CreateContext";
import { imageUrl } from "../../Constants/Constants";

function SearchResult() {
  const { movie } = useContext(ResultContext);
  console.log(movie)
  
  return (
  <div className="ParentDiv">
      {
        movie?.map((movie)=>{
          return(
            <div>
              <img src={imageUrl+movie.poster_path} alt="" />
            </div>
            )
        })
      }
  </div>
  );
}

export default SearchResult;
