import ExpenseForm from "./ExpenseForm";
import { useState } from 'react'

import "./NewExpense.css";
export default function NewExpense(props) {
    const [displayForm, setDisplayForm] = useState(false)
    const submitHandler = (expenseSubmitted) => {
        toggleForm()
        const expense = {
            id: Math.random().toString(),
            ...expenseSubmitted
        }
        props.onCreate(expense)
    }
    const toggleForm = () => setDisplayForm(oldDisplayform => !oldDisplayform)
    const cancelHandler = () => toggleForm()

    if (!displayForm) {
        return <div className="new-expense">
            <button onClick={toggleForm}>Add new Expense</button>
        </div>
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSubmit={submitHandler} onCancel={cancelHandler} />
        </div>
    );
}
