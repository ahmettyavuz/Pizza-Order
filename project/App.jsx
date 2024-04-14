import { Route } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import Success from "./components/Successs";

function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/OrderPizza">
        <OrderPizza />
      </Route>
      <Route exact path="/Success">
        <Success />
      </Route>
    </>
  );
}

export default App;
