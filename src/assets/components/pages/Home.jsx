import { useState } from "react";
import Header from "../header/Header";
import Main from "../main/Main"
import "./Home.css"

const Home = () => {

    const [yusufdarkmode, setYusufDarkmode] = useState(false);

console.log(yusufdarkmode)


    return ( 
        <div className="home">
        <div className={yusufdarkmode ? "dark" : ""}>
        <Header setjossef={setYusufDarkmode}/> 
        <Main />
        </div>
        </div>
     );
}
 
export default Home;