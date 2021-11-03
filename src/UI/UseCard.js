import "./UseCard.css";

const UseCard = (props) => {
  return (
    <div className="Use" key={props.key}>
      <div className="Index">{props.index}.</div>
      <p>{props.use}</p>
    </div>
  );
};
export default UseCard;
