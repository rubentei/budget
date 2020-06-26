import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import { reviewBudget } from '../helpers';

const BudgetControl = ({budget, remaining}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {budget} €
            </div>
            <div className={reviewBudget(budget, remaining)}>
                Restante: {remaining} €
            </div>
        </Fragment>
    );
}
 
BudgetControl.propTypes = {
    budget: Proptypes.number.isRequired,
    remaining: Proptypes.number.isRequired
}

export default BudgetControl;