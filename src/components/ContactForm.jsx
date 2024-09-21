import React from 'react';
import { useForm } from './useForm';

export const ContactForm = () => {
    const { formState, onInputChange, onResetForm } = useForm({
        nombre: '',
        mensaje: ''
    });

    const { nombre, mensaje } = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Nombre: ${nombre}\nMensaje: ${mensaje}`);
        onResetForm();
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Nombre: </label>
                <input
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={onInputChange}
                    placeholder="Tu nombre"
                />
            </div>
            <div>
                <label>Mensaje: </label>
                <textarea
                    name="mensaje"
                    value={mensaje}
                    onChange={onInputChange}
                    placeholder="Tu mensaje"
                />
            </div>
            <button type="submit">Enviar</button>
            <button type="button" onClick={onResetForm}>Resetear</button>
        </form>
    );
};
