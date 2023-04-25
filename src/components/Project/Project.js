import "./Project.css";
import Btn from "../Btn/Btn";
import React, { useState } from "react";

const Project = ({ preImg, img, title, web, gh }) => {
    const [imgActual, setImgActual] = useState(preImg);

    const cambiarRuta = () => {
        setImgActual(imgActual === preImg ? img : preImg);
    };

    return (
        <div className="item-project container">
            <a href={web} target="_blank" rel="noreferrer">
                <img
                    src={imgActual}
                    onMouseEnter={cambiarRuta}
                    onMouseLeave={cambiarRuta}
                    alt={title}
                />
            </a>
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
                    <Btn name="Página" path={web} />
                    <Btn name="Repositorio" path={gh} />
                </div>
            </div>
        </div>
    );
};

export default Project;
