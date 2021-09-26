import React,{useState} from 'react'
import { FaStar ,FaArrowCircleRight,FaArrowCircleLeft} from 'react-icons/fa';
import '../../Styles/TripleGBStyle.css'
import {SliderData} from '../../Images/sliderData'
import { useHistory } from 'react-router';



export default function TripleGb() {
    const history = new useHistory()
    const [current,setCurrent] = useState(0)
    const length = SliderData.length

    const nextSlide=()=>{
        setCurrent(current === length-1 ? 0 : current+1)
    }
console.log(current);
const prevSlide = ()=>{
    setCurrent(current===0 ? length-1 : current-1)
}


// const crasoulId = setInterval(()=>{
// setCurrent((prvs)=>{
//     return (prvs === length-1 ? 0 : prvs+1)
// })
// },4000) 


    return (
        <div className="tgbContainer">
            <h1 className="tgbHeading darkGrey">PRODUCTS</h1>
            <div className="tbgSubContainer">


            <div className="tgbHeadingPhone">
                    <h1 className="tgbMainHeading">Triple GB</h1>
                    <h4 className="tbgSubHeading midGrey">Wet Waste Garbage Bin</h4>

                    <h5 className="ratingsLabel midGrey">Ratings:</h5>
                    <div className="tgbStars">
                        <FaStar className="star"/>
                        <FaStar  className="star"/>
                        <FaStar  className="star"/>
                        <FaStar  className="star"/>
                        <FaStar  className="star"/>
                    </div>
                </div>


                <div className="imageContainer" >
               
                    <FaArrowCircleLeft className="leftArrow" onClick={prevSlide}/>
                    <FaArrowCircleRight className="rightArrow" onClick={nextSlide}/>
                    {SliderData.map((slide,index)=>{
                        return (
                        <div className={index===current?'slide active':'slide'} key={index}>
                        {index === current &&( <img src={slide.image} alt="prod_image"/>)}                           
                        </div>
                        )
                    })}
                </div>
                
                
                <div className="productInfo">
                <div className="tgbHeadingDesktop">
                    <h1 className="tgbMainHeading">Triple GB</h1>
                    <h4 className="tbgSubHeading midGrey">Wet Waste Garbage Bin</h4>

                    <h5 className="ratingsLabel midGrey">Ratings:</h5>
                    <div className="tgbStars">
                        <FaStar className="star"/>
                        <FaStar  className="star"/>
                        <FaStar  className="star"/>
                        <FaStar  className="star"/>
                        <FaStar  className="star"/>
                    </div>
                </div>

                <div className="discription">
                    <b className="darkGrey" >Description:</b>
                    <p className="darkGrey">
                    This process will show the actual benefits which will arise after doing proper Waste management for WET and DRY waste. For example, from Wet waste, we can produce Compost soil and TEA. From DRY waste, we can reuse and recycle the products. With the help of the respective Area Corporator, we will arrange a weekly market to showcase/Sell/Donate the by-products that are compost soil, Tea, and Reuse items that would get generated from this Wet and Dry Waste Management program.
                    </p>
                </div>
                    <button className="tgbBtn buyNow" onClick={()=>{history.push("/purchase")}}>Buy Now!</button>
                    <button className="tgbBtn review"  onClick={()=>{history.push("/purchase")}}>Review</button>
                </div>
            </div>
        </div>

        
    )
}
