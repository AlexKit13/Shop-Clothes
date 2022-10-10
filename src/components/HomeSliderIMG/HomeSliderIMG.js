import React, {useEffect, useState} from 'react';
import {Slider, IMG, Slide} from './HomeSliderIMG.elements';
import {SliderDataIMG} from './SliderDataIMG';
import {ArrowSlider} from "./ArrawSlider/ArrowSlider";

export const HomeSliderIMG = ({slides}) => {

    const [people] = useState(SliderDataIMG);
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        const lastIndex = length - 1;
        if (current < 0) {
            setCurrent(lastIndex)
        }
        if (current > lastIndex) {
            setCurrent(0);
        }
    }, [current, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setCurrent(prevState => prevState + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [current])

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }
    ;

    return (
        <>
            <Slider>

                {SliderDataIMG.map((item, index) => {
                    return (
                        <Slide key={index}>
                            {index === current && (<IMG src={item.img} alt="advertise image"/>)}
                        </Slide>
                    )
                })};

                <ArrowSlider moveSlide={nextSlide}/>
                <ArrowSlider moveSlide={prevSlide}/>
            </Slider>
        </>
    );
};