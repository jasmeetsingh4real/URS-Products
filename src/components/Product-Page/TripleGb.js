import styles from "./TripleGB.module.css";
import { FaCartPlus } from "react-icons/fa";
import binImg from "../../Images/binImg.jpg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const TripleGB = () => {
  const [animateImg, setAnimateImg] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const zoomIn = () => {
    setAnimateImg(true);
  };
  const zoomOut = () => {
    setAnimateImg(false);
  };
  const prodImgClasses = `${styles.imageContainer} ${
    animateImg ? `${styles.resize} ${styles.imgHover}` : ""
  }`;

  const showMoreHandler = () => {
    setShowMore(!showMore);
  };
  const history = useHistory();
  const MoreContent = (
    <>
      <p>
        Triple GB bins are simple and easily handled. We would be reading more
        about it, Initial step is to chop all the leftover vegetables and fruits
        and put them in Triple GB bin directly or dry them beforehand in
        sunlight. Avoid depositing coconut shells, plastic, napkins, soil, and
        spoiled milk, or any liquid food.
      </p>
      <br />
      <p>
        <h2>Pros:</h2>
        Essential benefit of Triple GB is that it helps you to make eco-friendly
        compost product by your own, we are just providing things for making
        compost. It enriches soil and helping retain moisture and suppress plant
        diseases. It also helps in reducing the need for chemical fertilizers.
        It also reduces methane emissions from landfills and lowers carbon
        footprint. Triple GB creates awareness in the society regarding the
        benefits of proper waste management, the better quality of soil will in
        turn, give better yield of crops/plants, no chemical fertilizers must be
        used or consumed to promote a healthy and organic lifestyle. Triple GB
        is smell free and affordable for everyone. This conserves our natural
        resources such as timber, water and minerals.
      </p>
    </>
  );
  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.HeaderBackGround}
        onMouseEnter={zoomIn}
        onMouseLeave={zoomOut}
      >
        <div className={styles.col1}>
          <h1>TRIPLE GB</h1>
          <h3>WET WASTE GARBAGE BIN</h3>
          <button
            className={styles.orderButton}
            onClick={() => history.push("/purchase")}
          >
            Place order <FaCartPlus />
          </button>
        </div>
        <div className={styles.col2}>
          <div className={prodImgClasses}>
            <img src={binImg} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.discription}>
        <h2>Discription:</h2>
        <p>
          Triple GB bin stands for “Go Green with Garbage Bin.” Triple GB is
          more focused on being a solution for society by reducing degradable
          waste and by making it reusable. It includes products such as,
          ‘Sanjeevani Booti' which are meant for dead plants and infertile
          lands. Triple GB is a cost-effective product formed to generate
          compost soil and tea for wet waste, so this is affordable for every
          class of society. Triple GB Bins are formed with good quality fiber
          plastic along with microbes. We have designed BIN in such a way that
          it has a good supply of oxygen for wet waste. This helps in the
          breakdown process that produces nitrogen and hence prevents bad odor.
          {showMore && MoreContent}
        </p>

        <button className={styles.moreBtn} onClick={showMoreHandler}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};
export default TripleGB;
