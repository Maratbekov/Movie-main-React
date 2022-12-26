import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {ApiKey} from "../../lib/apiKey";
import Slider from "react-slick";
import {findAllByDisplayValue} from "@testing-library/react";
import VideoYoutube from "./VideoYoutube";
const Videos = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const {movieId} = useParams()

    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${ApiKey}&language=en-US`)
            .then(({data}) => setVideos(data.results))
    },[])
    return (
        <div className="pb-6">


            <Slider {...settings}>
                {
                    videos.map(el => (
    //                     <div>
    //                         <iframe width="300" height="215" src={`https://www.youtube.com/embed/${el.key}`}
    // title="YouTube video player" frameBorder="0"
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    // allowFullScreen/>
    //                     </div>
                        <VideoYoutube key={el.key} videoKey={el.key}/>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Videos;