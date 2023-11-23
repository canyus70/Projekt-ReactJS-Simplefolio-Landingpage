// muss ich import machen?

import ProjektItem from "./ProjektItem";
import "./Projekt.css"
const ProjektList = () => {
    return (  
        
        <section>
            <h3>Projects</h3>
        <article className="listofprojects">
            <div><ProjektItem title={"Project 1"}/></div>
            <div><ProjektItem title={"Project 2"}/></div>
            <div><ProjektItem title={"Project 3"}/></div>
        </article>
        </section>
    );
}

export default ProjektList;