// appContext.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [deleteActive, setDeleteActive] = useState(false);
  const [message, setMessage] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [updateWindow, setUpdateWindow] = useState(false);
  const [editActive, setEditActive] = useState(false);
  return (
    <AppContext.Provider
      value={{
        deleteActive,
        setDeleteActive,
        message,
        setMessage,
        selectedProductId,
        setSelectedProductId,
        updateWindow,
        setUpdateWindow,
        editActive,
        setEditActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
