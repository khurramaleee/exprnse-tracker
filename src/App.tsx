import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
export const  categories = ["Food", "Fruits", "Electronics"] as const;
function App() {
  const [SlectedCategory, setSlectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "cake", amount: 100, category: "Food" },
    { id: 2, description: "jucie", amount: 200, category: "Food" },
    { id: 3, description: "apple", amount: 300, category: "Fruits" },
    { id: 4, description: "Food", amount: 400, category: "Food" },
  ]);
  const visibleExpenses = SlectedCategory
    ? expenses.filter((e) => e.category === SlectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSlectCategory={(category) => setSlectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter((e) => e.id !== id))
        }
      />
    </div>
  );
}

export default App;
