import React from "react";
import { categories } from "../App";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const expenseSchema = z.object({
    description: z.string().min(3).max(50),
    amount: z.number().min(1).max(10000),
    category: z.enum(categories),
});
type ExpenseFormData = z.infer<typeof expenseSchema>;
const ExpenseForm = () => {
  const { register, handleSubmit, formState:{errors} } =  
  useForm<ExpenseFormData>({
        resolver: zodResolver(expenseSchema),
    });
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label" >
          Description
        </label>
        <input id="Description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input id="Amount" type="number" className="form-control" />
      </div>
      <div className="mb3">
        <label htmlFor="Category" className="form-label">
          Category
        </label>
        <select name="Category" id="" className="form-select">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
