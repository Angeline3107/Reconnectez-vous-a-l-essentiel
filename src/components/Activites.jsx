import "./Activite.css";

export default function Activites() {
  const activities = [
    {
      id: 1,
      title: "Bronzage",
      imgSrc: "../../src/images/Bronzage.jpg",
      alt: "Ensemble de personne qui bronze",
    },
    {
      id: 2,
      title: "Baignade",
      imgSrc: "../../src/images/Baignade.webp",
      alt: "Groupe de personne qui vont se baigner",
    },
    {
      id: 3,
      title: "Beach Volley",
      imgSrc: "../../src/images/beach-volley.jpg",
      alt: "Beach Volley",
    },
    { id: 4, title: "Surf", imgSrc: "../../src/images/surf.webp", alt: "Surf" },
    {
      id: 5,
      title: "Découverte de fruits de saison",
      imgSrc: "../../src/images/fruits de saison.webp",
      alt: "fruits de saison",
    },
  ];

  return (
    <>
      <header>
        <h1 className="Title-Activites">Découvrez Nos Activités...</h1>
        <div className="grid-container">
          {activities.map((activity) => (
            <div key={activity.id} className="grid-item">
              <img
                src={activity.imgSrc}
                alt={activity.alt}
                className="grid-image"
              />
              <h2 className="grid-title">{activity.title}</h2>
            </div>
          ))}
        </div>{" "}
      </header>
    </>
  );
}
