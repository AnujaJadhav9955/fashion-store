import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>    
  );
}

export default App;
