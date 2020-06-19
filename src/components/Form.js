import React, {useState } from 'react';

const Form = () => {
    return ( 
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="field">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                />
            </div>

            <div className="field">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Añadir gasto"
            />
        </form>
     );
}
 
export default Form;