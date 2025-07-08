import { UsePersistedState } from "../hooks/usePersistedState";
import Card from "../components/Card/card";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Profil() {
  const [adventure, setAdventure] = UsePersistedState("user-adventures", {});
  const [user] = UsePersistedState("user", "");
  // eslint-disable-next-line
  const [idAdventure, setIdAdventure] = UsePersistedState(
    "id-adventure-select",
    ""
  );
  const navigate = useNavigate;
  // récupération des aventures de l'user via son ID
  useEffect(() => {
    const adventureList = async () => {
      try {
        const idUser = user?.id;
        const response = await fetch(
          `http://localhost/api-ldvelh/api/getalladventurebyuser?userId=${idUser}`,
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
  }, [user, setAdventure]);
  // permet de transformé le nom de la table d'aventure dans le format désiré pour la nivigation
  const categoryPaths = {
    lone_wolf: "loup-solitaire",
    quete_graal: "quete-du-graal",
    defis_fantastiques: "defi-fantastique",
  };
  const handleCardSelect = (id, pathCategory) => {
    // recupération de l'id
    setIdAdventure(id);
    // redirection vers la page aventure correspondante
    navigate(`/${pathCategory}`);
  };
  return (
    <>
      <h1 className="title-homepage">
        Prêt à te lancer : {user?.pseudo || "Aventurier"}
      </h1>
      <h2 className="title-homepage">Tes Aventures Disponibles</h2>
      {Object.entries(adventure).map(([categoryKey, adventures]) =>
        adventures.map((aventure) => {
          const pathCategory = categoryPaths[categoryKey];
          return (
            <Card
              name={aventure.title}
              adventure={pathCategory}
              id={aventure.id.toString()}
              onClick={() => handleCardSelect(aventure.id, pathCategory)}
            />
          );
        })
      )}
      <Link to="/new-adventure">
        <Card name="nouvelle Aventure" />
      </Link>
    </>
  );
}
