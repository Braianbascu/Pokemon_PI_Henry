import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Create from "./views/create/create";
import { Route, Routes, useLocation} from 'react-router-dom';
import Landing from "./views/landing/landing";

import './App.css';


function App() {
  return (
    <div className="App">
  <Routes>

     <Route path="/landing" element={<Landing/>}/>
     <Route exact path="/home" element={<Home/>}/>
     <Route path="home/:id" element={<Detail/>}/>
     <Route path="/create" element={<Create/>}/>

  </Routes>
    </div>
  );
}

export default App;
