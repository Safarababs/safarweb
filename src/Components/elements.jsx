import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./navbar";
import AboutSection from "./aboutSection";
import Academics from "./education";
import LandingPage from "./landingPage";
import MyPortfolio from "./portfolio";
import ContactMe from "./contact";
import Footer from "./footer";


function Elements() {
    return (
    <div>
        <Navbar />
        <LandingPage />
        <AboutSection />        
        <Academics />
        <MyPortfolio />
        <ContactMe />
        <Footer />
    </div>
  
    )
}

export default Elements;