import { useState } from "react";
import Button from "../Components/button";
import { SliderData } from "./data";

export default function StanzaSlider(){
    const [index , setIndex] = useState(0);
    const replaySlider = index < SliderData.length - 1;
    console.log(replaySlider);

    let sliderImagesData = SliderData[index];
    console.log(sliderImagesData);

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else { 
            setIndex(SliderData.length - 1);
        }
    };

    const handleNext = () => {
        if(replaySlider){ 
            setIndex(index + 1)
        }else{
            setIndex(0);
        }
    }

    return ( 
        <>
            <div className="main-Container-StanzaSlider">
                <div>
                    {/* <p>{sliderImagesData.id}</p> */} 
                    <img className="sliderImg" src={sliderImagesData.img} />
                </div>

                <div className="sliderBtnDiv">
                    <Button handleClick={handlePrev} className="prevBtn">{'<'}</Button>
                    <Button handleClick={handleNext} className="nextBtn">{'>'}</Button>
                </div>
            </div>
        </>
    )
}


 

{/* <div className="ImgDiv">
<Image className="sliderImg" src={sliderImg.img}/> 
</div> */}

{/* <div className="sliderBtnDiv">
<Button handleClick={handlePrev} className="prevBtn">{'<'}</Button>
<Button handleClick={handleNext} className="nextBtn">{'>'}</Button>
</div> */}