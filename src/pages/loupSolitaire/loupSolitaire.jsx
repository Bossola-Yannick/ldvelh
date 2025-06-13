import React from "react";
// import { UsePersistedState } from "../../hooks/usePersistedState";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LsPerso from "./loupSolitairePerso";
import LsEquipment from "./loupSolitaireEquipement";
import LsNav from "../../components/NavAdventure/LsNAv";
import LsNotes from "./loupSolitaireNotes";
import LsFight from "./loupSolitaireFight";

export function LoupSolitaire() {
  return (
    <>
      <LsNav />
      <h1 className="title">LOUP-SOLITAIRE</h1>
      <Routes>
        <Route path="/" element={<LsPerso />} />
        <Route path="/equipement" element={<LsEquipment />} />
        <Route path="/notes" element={<LsNotes />} />
        <Route path="/combat" element={<LsFight />} />
      </Routes>
    </>
  );
}
