import React, { useEffect, useState } from "react";
import Benifits from "./Benifits";
import TripleGB from "./TripleGB";
import HowToUse from "./HowToUse";
import Outputs from "./Outputs";
import FeedBack from "./Feedback";
import Uses from "./Uses";
import Navbar from "../../UI/Navbar";
import "./ProductPage.css";
import { FaArrowLeft } from "react-icons/fa";
export default function Product() {
  const [nav, setNav] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 350) {
      if (!nav) {
        setNav(true);
      }
    } else {
      if (nav || window.pageYOffset < 350) {
        setNav(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <button className="backBtn">
        <FaArrowLeft />
      </button>
      <Navbar className={nav ? "" : "hideNavBar"} />
      <TripleGB />
      <HowToUse />
      {/* <hr /> */}
      <Outputs />
      <br />
      <Benifits />
      <Uses />
      <FeedBack />
    </>
  );
}
