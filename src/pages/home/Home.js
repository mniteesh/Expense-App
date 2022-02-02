import React from 'react';
import './home.css'
import ExpenseList from '../../components/ExpenseList/ExpenseList';
import TopFolds from '../../components/topfolds/TopFolds';

const Home = () => {
    return (
        <div className='home'>
            <TopFolds />
            <ExpenseList />
        </div>
    )
}

export default Home
