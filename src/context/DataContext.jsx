import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataUtama, setDataUtama] = useState({});
  const [dataEntitas, setDataEntitas] = useState({});
  const [dataPungutan, setDataPungutan] = useState({});

  return (
    <DataContext.Provider value={{ dataUtama, setDataUtama, dataEntitas, setDataEntitas, dataPungutan, setDataPungutan }}>
      {children}
    </DataContext.Provider>
  );
};
