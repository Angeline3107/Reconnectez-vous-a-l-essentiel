import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Activites from "./components/Activites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Accueil");

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {(currentPage === "Accueil" && <Accueil />) ||
        (currentPage === "Activités" && <Activites />) || <Contact />}

      <Footer />
    </>
  );
}
