import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Activites from "./components/Activites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useState from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <Accueil />
      <Activites />
      <Contact />
      <Footer />
    </>
  );
}
