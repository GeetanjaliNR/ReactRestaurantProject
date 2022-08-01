import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './component/RestaurantDetails';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<RestaurantDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
