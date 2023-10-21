import React, { useContext, useState } from "react";
import "./NavBar.css";
import axios from "axios";
import { options } from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../../Store/CreateContext";

function NavBar() {
  const navigate = useNavigate();
  const [movieText, setMovieText] = useState("");
  const { setMovie } = useContext(ResultContext);

  const searchMovie = (keywords) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/collection?query=${keywords}&include_adult=false&language=en-US&page=1`,
        options
      )
      .then((res) => {
        setMovie(res.data.results);
      });
    if (keywords) {
      navigate("/results");
    }
  };

  const handleChange = (e) => {
    setMovieText(e.target.value);
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <input
        className="input"
        value={movieText}
        onChange={handleChange}
        type="text"
        placeholder="Search..."
      />
      <button onClick={() => searchMovie(movieText)} className="btn">
        &#x1F50E;&#xFE0E;
      </button>
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt=""
      />
    </div>
  );
}

export default NavBar;
