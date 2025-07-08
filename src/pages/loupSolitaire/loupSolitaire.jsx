import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LsPerso from "./loupSolitairePerso";
import LsEquipment from "./loupSolitaireEquipement";
import LsNav from "../../components/NavAdventure/LsNAv";
import LsNotes from "./loupSolitaireNotes";
import LsFight from "./loupSolitaireFight";
import LsHasard from "./loupSolitaireHasard";
import { UsePersistedState } from "../../hooks/usePersistedState";
import("./ls-style.css");

export function LoupSolitaire() {
  const [adventureId] = UsePersistedState("id-adventure-select", "");
  const [adventure, setAdventure] = UsePersistedState("user-adventures", {});
  useEffect(() => {
    const adventureList = async () => {
      try {
        const idAdventure = adventureId;
        const response = await fetch(
          `http://localhost/api-ldvelh/api/lonewolf/getadventurebyid?adventureId=${idAdventure}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();
        console.log("Résultat des aventures :", data);
        setAdventure(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des aventures :", error);
      }
    };
    adventureList();
  }, [adventureId]);
  return (
    <>
      <LsNav />
      <h1 className="title">LOUP-SOLITAIRE</h1>
      <Routes>
        <Route path="/" element={<LsPerso />} />
        <Route path="/equipement" element={<LsEquipment />} />
        <Route path="/notes" element={<LsNotes />} />
        <Route path="/combat" element={<LsFight />} />
        <Route path="/hasard" element={<LsHasard />} />
      </Routes>
    </>
  );
}
