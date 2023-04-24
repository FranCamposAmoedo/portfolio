import "./ProjectsListContainer.css";
import Project from "../Project/Project";

const ProjectsListContainer = ({projects}) => {
    return (
        <section id="projects">
            <div className="container">
                <h2>Proyectos</h2>
                <hr className="title-line" />
                <div className="container-projects container">
                    {projects.map((project) => (
                        <Project key={project.id} {...project} />
                    ))}
                
                </div>                
            </div>
        </section>
    )

}

export default ProjectsListContainer;