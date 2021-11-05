// import './App.css';
import { Route, Switch } from "react-router-dom";
import ProductPage from "./components/Product-Page/ProductPage";
import Purchase from "./components/PurchaseForm/Purchase";
import Footer from "./components/Product-Page/Footer";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/purchase" component={Purchase} />
        <Route exact path="/" component={ProductPage} />
        <Route default component={ProductPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
