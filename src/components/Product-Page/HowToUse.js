import "./HowToUse.css";
import TGBBook from "../../Images/HowToUse/TGBBook.PNG";
import UseCard from "../../UI/UseCard";
const HowToUse = () => {
  const stepsData = [
    {
      step: 1,
      description: "Firstly, put a newspaper in the Triple GB bin.",
    },
    {
      step: 2,
      description: "Put a layer of microbes (formula 2) above the newspaper.",
    },
    {
      step: 3,
      description:
        "Then put the wet waste and after, put a layer of Triple GB bin.",
    },
    {
      step: 4,
      description:
        "Then put (formula -2) again and cover it with the newspaper.",
    },
    {
      step: 5,
      description:
        "The next day put only the wet waste layer; repeat the process till the bin fills up.",
    },
    {
      step: 6,
      description:
        "The filling of the bin signifies that the very first Triple GB bin is ready with the compost soil and compost tea.",
    },
    {
      step: 7,
      description:
        "Compost tea can be used as a supplement for the plants providing nutrition in liquid form.",
    },
    {
      step: 8,
      description:
        "After 7-10 days, water can be obtained from the Triple GB bin. This water is called compost tea.",
    },
    {
      step: 9,
      description: "All Triple GB bins can be used alternatively.",
    },
    {
      step: 10,
      description:
        "Clean your Triple GB every day after putting waste to make sure no flies are attracted.",
    },
  ];

  const steps = (
    <ul>
      {stepsData.map((step) => {
        return (
          <span className="HowToUse_li" key={step.step}>
            <UseCard index={step.step} use={step.description} />
          </span>
        );
      })}
    </ul>
  );
  return (
    <>
      <h2 className="HowToUse_heading">Instruction Manual:</h2>
      <div className="HowToUse_container">
        <div className="HowToUse_col1">
          <img src={TGBBook} alt="" />
        </div>
        <div className="HowToUse_col2">{steps}</div>
      </div>
    </>
  );
};
export default HowToUse;
