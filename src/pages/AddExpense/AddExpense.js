import React from 'react'
import AddForm from '../../components/AddForm/AddForm';
import TopFolds from '../../components/topfolds/TopFolds';
import './AddExpense.css'

const AddExpense = () => {
    return (
        <div className='add-expense'>
            <TopFolds />
            <AddForm />
        </div>
    )
}

export default AddExpense ;
