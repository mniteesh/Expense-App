import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "./Card";
import "./ExpenseList.css";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success("Expense Deleted");

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((items) => (
          <Card items={items} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <img
            src="/assets/images/empty.png"
            alt="add list"
            className="empty-image"
          />
          <label>Your Expense list is empty</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
