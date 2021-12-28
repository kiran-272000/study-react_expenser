import React from "react";
import Header from "./components/header";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./pages/add-expense/index";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
