import "./FeedbackCard.css";

const FeedbackCard = (props) => {
  const DefaultPic = `${
    props.pic
      ? props.pic
      : "https://www.createmepink.com/wp-content/uploads/be/thumb-best-hd-business-avatar-icons-male-vector-drawing.jpg"
  }`;

  return (
    <div className="fdbox">
      <div className="fdboxtop">
        <div className="fdboxtopimg">
          <img src={DefaultPic} alt="user" />
        </div>
        <div className="fdboxtoptext">{props.name}</div>
        {/* <div className="fdboxtopemp"></div> */}
      </div>
      <div className="fdboxdowntext">{props.feedback}</div>
    </div>
  );
};
export default FeedbackCard;
