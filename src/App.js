import './App.css';
import ContactUs from './components/Contact/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Service/Service';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Service/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>
    </>
  );
}

export default App;
