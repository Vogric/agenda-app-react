import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  const [state, setState] = useState({
    nameEvent: "",
    date: "",
    hour: "",
    description: "",
  });

  const actualizarState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const { nameEvent, date, hour, description } = state;

  const submitCita = (e) => {
    e.preventDefault();
    if (
      nameEvent.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      description.trim() === ""
    ) {
      setError(true);
      return;
    }
    state.id = uuidv4();
    crearCita(state);
    setState({
      nameEvent: "",
      date: "",
      hour: "",
      description: "",
    });
  };

  const [error, setError] = useState(false);

  return (
    <>
      <h2>Add an event to your agenda</h2>
      <form onSubmit={submitCita}>
        <label>Name of the event</label>
        <input
          type="text"
          name="nameEvent"
          className="u-full-width"
          placeholder="Name of the event"
          onChange={actualizarState}
          value={nameEvent}
        />
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Insert a description"
          className="u-full-width"
          onChange={actualizarState}
          value={description}
        ></textarea>
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={actualizarState}
          value={date}
        />
        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={actualizarState}
          value={hour}
        />
        <button type="submit" className="u-full-width button-success ">
          Add Event
        </button>
        {error ? (
          <p className="alerta-error animate__animated animate__zoomIn">
            Make sure you complete everything
          </p>
        ) : null}
      </form>
    </>
  );
};
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};
export default Formulario;
