import "./Skills.css";
import Icons from "../Icons/Icons";

const Skills = ({ icons }) => {
    return (
        <section id="skills">
            {/* <img className="bg-section" src="../images/background/BgSkills.png" alt="" /> */}
            <div className="container">
                <h2>Habilidades</h2>
                <hr className="title-line" />
                <div className="container-skills">
                    <div className="icons-skills">
                        {icons.map((icon) => (
                            <Icons key={icon.id} {...icon} />
                        ))}
                    </div>
                    <img className="picture-skills" src="../images/pictures/Developer.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
