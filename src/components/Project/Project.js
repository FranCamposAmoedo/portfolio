import "./Project.css";
import Btn from "../Btn/Btn";

const Project = ({ img, title }) => {
    return (
        <div className="item-project container">
            <img src={img} alt={title} />
            <div className="paragraph-container container">
                <h3>{title}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl est, imperdiet
                    eu viverra sed, gravida non lorem. Nulla sollicitudin lacus vitae mauris
                    lacinia, a feugiat ipsum dictum. Suspendisse pharetra ante sed justo volutpat,
                    eu scelerisque risus fermentum. Donec lectus sem, molestie id diam non, vehicula
                    laoreet lectus.
                </p>
                <div className="project-btn">
                    <Btn name="Página" />
                    <Btn name="Repositorio" />
                </div>
            </div>
        </div>
    );
};

export default Project;
