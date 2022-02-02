import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { categories } from "../Constants/Constants";
import { ToastContainer, toast } from "react-toastify";
import "./AddForm.css";
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from "./SuccessModal";

const AddForm = () => {
  const cat = categories;
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen, setModalOpen] = useState(false) ;
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setAmount("");
      return;
    }
    setAmount(value);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoriesOpen(false);
    console.log(category);
  };

  const handleSubmit = (event) => {
      event.preventDefault();

    if (title === "" || amount === "" || !category) {
        const notify = () => toast("Please Inter a valid data");
        notify() ;
      return;
    }

    console.log(category.title);

    const data = {
      title,
      amount,
      category,
      createdBy: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(true);

  };

  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder="Enter Amount"
          value={amount}
          onChange={handleAmount}
          className="amount-input"
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i className="fas fa-chevron-down"></i>
          </div>
          {categoriesOpen && (
            <div className="category-container">
              {cat.map((item) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${item.color}` }}
                  key={item.id}
                  onClick={() => handleCategory(item)}
                >
                  <label>{item.title}</label>
                  <img src={item.icon} alt={item.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          Add
          <i className="fab fa-telegram-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
