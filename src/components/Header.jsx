import React from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { removeNowPlayingMovies, removeTrailerVedio } from "../utils/movieSlice";
import { removePlayingMMovie, removeSelectedMovie, removeTmdbMoviesMovie } from "../utils/recomendedMovieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isShowGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = async () => {
    console.log("SignOut Handler Called");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        dispatch(removeNowPlayingMovies());
        dispatch(removeTrailerVedio());
        dispatch(removeSelectedMovie());
        dispatch(removePlayingMMovie());
        dispatch(removeTmdbMoviesMovie());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = async () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-screen  bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img className="w-40 " src={LOGO} alt="logo"></img>
      { (
        <div className="flex">
          {isShowGptSearch && (
            <select
              className="py-2 px-4 mx-4 my-2 bg-white rounded-lg"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg z-10"
            onClick={handleGptSearchClick}
          >
            {isShowGptSearch ? "Homepage" : "GPT Search"}
          </button>

          <button
            onClick={handleSignOut}
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          >
            Sign Out
          </button>

        </div>
      )}
    </div>
  );
};

export default Header;


