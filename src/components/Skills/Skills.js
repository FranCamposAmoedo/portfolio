import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <img className="bg-section" src="../images/background/BgSkills.png" alt="" />
            <div className="container">
                <h2>Habilidades</h2>
                <hr className="title-line"/>
                <div className="container-skills">
                    <div className="icons-skills">
                        <img src="../images/icons/HTML.png" alt="" />
                        <img src="../images/icons/Firebase.png" alt="" />
                        <img src="../images/icons/VisualStudioCode.png" alt="" />
                        <img src="../images/icons/CSS.png" alt="" />
                        <img src="../images/icons/Bootstrap.png" alt="" />
                        <img src="../images/icons/GitHub2.png" alt="" />
                        <img src="../images/icons/JavaScript.png" alt="" />
                        <img src="../images/icons/React.png" alt="" />
                        <img src="../images/icons/Git.png" alt="" />
                    </div>
                    <img className="picture-skills" src="../images/pictures/Developer.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
