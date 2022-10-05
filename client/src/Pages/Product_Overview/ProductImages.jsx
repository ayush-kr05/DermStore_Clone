import React from "react";
// import { ProductOverview } from "./ProductOverview.jsx";
import "./ProductOverview.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export const ProductImages=({img1,img2,img3})=>{
    return (
        <div className="pdImages">
            <div className="pdAllImages">
                <div className="sinleSmallImage"><img src={img1} alt="" /></div>
                <div className="sinleSmallImage"><img src={img2} alt="" /></div>
                <div className="sinleSmallImage"><img src={img3} alt="" /></div>
            </div>
            <div className="pdMainImage">
                <div className="leftArrow"><KeyboardArrowLeftIcon/></div>
                <div className="divMainImg"><img src={img1} alt="" /></div>
                <div className="rightArrow"><KeyboardArrowRightIcon/></div>
            </div>
        </div>
    )
}