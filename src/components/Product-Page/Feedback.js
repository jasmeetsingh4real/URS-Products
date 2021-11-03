import React from "react";
import "./fedbak.css";
import FeedbackCard from "../../UI/FeedbackCard";
import MsDhawadpic from "../../Images/ClientsImages/msDhawad.jpg";
import pojaPathak from "../../Images/ClientsImages/pojaPathak.jpg";
import varsha from "../../Images/ClientsImages/Varsha.jpg";
import sarita from "../../Images/ClientsImages/saritaChache.jpg";
const FeedbackData = [
  {
    name: "Ms. Pooja Pathak",
    feedback:
      "Amazing experience, it has become very easy to segregate wet and dry waste now.",
    pic: pojaPathak,
  },
  {
    name: "Ms. Varsha Varanshiwar",
    feedback: "Very good way to dispose kitchen waste.",
    pic: varsha,
  },
  {
    name: "Ms. Sarita Chhatre",
    feedback:
      "The product is very good for converting wet waste into a very fertile compose soil and tea.",
    pic: sarita,
  },
  {
    name: "Mr.Vijay K",
    feedback: "The product is easy to maintain.",
    pic: "",
  },
  {
    name: "Ms. Dhawad",
    feedback: "Good experience.",
    pic: MsDhawadpic,
  },
  {
    name: "Ms. Kaalmegh",
    feedback: "Very good experience.",
    pic: "",
  },
];

const feedBackCards = FeedbackData.map((card, index) => {
  return (
    <div key={index}>
      <FeedbackCard name={card.name} feedback={card.feedback} pic={card.pic} />
    </div>
  );
});

export default function BenifitAndUses() {
  return (
    <div className="fdback">
      <div className="fdtop">
        <div className="fdtest">TESTIMONIALS</div>
        <div className="fdhead">valuable feedback by our clients</div>
      </div>
      <div className="container">{feedBackCards}</div>
    </div>
  );
}
