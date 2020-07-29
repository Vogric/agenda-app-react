import React from "react";
import PropTypes from "prop-types";
const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita animate__animated animate__rollIn">
      <p>
        Name of the event: <span> {cita.nameEvent} </span>
      </p>

      <p>
        Date: <span> {cita.date} </span>
      </p>
      <p>
        Hour: <span> {cita.hour} </span>
      </p>
      <p>
        Description: <span> {cita.description} </span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}
      >
        Delete &times;
      </button>
    </div>
  );
};
Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;
