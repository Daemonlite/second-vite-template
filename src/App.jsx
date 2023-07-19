import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <BrowserRouter className="container ">
      <Navbar />

<LandingPage/>


    </BrowserRouter>
  );
}

export default App;
