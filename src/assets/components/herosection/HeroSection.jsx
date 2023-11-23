import ButtonItem from "../button/ButtonItem";
import "./HeroSection.css"

const HeroSection = () => {
    return (  
        <section className="hero">
            <h1>Hi, I am John Smith.</h1>
            <h3>A Front End Developer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nihil ipsam et? Est fugit tempora vero provident? Eum, ipsam adipisci harum dolor repellendus beatae neque odit, asperiores repudiandae id sit.</p>
            <ButtonItem textinhalt={"resume"}/>
        </section>
    );
}

export default HeroSection;