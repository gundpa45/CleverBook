import Nav from "./component/Nav";
import Body from "./component/heroSection";
import { Route, Routes } from "react-router-dom";
import Product from "./component/Product";
import About from "./component/About";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Footer from "./component/Footer";
import Industry from "./component/industry";

function App(){
  return(
    <div  className="w-[full]  ">
      




      <Nav/>
   

      <Routes>
        <Route path="/" element={<Body/>}/>
        {/* <Route path="/product" element={<Product/>}/>  */}
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/industry" element={<Industry />} />
      </Routes>


      <Footer />


      

    </div>
  )
}


export default App;