import compostTeaImg from "../../Images/Outputs/CompostTea.PNG";
import compostSoilImg from "../../Images/Outputs/CompostSoil.PNG";
import styles from "./Outputs.module.css";
const Outputs = () => {
  return (
    <>
      <h2 className={styles.Outputs_heading}>Outputs Of Triple GB:</h2>
      <div className={styles.Output}>
        <div className={styles.outputs_col1}>
          <h1>1.Compost Soil</h1>
          <div className={styles.output_img}>
            <img src={compostSoilImg} alt="" />
          </div>
        </div>
        <div className={styles.outputs_col2}>
          <ul className={styles.Output_list}>
            <li>
              Rich organic manure that can be used as putting soil, instead of
              conventional soil as a planting media.
            </li>
            <li> This way vegetables can be cultivated organically.</li>
            <li>
              A spoon of manure should be used after three weeks on home plants
              or dilute it with 10 times the volume of coco pit/ soil.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles[("Output", "revFlex")]}>
        <div className={styles.outputs_col1}>
          <h1>2.Compost Tea</h1>
          <div className={styles.output_img}>
            <img src={compostTeaImg} alt="" />
          </div>
        </div>
        <div className={styles.outputs_col2}>
          <ul className={styles.Output_list}>
            <li>
              The taps of all triple GB bins should be opened once a week for
              15mins
            </li>
            <li>
              The leftover should be diluted and dissolved to be disposed of. It
              would be beneficial for drain cleaning
            </li>
            <li>
              It should be diluted with ten times the volume of water for it to
              be used as an organic booster for plants.
            </li>
            <li>
              If the liquid does not come out after a week of use, check for
              blockage. A stick should be inserted through the open tap to
              remove blockages or tilt the bin.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Outputs;
