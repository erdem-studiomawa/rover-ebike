import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home/home";
import ProductPage from "./pages/product/product";
import Layout from "components/Layout";

function App() {
  document.title = "Rover E-Bike";

  return (
    <BrowserRouter basename="/app">
      <div className="App">
        <div className="loader"></div>
        <div>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
            </Switch>
          </Layout>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
