import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
