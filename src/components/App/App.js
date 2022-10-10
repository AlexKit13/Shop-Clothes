import React from "react";
import {Navbar} from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";
import {ManClothes} from "../ManClothes/ManClothes";



export const App = () => {
    return (
            <>
                <Navbar/>
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/men-clothes" element={<ManClothes/>}/>
                </Routes>

            </>
    );
};
