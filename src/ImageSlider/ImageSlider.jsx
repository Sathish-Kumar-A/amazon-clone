import React,{useEffect,useState,useRef} from 'react';
import { sliderImages } from '../config/sliderConfig';
import "./slider.css";
import lArrow from "../Assets/Slider/lArrow.svg";
import rArrow from "../Assets/Slider/rArrow.svg";

export const ImageSlider = () => {
    const [image, setImage] = useState(sliderImages[0]);
    let slider = useRef();
    let index = useRef(0);

    useEffect(() => {
        slider.current = setInterval(() => {
            if (index.current < sliderImages.length) {
                setImage(sliderImages[index.current]);
                index.current++;
            }
            else {
                setImage(sliderImages[0]);
                index.current = 0;
            }
        }, 5000);
        return () => clearInterval(slider.current);
    }, [])
    
    const leftSlide = () => {
        if (index.current > 0) {
            setImage(sliderImages[index.current - 1]);
            index.current--;
        }
        else {
            setImage(sliderImages[sliderImages.length - 1]);
            index.current = sliderImages.length - 1;
        }
    }

    const rightSlide = () => {
        if (index.current < sliderImages.length - 1) {
            setImage(sliderImages[index.current + 1]);
            index.current++;
        }
        else {
            setImage(sliderImages[0]);
            index.current = 0;
        }
    }
  return (
      <div className="slider_container">
                <img
                src={image}
                className="banner_img"
                    />
          
          <div className="slider_control">
                <img
                      src={lArrow}
                  className="slider_controller"
                  onClick={()=>leftSlide()}
                  />
                  <img
                      src={rArrow}
                  className="slider_controller"
                  onClick={()=>rightSlide()}
                  />
            </div>
      </div>
  )
}
