 
import NotFound from './NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import {BrowserRouter , Routes,Route,} from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
     <Nav />
     <Routes>
      <Route path='/' element= {<Home />} ></Route>
      <Route path='/home' element= {<Home />} ></Route>
      <Route path='/about' element= {<About />} ></Route>
      <Route path='/contact' element= {<Contact />} ></Route>
      <Route path='*' element= {<NotFound />} ></Route>
     </Routes>
     <Footer />
     </BrowserRouter>
   </>
  );
}

export default App;
