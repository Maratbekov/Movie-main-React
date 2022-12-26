import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../lib/apiKey";
import MovieContent from "./MovieContent";
import {data} from "autoprefixer";
import Loader from "../Loader/Loader";

const Latest = () => {
    const [latest,setLatest] = useState([])


    useEffect(() =>{
        axios(`https://api.themoviedb.org/3/movie/latest?api_key=${ApiKey}&language=en-US`)
            .then(({data})=>{
                setTimeout(()=>{
                    setLatest(data)
                },1000)
                // console.log(data)
            }

            )
    },[])
    console.log(latest)
    return <>
        {
             Object.keys(latest).length ===0 ? <Loader/> : <MovieContent data={latest}/>
        }

    </>
};

export default Latest;