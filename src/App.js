import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  // State definition
  const [ budget, saveBudget ] = useState(0);
  const [ remaining, saveRemaining ] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);
  const [ expenses, saveExpenses ] = useState([]);
  const [ expense, saveExpense ] = useState({});
  const [ newExpense, saveNewExpense ] = useState(false);

  // UseEffect -> updates remaining qty
  useEffect(() => {
    if (newExpense) {
      // add new budget
      saveExpenses([
        ...expenses,
        expense
      ]);

      // substract from the current budget
      const remainingBudget = remaining - expense.qty;
      saveRemaining(remainingBudget);

      // Reset to false
      saveNewExpense(false);
    }
  }, [expense, expenses, newExpense, remaining]);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>

        <div className="main-content content">
          { showQuestion ? 
            (
              <Question 
                saveBudget={saveBudget}
                saveRemaining={saveRemaining}
                updateQuestion={updateQuestion}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form 
                    saveExpense={saveExpense}
                    saveNewExpense={saveNewExpense}
                  />
                </div>

                <div className="one-half column">
                  <List 
                    expenses={expenses}
                  />

                  <BudgetControl 
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
            </div>
            )
          }
  
        </div>
      </header>
    </div>
  );
}

export default App;
