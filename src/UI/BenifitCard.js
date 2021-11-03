import "./BenifitCard.css";
const BenifitCard = (props) => {
  return (
    <div className="beniftsCard" key={props.key}>
      <div className="cardImageContainer">
        <img src={props.img} alt="" />
      </div>
      <div className="cardInfo">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default BenifitCard;
