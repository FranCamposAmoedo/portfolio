import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import ProjectsListContainer from "./components/ProjectsListContainer/ProjectsListContainer";
import { DataProjects } from "./components/arrayProjects";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <Skills />
            <ProjectsListContainer projects={DataProjects} />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
