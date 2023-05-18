import logo from './logo.svg';
import './App.css';
import SummaryPage from './pages/SummaryPage';
import OrderPage from './pages/OrderPage';
import { useState } from 'react';
import CompletePage from './pages/CompletePage';

function App() {
  const[step,setStep]=useState(0)
  return (
    <div style={{padding:'4rem'}} className="App">
     {step ===0 && <OrderPage setStep={setStep}/>}
     {step ===1 &&<SummaryPage setStep={setStep}/>}
     {step ===2 &&<CompletePage setStep={setStep}/>}

    </div>
  );
}

export default App;
