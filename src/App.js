import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AddExpense from "./pages/AddExpense/AddExpense";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-expense" element={<AddExpense />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
