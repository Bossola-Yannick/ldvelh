import "./App.css";
import Footer from "./components/Footer/footer";
import { Homepage } from "./pages/homepage";
import { LoupSolitaire } from "./pages/loupSolitaire/loupSolitaire";
import { DefiFantastique } from "./pages/defiFantastique/defiFantastique";
import { QueteDuGraal } from "./pages/queteDuGraal/queteDuGraal";
import Header from "./components/Header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/ldvelh">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/loup-solitaire/*" element={<LoupSolitaire />} />
          <Route path="/quete-du-graal/*" element={<QueteDuGraal />} />
          <Route path="/defi-fantastique/*" element={<DefiFantastique />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
