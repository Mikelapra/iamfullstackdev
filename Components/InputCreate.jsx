import React, { useState } from 'react';

const InputCreate = () => {
  const [task, setTask] = useState(''); // Estado para almacenar la tarea ingresada

  const handleInputChange = (event) => {
    setTask(event.target.value); // Actualiza el estado con el valor del input
  };

  const handleAddTask = async () => {
    try {
      // Realiza una petición POST al endpoint /create en tu backend
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: task }), // Envía la tarea como objeto JSON
      });
    // Aquí podrías actualizar el estado de tu lista de tareas en App.jsx
      if (response.ok) {
        console.log('Tarea añadida correctamente');
        window.location.reload(); // recargar la página al añadi una nueva tarea.
      } else {
        console.error("Terea no añadida")
      }
      } catch (error) {
        console.error('Error de red:', error);}
    };

    return (
        <div>
          <input
            type="text"
            placeholder="Ingresa una tarea"
            value={task}
            onChange={handleInputChange}
          />
            <button onClick={handleAddTask}>Añadir tarea</button>
        </div>
    );
}
        
export default InputCreate;