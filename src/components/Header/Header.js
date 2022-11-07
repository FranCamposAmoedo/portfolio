import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <Home />
        </header>
    );
};

export default Header;
