import React, { useRef } from "react";

const App = () => {
  const elementRefs = {
    input1: useRef(null),
    input2: useRef(null),
    button1: useRef(null),
  };

  // Función para hacer scroll al elemento
  const handleScroll = (id) => {
    if (elementRefs[id] && elementRefs[id].current) {
      elementRefs[id].current.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "start", // Opciones: 'start', 'center', 'end', etc.
      });
    }
  };

  return (
    <div>
      {/* Enlaces que redirigen a la sección y enfocan diferentes elementos */}
      <a href="#section1" onClick={() => handleScroll("input1")}>
        Enfocar Input 1
      </a>
      <br />
      <a href="#section1" onClick={() => handleScroll("input2")}>
        Enfocar Input 2
      </a>
      <br />
      <a href="#section1" onClick={() => handleScroll("button1")}>
        Enfocar Botón
      </a>

      {/* Sección a la que redirigen los enlaces */}
      <div id="section1" style={{ marginTop: "500px" }}>
        <h2>Sección 1</h2>
        <input type="text" ref={elementRefs.input1} placeholder="Input 1" />
        <br />
        <input type="text" ref={elementRefs.input2} placeholder="Input 2" />
        <br />
        <button ref={elementRefs.button1}>Botón 1</button>
      </div>
    </div>
  );
};

export default App;
