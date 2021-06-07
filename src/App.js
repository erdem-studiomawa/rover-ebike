import "./App.css";

import Home from "./pages/home/home";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  document.title = "Rover E-Bike";

  return (
    <div className="App">
      <div className="loader"></div>
      <div>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
