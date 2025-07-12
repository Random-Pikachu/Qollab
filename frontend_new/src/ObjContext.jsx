import React, { createContext, useContext, useState } from 'react';

const ObjContext = createContext();

export const useObj = () => useContext(ObjContext);

export const ObjProvider = ({ children }) => {
  const [obj, setObj] = useState({});

  return (
    <ObjContext.Provider value={{ obj, setObj }}>
      {children}
    </ObjContext.Provider>
  );
};