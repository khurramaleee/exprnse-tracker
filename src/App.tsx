import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [SlectedCategory, setSlectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "cake", amount: 100, category: "Food" },
    { id: 2, description: "jucie", amount: 200, category: "Food" },
    { id: 3, description: "apple", amount: 300, category: "Fruits" },
    { id: 4, description: "Food", amount: 400, category: "Electronics" },
  ]);
  const visibleExpenses = SlectedCategory
    ? expenses.filter((e) => e.category === SlectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onAddExpense={(expense) =>
            setExpenses([
              ...expenses,
              {
                ...expense,
                id: expenses.length + 1,
              },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSlectedCategory(category)}
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
