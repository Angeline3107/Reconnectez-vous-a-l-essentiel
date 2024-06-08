import "./Navbar.css";

export default function Navbar({ setCurrentPage }) {
  const visitHome = (e) => {
    setCurrentPage("Accueil");
    e.preventDefault();
  };
  const visitActivites = (e) => {
    setCurrentPage("Activités");
    e.preventDefault();
  };
  const visitContact = (e) => {
    setCurrentPage("Contact");
    e.preventDefault();
  };
}
