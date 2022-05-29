import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"
import { useState } from 'react'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import ExpensesList from "./ExpensesList";
export default function Expenses(props) {
    const expenses = props.expenses;




    const [filterYear, setFilterYear] = useState('2020')

    const filterExpenses = expenses.filter(value => value.date.getFullYear().toString() === filterYear)


    const yearChangeHandler = year => {
        setFilterYear(year)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onYearChange={yearChangeHandler} year={filterYear} />
                <ExpensesChart expenses={filterExpenses} />
                <ExpensesList items={filterExpenses} />
            </Card>
        </div>
    )
}