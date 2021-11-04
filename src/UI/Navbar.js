import styles from "./Navbar.module.css";
import { FaCartPlus } from "react-icons/fa";
import { useHistory } from "react-router";
import { useState } from "react";
const Navbar = (props) => {
  const history = useHistory();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const NavbarClasses = ` ${props.className} ${styles.navbar}`;
  const handlePlaceOrder = () => {
    if (localStorage.getItem("isSubmitted")) {
      setOrderPlaced(true);
    } else {
      setOrderPlaced(false);
      history.push("/purchase");
    }
  };
  const orderBtnClasses = orderPlaced
    ? `${styles.Disabled}  `
    : `${styles.orderButton}`;

  const resetOrder = () => {
    setOrderPlaced(false);
    localStorage.removeItem("isSubmitted");
  };

  const prompt = (
    <div className={styles.promptMessage}>
      <p>You've already placed an order! </p>
      <p onClick={resetOrder} className={styles.link}>
        send another response?
      </p>
    </div>
  );
  return (
    <div className={NavbarClasses}>
      <div className={styles.brand}>
        <h1>Triple GB</h1>
      </div>
      <div>
        <button
          className={orderBtnClasses}
          onClick={handlePlaceOrder}
          disabled={orderPlaced ? true : false}
        >
          Place order <FaCartPlus />
        </button>
        {orderPlaced && prompt}
      </div>
    </div>
  );
};
export default Navbar;
