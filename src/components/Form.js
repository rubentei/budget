import React, {useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import Proptypes from 'prop-types';

const Form = ({saveExpense, saveNewExpense}) => {

    const [name, saveName] = useState('');
    const [qty, saveQty] = useState(0);
    const [err, saveErr] = useState(false);


    // User add expense
    const addExpense = e => {
        e.preventDefault();

        // validate
        if (qty < 1 || isNaN(qty) || name.trim() === '' ) {
            saveErr(true);
            return;
        }

        saveErr(false);

        // build expense
        const expense = {
            name,
            qty,
            id: shortid.generate()
        }

        // pass expense to main component
        saveExpense(expense);
        saveNewExpense(true);

        // reset form
        saveName('');
        saveQty(0);

    }

    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Agrega tus gastos aquí</h2>

            { err ? <Error message="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null}

            <div className="field">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={qty}
                    onChange={e => saveQty( parseInt(e.target.value, 10) )}
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

Form.propTypes = {
    saveExpense: Proptypes.func.isRequired,
    saveNewExpense: Proptypes.func.isRequired
}
 
export default Form;