import React from 'react';
import Proptypes from 'prop-types';

const Expense = ({expense}) => (
    <li clasName="expenses">
        <p>
            {expense.name}

            <span className="expense">{expense.qty} €</span>
        </p>
    </li>
);

Expense.propTypes = {
    expense: Proptypes.object.isRequired
}
 
export default Expense;