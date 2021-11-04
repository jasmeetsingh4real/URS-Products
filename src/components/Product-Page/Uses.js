import "./Uses.css";
import UseCard from "../../UI/UseCard";
import img from "../../Images/Plant-Icon.jpg";
const Uses = () => {
  const UsesData = [
    {
      use: "Wet waste, we can produce compost soil and TEA from Dry waste, we can reuse and recycle the product.",
    },
    {
      use: "The Garbage Cafe solution is a big solution for Dry waste.",
    },
    {
      use: "This will be a common market for all the Private companies to collect their by-products from this program.",
    },
  ];

  const UsesCards = UsesData.map((card, index) => {
    return (
      <div key={index}>
        <UseCard use={card.use} index={index + 1} />
      </div>
    );
  });

  return (
    <>
      <h1 className="bhead">USES OF Triple Gb</h1>
      <div className="bUse">
        <div className="col1">{UsesCards}</div>
        <br />
        <br />
        <div className="col2">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};
export default Uses;
