import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from './components/Page404';
import About from './components/About';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Navbar /><News key="general" category="general" /></>}></Route>
          <Route path="/business" element={<><Navbar /><News key="business" category="business" /></>}></Route>
          <Route path="/sports" element={<><Navbar /><News key="sports" category="sports" /></>}></Route>
          <Route path="/health" element={<><Navbar /><News key="health" category="health" /></>}></Route>
          <Route path="/science" element={<><Navbar /><News key="science" category="science" /></>}></Route>
          <Route path="/entertainment" element={<><Navbar /><News key="entertainment" category="entertainment" /></>}></Route>
          <Route path="/about" element={<><Navbar /><About /></>}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>

      </Router >
    </div >
  );
}
export default App;
