import HeroSection from "../herosection/HeroSection"
import ProjektList from "../projekt/ProjektList";
import SkillsList from "../skills/SkillList"
import "./Main.css"
import Contact from "../contact/Contact"
import Footer from "../footer/Footer";


const  Main = () => {


    return ( 


        <main>
            <HeroSection/>
            <ProjektList/>
            <SkillsList/>
            <Contact/>
            <Footer/>
        </main>
    
     );
}

export default Main;