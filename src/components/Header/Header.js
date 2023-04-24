import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";

const Header = () => {
    return (
        <>
            {/* <img className="bg-section" src="../images/background/Recurso 4.png" alt="" /> */}
            <header className="header">
                {/* <img className="bg-section" src="../images/background/BgHome.png" alt="" /> */}
                <Navbar />
                <Home />
            </header>
        </>
    );
};

export default Header;
