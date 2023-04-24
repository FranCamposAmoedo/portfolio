import "./Home.css";

const Home = () => {
    return (
        <section id="home">
            {/* <img className="bg-section" src="../images/background/BgHome.png" alt="" /> */}
            <div className="container">
                <h1>
                    Hola!, soy <span>Francisco Campos Amoedo</span>
                </h1>
                <button>
                    <span>Trabajemos juntos</span>
                    <img className="arrow" src="../images/icons/Flecha.png" alt="" />
                </button>
            </div>
          {/*   <img className="profile" src="../images/pictures/Profile2.png" alt="" /> */}
        </section>
    );
};

export default Home;
