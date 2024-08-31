import React from "react";
import { categories } from "../categories";
import { date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../index.css";
interface Props {
  onAddExpense: (data: ExpenseFormData) => void;
}
const expenseSchema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(1).max(10000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Please select a category" }),
  }),
});
type ExpenseFormData = z.infer<typeof expenseSchema>;
const ExpenseForm = ({ onAddExpense }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onAddExpense(data);
        reset();
        console.log(data);
      })}
    >
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="Description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="Amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="form-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category?.message}</p>
        )}
      </div>
      <div className="mb3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
