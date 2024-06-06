import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <img
          className="logo"
          src="../../src/images/Logo.jpg"
          alt="Logo plage"
        />
        <ul>
          <li>Accueil</li>
          <li>Activités</li>
          <li>Contact et témoignages</li>
        </ul>
      </nav>
    </div>
  );
}
