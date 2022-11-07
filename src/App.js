import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
