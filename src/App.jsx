import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import MenuComponent from './Components/MenuComponent';
import About_Us from './Pages/About_Us';
import DrinkDetail from './Components/DrinkDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const menuItems = [  
  { id: 1, name: "Carrot Juice", category: "Juices", price: "$3.50", image: "/path-to-image" },
  { id: 2, name: "Chocolate Cream Coconut", category: "Juices", price: "$3.50", image: "/path-to-image" }
  // Add the rest of your items here
];

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MenuComponent />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/about_Us" element={<About_Us />} />
        {/* ✅ Add DrinkDetail Route */}
        <Route path="/drinks/:id" element={<DrinkDetail menuItems={menuItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
