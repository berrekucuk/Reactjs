import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";
import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";


function App(){
  return <>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    
  </>
}

export default App;
