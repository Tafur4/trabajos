import logo from './logo.svg';
import { For } from './components/page/for';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom" 
import {Registro} from './components/page/resgistro'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<For/>}/>
          <Route path="/registro" element={<Registro/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
