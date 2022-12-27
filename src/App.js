import Navbar from './components/Navbar';
import './assets/css/main.min.css'
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Pagination from './components/Pagination';




function App() {
  return (
    <div className='App'>
      <Navbar/>
      <HeroBanner/>
      <Menu/>
      <Pagination/>
      <Footer/>
    </div>
  );
}

export default App;
