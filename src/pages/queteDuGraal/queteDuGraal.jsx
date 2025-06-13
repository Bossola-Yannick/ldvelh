import React from "react";
import { Routes, Route } from "react-router-dom";
import QdGNav from "../../components/NavAdventure/QdGNav";
import QdGPerso from "./queteDuGraalPerso";
import QdGNotes from "./queteDuGraalNotes";
import QdGFight from "./queteDuGraalFight";
export function QueteDuGraal() {
  return (
    <>
      <QdGNav />
      <h1 className="title">QUETE-DU-GRAAL</h1>
      <Routes>
        <Route path="/" element={<QdGPerso />} />
        <Route path="/notes" element={<QdGNotes />} />
        <Route path="/combat" element={<QdGFight />} />
      </Routes>
    </>
  );
}
