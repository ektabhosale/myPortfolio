import logo from './logo.svg';
import './App.css';
import AppBar from "./Components/AppBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard"

function App() {
  return (
    <>
       <div className="App">
     <AppBar/>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />}/>
     
      </Routes>
    </BrowserRouter>
    </div>
    </>
   
  );
}

export default App;
