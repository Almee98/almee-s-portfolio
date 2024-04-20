import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Contribution from './components/Contribution';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" index element={<About />} />
        <Route path="contact" index element={<Contact />} />
        <Route path="contribution" index element={<Contribution />} />
        <Route path="testimonial" index element={<Testimonial />} />
      </Route>
    </Routes>
    
  );
}

export default App;
