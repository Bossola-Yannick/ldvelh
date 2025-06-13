import "./App.css";
import Footer from "./components/Footer/footer";
import { Homepage } from "./pages/homepage";
import { LoupSolitaire } from "./pages/loupSolitaire/loupSolitaire";
// import { DefiFantastique } from "./pages/defiFantastique";
import { QueteDuGraal } from "./pages/queteDuGraal/queteDuGraal";
import Header from "./components/Header/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <section className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/loup-solitaire/*" element={<LoupSolitaire />} />
          <Route path="/quete-du-graal/*" element={<QueteDuGraal />} />
          {/* <Route path="/defi-fantastique/*" element={<DefiFantastique />} /> */}
        </Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
