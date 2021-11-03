import "./Benifits.css";
import prodImg from "./../../Images/GoGreen.PNG";
import img1 from "../../Images/BenifitsImages/b1.jpg";
import img2 from "../../Images/BenifitsImages/b2.jpg";
import img3 from "../../Images/BenifitsImages/b3.jpg";
import img4 from "../../Images/BenifitsImages/b4.jpg";
import img5 from "../../Images/BenifitsImages/b5.jpg";
import img6 from "../../Images/BenifitsImages/b6.jpg";
import BenifitCard from "../../UI/BenifitCard";
const BenifitsData = [
  {
    id: 1,
    title: "Water will flow down to the bin",
    img: img1,
    description:
      "As we are going to add waste material one by one water is going to flow down to the bin, that water will be like nutrition for plants which is called as compost tea.  ",
  },
  {
    id: 2,
    title: "Easy to carry ",
    img: img2,
    description:
      "As we are providing bin, whatever waste material or compost product will be created it would be in Bin, so it's going to be helpful for us to carry anywhere we want.   ",
  },
  {
    id: 3,
    title: "Easy to clean",
    img: img3,
    description:
      "Bins are manufactured in such a way it would be easy to clean. Triple GB bins should be cleaned every day after putting waste.    ",
  },
  {
    id: 4,
    title: "Easy to Compost",
    img: img4,
    description:
      "There are steps to follow mentioned in our website the whole process is very easy. whole process is natural so it's going to be very helpful for us to compost and there is no side effects of it.    ",
  },
  {
    id: 5,
    title: "No smell",
    img: img5,
    description:
      "We are going to add leftover vegetables and fruits so everything added is natural so there is no smell. you must keep the bin and area clean and make sure no flies attracted.",
  },
  {
    id: 6,
    title: "Organic",
    img: img6,
    description: `Organic is generally defined as the item must be without a man - made chemicals. this may accurately define as "Agriculturally organic” We are going to add Vegetables and fruits so it's overall organic material we are adding.`,
  },
];
const Benifits = () => {
  const BenifitsCards = BenifitsData.map((i, index) => {
    return (
      <div key={i.id} className="CardContainer">
        <BenifitCard
          title={`${index + 1}. ${i.title}`}
          description={i.description}
          img={i.img}
        />
      </div>
    );
  });
  return (
    <>
      <div className="benifitsContainer">
        <div className="benifitsContainer_row1">
          <h1>Benifits of Triple GB</h1>
          <div className="img_container">
            <img src={prodImg} alt="" />
          </div>
        </div>
        <div className="benifits_cards">{BenifitsCards}</div>
      </div>
    </>
  );
};
export default Benifits;
