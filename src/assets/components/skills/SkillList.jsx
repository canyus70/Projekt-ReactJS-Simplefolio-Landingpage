import SkillItem from "./SkillItem";
import "./Skill.css"
const SkillList = () => {
    return (  

        <section className="wrapper">
        <h4>SKILLS</h4>

        <div className="skills">
        <div><SkillItem title={"HTML"}/></div>
        <div><SkillItem title={"CSS"}/></div>
        <div><SkillItem title={"JavaSvript"}/></div>
        <div><SkillItem title={"React"}/></div>
        <div><SkillItem title={"SASS"}/></div>
        <div><SkillItem title={"Tailwind CSS"}/></div>
        <div><SkillItem title={"Git"}/></div>
        <div><SkillItem title={"UI/UX"}/></div>
        </div>
        </section>
    );
}

export default SkillList;