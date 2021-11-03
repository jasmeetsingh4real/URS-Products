import styles from "./Navbar.module.css";
import { FaCartPlus } from "react-icons/fa";
import { useHistory } from "react-router";

const Navbar = (props) => {
  const history = useHistory();
  const NavbarClasses = ` ${props.className} ${styles.navbar}`;
  return (
    <div className={NavbarClasses}>
      <div className={styles.brand}>
        <h1>Triple GB</h1>
      </div>
      <div>
        <button
          className={styles.orderBtn}
          onClick={() => history.push("/purchase")}
        >
          Place Order <FaCartPlus />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
