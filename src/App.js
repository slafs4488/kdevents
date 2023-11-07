import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <Team />
        <Contact />
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
