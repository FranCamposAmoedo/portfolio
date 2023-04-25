import React, { useState } from "react";

const Icons = ({ path1, path2, name, web }) => {
    const [rutaActual, setRutaActual] = useState(path1);

    const cambiarRuta = () => {
        setRutaActual(rutaActual === path1 ? path2 : path1);
    };
    return (
        <a href={web} target="_blank" rel="noreferrer">
            <img
                src={rutaActual}
                onMouseEnter={cambiarRuta}
                onMouseLeave={cambiarRuta}
                alt={name}
            />
        </a>
    );
};

export default Icons;
