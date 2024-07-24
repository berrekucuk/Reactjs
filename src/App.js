import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";
import {Link,Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import CounterSample from "./stateSamples/CounterSample";
import ArraySample from "./stateSamples/ArraySample";
import BooleanSample from "./stateSamples/BooleanSample";
import ImageStateSample from "./stateSamples/ImageStateSample";
import StyleStateSample from "./stateSamples/StyleStateSample";
import StyleStateSample2 from "./stateSamples/StyleStateSample2";
import Suppliers from "./pages/Suppliers";
import Users from "./pages/Users";
import Todos from "./pages/Todos";



function App(){

  // return <>
  //   {/* <StateIntro /> */}
  //   {/* <CounterSample/> */}
  //   {/* <ArraySample/> */}
  //   {/* <ArraySample2/> */}
  //   {/* <BooleanSample/> */}
  //   {/* <ImageStateSample/> */}
  //   {/* <StyleStateSample/> */}
  //   {/* <StyleStateSample2/> */}


  // </>
  return <>
  <ul style={{display:'flex', justifyContent:'space-evenly'}}>
    <Link to ='/'>Home</Link>
    <Link to ='/about'>About</Link>
    <Link to ='/contact'>Contact</Link>
    <Link to ='/products'>Products</Link>
    <Link to ='/profile'>Profile</Link>
    <Link to='/suppliers'>Suppliers</Link>
    <Link to='/users'>Users</Link>
    <Link to='/todos'>Todos</Link>


  </ul>


    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/suppliers" element={<Suppliers/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/todos" element={<Todos/>}/>


    </Routes>
    
  </>
}

export default App;
