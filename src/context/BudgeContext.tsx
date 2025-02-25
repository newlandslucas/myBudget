import React, { createContext, useContext, useState, ReactNode } from "react";

type BudgetContextType = {
  totalBudget: number;
  setTotalBudget: (budget: number) => void;
  items: { id: string; name: string; price: number }[];
  setItems: (items: { id: string; name: string; price: number }[]) => void;
};

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [items, setItems] = useState<{ id: string; name: string; price: number }[]>([]);

  return (
    <BudgetContext.Provider value={{ totalBudget, setTotalBudget, items, setItems }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget deve ser usado dentro de um BudgetProvider");
  }
  return context;
};
