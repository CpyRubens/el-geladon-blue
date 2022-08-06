import "./Home.css";
import { useState } from "react";
import PaletaLista from "Components/PaletaLista/PaletaLista";
import Navbar from "Components/Navbar/Navbar";
import AdicionaPaletaModal from "Components/AdicionaPaletaModal/AdicionaPaletaModal";
function Home() {
  const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] =
    useState(false);
  return (
    <div className="Home">
      <Navbar createPaleta={() => setCanShowAdicionaPaletaModal(true)} />
      <div className="Home__container">
        <PaletaLista />
        {canShowAdicionaPaletaModal && (
          <AdicionaPaletaModal
            closeModal={() => setCanShowAdicionaPaletaModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
