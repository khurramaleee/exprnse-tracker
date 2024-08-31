import React from "react";
import { categories } from "../App";
interface Props {
  onSlectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSlectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSlectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
