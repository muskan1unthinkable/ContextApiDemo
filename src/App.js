
import './App.css';
import ComA from "./components/ComA";

import React,{createContext} from 'react';
const name=createContext();

function App() {
  
  return (
    <>
    <name.Provider value={"Muskan"}>
     <ComA/>
    </name.Provider>
    </>
  );
}

export default App;
export {name};
