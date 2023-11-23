import HeroSection from "../herosection/HeroSection"
import ProjektList from "../projekt/ProjektList";
import SkillsList from "../skills/SkillList"
import "./Main.css"
const  Main = () => {
    return ( 
        <main>
            <HeroSection/>
            <ProjektList/>
            <SkillsList/>

        </main>
     );
}

export default Main;