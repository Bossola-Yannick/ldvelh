import React from "react";
import { Routes, Route } from "react-router-dom";
import DfPerso from "./defiFantastiquePerso";
import DfNotes from "./defiFantastiqueNotes";
import DfFight from "./defiFantastiqueFight";
import DfNav from "../../components/NavAdventure/DfNav";
import DfHasard from "./defiFantastiqueHasard";
import("./df-style.css");

export function DefiFantastique() {
  return (
    <>
      <DfNav />
      <h1 className="title">DEFI-FANTASTIQUE</h1>
      <Routes>
        <Route path="/" element={<DfPerso />} />
        <Route path="/notes" element={<DfNotes />} />
        <Route path="/combat" element={<DfFight />} />
        <Route path="/hasard" element={<DfHasard />} />
      </Routes>
    </>
  );
}

// Livre dont la feuille d'aventure est différente:
// -  La citadelle du chaos
// -  La galaxie tragique
// -  Le manoir de l'enfer
// -  Rendez vous avec la mort
// -  l'epreuve des champions (il n'y as pas de bijoux, provision, or et potion)
// -
// -
// -
// -
