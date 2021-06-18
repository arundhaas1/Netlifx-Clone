import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from '../Axios'
import requests from "../Request";
// import request from "request";

function Banner() {

    const[movie,setMovie]=useState([])

        useEffect(()=>{
            async function fetchdata(){
                const request=await axios.get(requests.fetchNetflixOriginals);
                setMovie(
                    request.data.results[
                        Math.floor(Math.random()*request.data.results.length-1)
                    ]
                )
                return request;
            }
            fetchdata()
        },[]);

        console.log(movie)

    const truncate=(string,n)=>{
        return string?.length >n ? string.substr(0,n-1)+' ...' :string
    }
  return (
    <header className="banner" style={{
        backgroundImage : `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`}}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview,150)}
        </h1>
      </div>
      <div className="fade__bottom" />
    </header>
  );
}

export default Banner;
