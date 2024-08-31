import React from "react";
import { categories } from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        onSelectCategory(event.target.value);
        console.log(event.target.value + " selected");
      }}
    >
      {/* <option value="">All Categories</option> */}
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
