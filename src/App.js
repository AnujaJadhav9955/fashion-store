import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Cart from './Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
