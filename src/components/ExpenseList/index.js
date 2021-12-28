import React from "react";
import Card from "./Card";

const ExpenseList = () => {
  const dummyData = [
    {
      id: 1,
      title: "netflix",
      amount: "100",
    },
    {
      id: 2,
      title: "prime",
      amount: "100",
    },
    {
      id: 3,
      title: "hotstart",
      amount: "100",
    },
  ];

  return (
    <div>
      {dummyData &&
        dummyData.map((item) => <Card expense={item} key={item.id} />)}
    </div>
  );
};

export default ExpenseList;
