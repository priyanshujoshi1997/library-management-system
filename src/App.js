import './App.css';
//import MyTable from './component/Table';
import TextForm from './component/TextForm';
import DataTable from './component/Test';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './component/Navbar';



function App() {
  return (
    <Router>
     <Navbar />

      <div className="container">
        <Routes>
          <Route path="/DataTable" element={<DataTable />} />
          <Route path="/" element={<TextForm />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
