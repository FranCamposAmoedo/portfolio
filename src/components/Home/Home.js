import "./Home.css";

const Home = () => {
    return (
        <section id="home">
            <div className="title-container">
                <h1>
                    Hola!, soy <span>Francisco Campos Amoedo</span>
                </h1>
                <button>
                    <a href="#contact">
                        <span>Trabajemos juntos</span>
                        <img className="arrow" src="../images/icons/Flecha.png" alt="" />
                    </a>
                </button>
            </div>
            <img className="profile" src="../images/pictures/Profile2.png" alt="" />
        </section>
    );
};

export default Home;
