import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Header from './components/Header';
// import MobileHeader from './components/MobileHeader';
// import {useTheme} from '@mui/material/styles';
// import { useMediaQuery } from '@mui/material';

function App() {

  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Router>
      {/* {matches ? <MobileHeader/> : <Header/> } */}
      <Header/>
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
