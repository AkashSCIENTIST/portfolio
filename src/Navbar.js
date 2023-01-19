import "./Navbar.css";
import logo_img from "./name.png";

function Navbar(){
    return <div className="navbar">
        <div className="logo"><img src={logo_img} className="logo-img" /></div>
        <div className="links">
            <a href="" className="link">Home</a>
            <a href="" className="link">Skills</a>
            <a href="#contacts" className="link">Contacts</a>
        </div>
    </div>
}

export default Navbar;