import "./App.css";
import Footer from "./components/Footer/footer";
import Connection from "./pages/connection";
import Register from "./pages/inscription";
import { Homepage } from "./pages/homepage";
import { LoupSolitaire } from "./pages/loupSolitaire/loupSolitaire";
import { DefiFantastique } from "./pages/defiFantastique/defiFantastique";
import { QueteDuGraal } from "./pages/queteDuGraal/queteDuGraal";
import { Profil } from "./pages/profil";
import Header from "./components/Header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewAdventure } from "./pages/newAdventure";

function App() {
  return (
    <Router basename="/ldvelh">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/connexion" element={<Connection />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/loup-solitaire/*" element={<LoupSolitaire />} />
          <Route path="/quete-du-graal/*" element={<QueteDuGraal />} />
          <Route path="/defi-fantastique/*" element={<DefiFantastique />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/new-adventure" element={<NewAdventure />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
