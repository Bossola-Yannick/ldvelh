import React from "react";
import { Routes, Route } from "react-router-dom";
import LsPerso from "./loupSolitairePerso";
import LsEquipment from "./loupSolitaireEquipement";
import LsNav from "../../components/NavAdventure/LsNAv";
import LsNotes from "./loupSolitaireNotes";
import LsFight from "./loupSolitaireFight";
import("./ls-style.css");

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
