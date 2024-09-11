import "./Accueil.css";
export default function Accueil() {
  return (
    <>
      <header>
        <h1 className="Title1-Accueil">Reconnectez-vous à l'essentiel</h1>
        <h2 className="Title2-Accueil">
          Venez vous détendre, profitez du soleil, du sable et de la mer
        </h2>
        <p className="Paragraph-Accueil">
          <span className="Reco">Reconnectez-vous à l'essentiel</span> :
          découvrez les bienfaits d'une vie en harmonie avec la nature, entre
          fruits de saison, déconnexion numérique, et bien-être au grand air.
        </p>
        <img
          className="Fauteuil"
          src="../../src/images/accueil.jpg"
          alt="Détente au bord de la mer"
        />
      </header>
    </>
  );
}
