import React, {useState} from 'react';
import {LeftSlide, RightSlide} from "../HomeSliderIMG.elements";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

export const ArrowSlider = ({moveSlide}) => {

    return (
        <>
            <LeftSlide onClick={moveSlide}>
                <AiOutlineArrowLeft/>
            </LeftSlide>

            <RightSlide onClick={moveSlide}>
                <AiOutlineArrowRight />
            </RightSlide>
        </>
    );
};
