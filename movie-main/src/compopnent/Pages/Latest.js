import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../lib/apiKey";
import MovieContent from "./MovieContent";
import {data} from "autoprefixer";

const Latest = () => {
    const [latest,setLatest] = useState([])


    // useEffect(() =>{
    //     axios(`https://api.themoviedb.org/3/movie/latest?api_key=${ApiKey}&language=en-US`)
    //         .then(({data})=>{
    //             setLatest(data)
    //             console.log(data)
    //         }

    //         )
    // },[])
    console.log(latest)
    return <MovieContent data={latest}/>
};

export default Latest;