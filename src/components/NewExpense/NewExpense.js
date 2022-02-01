import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormState(false);
    };
    const [formState, setFormState] = useState(false);
    const displayFormHandler = () =>{
        setFormState(true);
    };
    const cancelForm = () => {
        setFormState(false);
    }

    return (
        <div className="new-expense">
            {
                formState && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancelForm={cancelForm} />
            }
            {
                !formState && <button onClick={displayFormHandler}>Add New Expense</button>
            }
        </div>
    );
}

export default NewExpense;