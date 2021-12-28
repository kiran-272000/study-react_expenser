import React from "react";
import ExpenseList from "../../components/ExpenseList";
import TopFold from "../../components/topFold";
import classes from "./home.module.css";
const home = () => {
  return (
    <div className={classes.home}>
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default home;
