import React from "react";
import Photo from '../../media/Photo.jpg';
import Photo1 from '../../media/Photo3.jpg';
import Photo2 from '../../media/Photo4.jpg';
import "./Slider.css";

const slidesInfo = [
    {
        src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
        alt: "Project 1",   
        desc: "Proyecto 1"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
        alt: "Project 2",
        desc: "Proyecto 2"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
        alt: "Project 3",
        desc: "Proyecto 3"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
        alt: "Project 4",   
        desc: "Proyecto 4"
    }
]

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src = {slide.src} alt = {slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))
export default slides;