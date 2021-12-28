import { React, useState } from "react";
import { AiOutlineSearch, AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import "./topFold.css";
import { Link } from "react-router-dom";
const TopFold = () => {
  const [query, setquery] = useState("");
  const queryHandler = (e) => {
    setquery(e.target.value);
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <AiOutlineSearch />
            <input
              value={query}
              placeholder="Search for Expenses"
              onChange={(e) => queryHandler(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="addbutton">
              <i>
                <AiOutlinePlusCircle />
              </i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfoldbutton">
              <IoIosArrowBack /> Back
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfoldbutton">
              <i>
                <ImCancelCircle />
              </i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
