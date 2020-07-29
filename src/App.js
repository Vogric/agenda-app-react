import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };
  const titulo =
    citas.length === 0 ? "There are no events assigned" : "Manage your events";
  return (
    <>
      <p className="signature">© 2020 - Braian Vogrič</p>
      <h1 className="animate__animated animate__fadeIn">MyAgenda</h1>
      <div className="container animate__animated animate__fadeIn">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2 className="citas animate__animated animate__fadeIn">
              {titulo}
            </h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
