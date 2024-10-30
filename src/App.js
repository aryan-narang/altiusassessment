import './App.css';
import Home from './components/Home';
import InvoiceDetail from './components/InvoiceDetail';
import Listview from './components/Listview';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/listview' element={<Listview/>}/>
      <Route path='/invoicedetail' element={<InvoiceDetail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
