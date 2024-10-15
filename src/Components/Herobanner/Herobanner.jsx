import React from 'react'
import Navbar from '../Navbar/Navbar'
import m from '..//..//assests/Netflix-Logo.wine.svg'
import n from '..//..//assests/profile.png'
import { useEffect, useState } from "react";
import './Herobanner.css';
import Background from '../Background/Background';
import Buttonnew from '../Buttonnew/Buttonnew';
import { FaPlay } from "react-icons/fa";
import { getPageData } from "..//..//API/Movies";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import navi from "../../assests/children.png"


const Herobanner = () => {
   const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {

      
      try {
        const response = await getPageData();
        const randomIndex = Math.floor(
          Math.random() * response?.netflixOriginals?.results.length
        );
        setMovie(response?.netflixOriginals?.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();

    const intervalId = setInterval(fetchMovie, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };

  return (
    <>
<main className="hero-banner">
<Navbar netlogo1={m} smile={n} childlogo={navi}/>
      {movie && (
        <>
          <div className="hero-img">
            <img
              src={`${baseUrl + movie?.backdrop_path}`}
              alt="hero banner img"
            />
          </div>
          <div className="hero-content">
            <Background value={movie?.name || movie?.title} className="movie-name"/>
            <div className="hero-buttons">
              <Buttonnew
                size="small-play"
                icon={<FaPlay />}
                color="white"
                bg="bg-white"
                value1="Play"
                home1="home1"
              />
              <Buttonnew
                size="small-play"
                icon={<AiTwotoneExclamationCircle className="moreicon" />}
                className="watchlater"
                color="white"
                bg="bg-trans"
                value1="More Info"
                home2="home2"
              />


            </div>
            <Background
              className="hero-text"
              value={handleDescription(movie?.overview, 200)}
            />

            <div className="speakermain">
              <div className="speaker">
                <p>U/A 16+</p>
              </div>

              <div className="speakerimg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>
              </div>

            </div>
          </div>
        </>
      )}
    </main>


    </>
  )
}

export default Herobanner
