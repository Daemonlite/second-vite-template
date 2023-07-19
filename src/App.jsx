import { BrowserRouter,Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Beach from "./badges/Beach";
import Bars from "./badges/Bars";


function App() {
  return (
    <BrowserRouter className="container ">
      <Navbar />
      <Nav />
<Routes>
<Route path='/' element={<LandingPage/>}/>
<Route path='/beach'  element={<Beach/>}/>
<Route path="/bars" element={<Bars/>} />
</Routes>


    </BrowserRouter>
  );
}

export default App;
