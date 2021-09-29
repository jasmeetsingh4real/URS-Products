import React, { useState } from "react";
import { FaStar, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import "../../Styles/TripleGBStyle.css";
import { SliderData } from "../../Images/sliderData";
import { useHistory } from "react-router";

export default function TripleGb() {
  const history = new useHistory();
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // const crasoulId = setInterval(()=>{
  // setCurrent((prvs)=>{
  //     return (prvs === length-1 ? 0 : prvs+1)
  // })
  // },4000)

  const handleOrder = () => {
    const orderBtn = document.querySelector(".buyNow");
    const fyi = document.querySelector(".FYI");

    if (!localStorage.getItem("isSubmitted")) {
      history.push("/purchase");
    } else {
      orderBtn.classList.add("disabled");
      fyi.classList.remove("hide");
    }
  };
  const handleAnotherResponse = () => {
    const fyi = document.querySelector(".FYI");
    const orderBtn = document.querySelector(".buyNow");

    orderBtn.classList.remove("disabled");
    fyi.classList.add("hide");
    localStorage.clear();
  };
  return (
    <div className="tgbContainer">
      <h1 className="tgbHeading darkGrey">PRODUCTS</h1>
      <div className="tbgSubContainer">
        <div className="tgbHeadingPhone">
          <h1 className="tgbMainHeading">Triple GB</h1>
          <h4 className="tbgSubHeading midGrey">Wet Waste Garbage Bin</h4>

          <h5 className="ratingsLabel midGrey">Ratings:</h5>
          <div className="tgbStars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>

        <div className="imageContainer">
          <FaArrowCircleLeft className="leftArrow" onClick={prevSlide} />
          <FaArrowCircleRight className="rightArrow" onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="prod_image" />
                )}
              </div>
            );
          })}
        </div>

        <div className="productInfo">
          <div className="tgbHeadingDesktop">
            <h1 className="tgbMainHeading">Triple GB</h1>
            <h4 className="tbgSubHeading midGrey">Wet Waste Garbage Bin</h4>

            <h5 className="ratingsLabel midGrey">Ratings:</h5>
            <div className="tgbStars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
            </div>
          </div>

          <div className="discription">
            <b className="darkGrey">Description:</b>
            <p className="darkGrey">
              This process will show the actual benefits which will arise after
              doing proper Waste management for WET and DRY waste. For example,
              from Wet waste, we can produce Compost soil and TEA. From DRY
              waste, we can reuse and recycle the products. With the help of the
              respective Area Corporator, we will arrange a weekly market to
              showcase/Sell/Donate the by-products that are compost soil, Tea,
              and Reuse items that would get generated from this Wet and Dry
              Waste Management program.
            </p>
          </div>

          <div className="placeOrder">
            <button className="tgbBtn buyNow" onClick={handleOrder}>
              Place Order
            </button>
            {/* <button
            className="tgbBtn review"
            onClick={() => {
              history.push("/purchase");
            }}
          >
            Review
          </button> */}
            <div className="FYI hide">
              <br />
              You've alreay placed an order! Our team will respond shortly{" "}
              <br />
              <a href="#" onClick={handleAnotherResponse}>
                send another response?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
