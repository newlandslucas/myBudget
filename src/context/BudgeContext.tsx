import React, { createContext, useContext, useState } from "react";

// Definição dos tipos para cômodos e itens
type Item = {
  id: string;
  name: string;
  price: number;
};

type Room = {
  id: string;
  name: string;
  items: Item[];
};

type BudgetContextType = {
  totalBudget: number;
  setTotalBudget: (budget: number) => void;
  rooms: Room[];
  addRoom: (roomName: string) => void;
  addItem: (roomId: string, itemName: string, itemPrice: number) => void;
};

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [rooms, setRooms] = useState<Room[]>([]);

  const addRoom = (roomName: string) => {
    setRooms([...rooms, { id: Math.random().toString(), name: roomName, items: [] }]);
  };

  const addItem = (roomId: string, itemName: string, itemPrice: number) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, items: [...room.items, { id: Math.random().toString(), name: itemName, price: itemPrice }] } : room
      )
    );
  };

  return (
    <BudgetContext.Provider value={{ totalBudget, setTotalBudget, rooms, addRoom, addItem }}>
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
