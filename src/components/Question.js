import React, { Fragment, useState } from 'react';
import Proptypes from 'prop-types';
import Error from './Error';

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {

    // Defining state
    const [ qty, saveQty ] = useState(0);
    const [ err, saveErr ] = useState(false);

    // Read budget
    const defineBudget = e => {
        saveQty( parseInt(e.target.value, 10) );
    }

    // Submit
    const addBudget = e => {
        e.preventDefault();

        // Validate
        if (qty < 1 || isNaN(qty)) {
            saveErr(true);
            return;
        }

        // if validate ok
        saveErr(false);
        saveBudget(qty);
        saveRemaining(qty);
        updateQuestion(false);
    }

    return (
        <Fragment>
            <h2>¿Cuál es tu presupuesto?</h2>

            { err ?  <Error message="El presupuesto es incorrecto"/> : null }

            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Introduce tu presupuesto"
                    onChange={defineBudget}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />                
            </form>
        </Fragment>
      );
}

Question.propTypes = {
    saveBudget: Proptypes.func.isRequired,
    saveRemaining: Proptypes.func.isRequired,
    updateQuestion: Proptypes.func.isRequired
}

export default Question;
