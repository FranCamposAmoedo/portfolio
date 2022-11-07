import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#home">
                                    Inicio
                                </a>
                                <a className="nav-link" href="#about">
                                    Acerca
                                </a>
                                <a className="nav-link" href="#skills">
                                    Skills
                                </a>
                                <a className="nav-link" href="#projects">
                                    Proyectos
                                </a>
                                <a className="nav-link" href="#contact">
                                    Contacto
                                </a>
                                <a className="nav-link" href="#descargar">
                                    CV
                                </a>
                            </ul>
                            <div className="social-container">
                                <a className="social" href="https://www.linkedin.com/in/franciscocamposamoedo/" target="_blank" rel="noreferrer">
                                    <img src="../images/icons/LinkedIn.png" alt="" />
                                </a>
                                <a className="social" href="https://github.com/FranCamposAmoedo" target="_blank" rel="noreferrer">
                                    <img src="../images/icons/GitHub1.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
