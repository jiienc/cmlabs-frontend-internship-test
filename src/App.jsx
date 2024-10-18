import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Category from "./components/Category";
import Footer from "./components/Footer";
import CategoryDetail from "./components/CategoryDetail";
import MealDetail from "./components/MealDetail";

function App() {
  return (
    <Router>
      <div className="h-screen bg-black font-montserrat flex flex-col">
        <Navbar />
		<Navigation />
        <MainContent />
        <Footer className="px-10" />
      </div>
    </Router>
  );
}

const MainContent = () => {
  const location = useLocation();

  return (
    <main className="flex-grow">
      {/* Render Header only on the root path */}
      {location.pathname === '/' && <Header />}
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/category/:categoryName" element={<CategoryDetail />} />
        <Route path="/meal/:mealId" element={<MealDetail />} />
      </Routes>
    </main>
  );
};

export default App;
