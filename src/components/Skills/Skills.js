import "./Skills.css";
import Icons from "../Icons/Icons";

const Skills = () => {
    const ruta1 = "../images/icons/";
    const ruta2 = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"
    return (
        <section id="skills">
            {/* <img className="bg-section" src="../images/background/BgSkills.png" alt="" /> */}
            <div className="container">
                <h2>Habilidades</h2>
                <hr className="title-line" />
                <div className="container-skills">
                    <div className="icons-skills">
                        <Icons path1={`${ruta1}HTML.png`} path2={`${ruta2}html5/html5-plain.svg`} name={"HTML Icon"} />
                        <Icons path1={`${ruta1}Firebase.png`} path2={`${ruta2}firebase/firebase-plain.svg`} name={"Firebase Icon"} />
                        <Icons path1={`${ruta1}VisualStudioCode.png`} path2={`${ruta2}vscode/vscode-original.svg`} name={"VSC Icon"} />
                        <Icons path1={`${ruta1}CSS.png`} path2={`${ruta2}css3/css3-plain.svg`} name={"CSS Icon"} />
                        <Icons path1={`${ruta1}Bootstrap.png`} path2={`${ruta2}bootstrap/bootstrap-plain.svg`} name={"Bootstrap Icon"} />
                        <Icons path1={`${ruta1}GitHub2.png`} path2={`${ruta2}github/github-original.svg`} name={"GitHub Icon"} />
                        <Icons path1={`${ruta1}JavaScript.png`} path2={`${ruta2}javascript/javascript-plain.svg`} name={"JavaScript Icon"} />
                        <Icons path1={`${ruta1}React.png`} path2={`${ruta2}react/react-original.svg`} name={"React Icon"} />
                        <Icons path1={`${ruta1}Git.png`} path2={`${ruta2}git/git-plain.svg`} name={"Git Icon"} />
                    </div>
                    <img className="picture-skills" src="../images/pictures/Developer.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
