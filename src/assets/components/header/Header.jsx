import Dark from "../svg/Dark";
import "./Header.css"


const Header = ({setjossef}) => {

const daynight = () => {
    setjossef((state) => !state)
}

    return ( 
        <div className="wrappernav">
            <div className="ini">JS</div>
        <nav className="navbar">
            <a href="#">projects</a>
            <a href="#">skills</a>
            <a href="#">contact</a>
            <div onClick={daynight}>
                <Dark/>
            </div>
        </nav>
        </div>
);
}

export default Header;