import React, { useState } from "react";

const Icons = ({ path1, path2, name }) => {
    const [rutaActual, setRutaActual] = useState(path1);

    const cambiarRuta = () => {
        setRutaActual(rutaActual === path1 ? path2 : path1);
    };
    return (
        <img src={rutaActual} onMouseEnter={cambiarRuta} onMouseLeave={cambiarRuta} alt={name} />
    );
};

export default Icons;
