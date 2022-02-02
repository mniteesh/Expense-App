import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";
import "./Card.css";

const Card = ({ items, notifySuccess }) => {
  const time = moment(items.createdAt).fromNow();
  const dispatch = useDispatch() ;

  const handleDelete = () =>{
      dispatch(deleteExpense(items))
      notifySuccess()
  }
  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${items.category.color} ` }}
    >
      <div className="card-image-container">
        <img
          src={items.category.icon}
          alt={items.category.title}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <label className="card-title">{items.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount"> ₹ {items.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    </div> 
  );
};

export default Card;
