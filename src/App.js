// import './App.css';
import {Route,Switch} from "react-router-dom"
import Product from './components/Product Page/Product'

const App =()=>{
  return(
    <Switch>
    <Route path="/" exact component={Product} />   
    </Switch>
  )
}

export default App;