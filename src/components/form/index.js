import { React, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { categories } from "../../constants/category";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import "./form.css";

const Form = () => {
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [Category, setCategory] = useState();
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useDispatch();

  const titleHandler = (e) => {
    settitle(e.target.value);
  };
  const amountHandler = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setamount("");
    } else setamount(val);
  };

  const categoryHandler = (category) => {
    setCategory(category);
    setDropdown(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !Category) {
      console.log("provide data");
      return;
    }
    const data = {
      title,
      amount,
      Category,
      createdAt: new Date(),
    };
    // console.log(data);
    dispatch(addExpense(data));
  };
  return (
    <div className="form-container">
      <div className="form-element">
        <label>Title</label>
        <input
          value={title}
          placeholder="Give a name to your expenditure"
          onChange={(e) => titleHandler(e)}
          required
        />
      </div>
      <div className="form-element">
        <label>Amount ₹</label>
        <input
          value={amount}
          className="amount-input"
          placeholder="Enter Amount"
          required
          onChange={(e) => amountHandler(e)}
        />
      </div>
      <div className="catagory-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setDropdown(!dropdown)}
          >
            <label>{Category ? Category.title : "Category"}</label>
            <i>
              <AiOutlineDown />
            </i>
          </div>
          {dropdown && (
            <div className="category-container">
              {categories.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => categoryHandler(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-addbutton">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i>
            <BiPaperPlane />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Form;
