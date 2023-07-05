import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section id="about">
            {/* <img className="bg-section" src="../images/background/BgAbout.png" alt="" /> */}
            <div className="container">
                <h2>Acerca de mi</h2>
                <hr className="title-line" />
                <div className="container-about">
                    <img src="../images/pictures/DeveloperPopUps.png" alt="" />
                    <p>
                        ¡Hola! Soy un programador <b>Front-End</b> especializado en <b>React JS</b>, y estoy
                        emocionado por compartir mi experiencia contigo. Mi pasión por la
                        programación comenzó hace años y desde entonces he estado dedicado a
                        aprender y desarrollar mis habilidades en el campo de la tecnología. Estoy
                        constantemente actualizando mis conocimientos y aprendiendo nuevas
                        tecnologías para mantenerme al día con las últimas tendencias en el mundo
                        del desarrollo web. Ansioso por trabajar en proyectos emocionantes y
                        colaborar con otros profesionales de la industria para seguir creciendo en
                        el campo de la tecnología. Si estás buscando a alguien apasionado,
                        comprometido y con ganas de aprender, <i><a href="#contact">¡no dudes en contactarme!</a></i>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
