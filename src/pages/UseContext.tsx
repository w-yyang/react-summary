import React, { createContext, useContext } from 'react';

const globalData = {
  light: {
    count: 11,
    background: "white"
  },
  dark: {
    count: 22,
    background: "black"
  }
};

const DataContext = createContext(globalData.light);

function MiddleCom() {
  return (
    <ChildCom />
  );
}

function ChildCom() {
  const globalData = useContext(DataContext);
  return (
    <div>
      {globalData.count} --- {globalData.background}
    </div>
  );
}

export default function () {
  return (
    <div>
      <h3>useContext</h3>
      <div>
        <DataContext.Provider value={globalData.dark}>
          <MiddleCom />
        </DataContext.Provider>
      </div>
    </div>
  );
};