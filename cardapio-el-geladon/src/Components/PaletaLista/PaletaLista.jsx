import React, { useState, useEffect } from "react";
import "./PaletaLista.css";
import { PaletaService } from "services/paletaService";
import PaletaListaItem from "Components/PaletaListaItem/PaletaListaItem";
import PaletaDetalhesModal from "Components/PaletaDetalhesModal/PaletaDetalhesModal";


function PaletaLista() {
  const [paletas, setPaletas] = useState([]);

  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const [paletaModal, setPaletaModal] = useState(false);

  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });

  };

  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };
  
  const getpaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId);
    setPaletaModal(response);
  };
  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="PaletaLista">
      {paletas.map((paletas, index) => (
        <PaletaListaItem
          key={`PaletaListaItem-${index}`}
          paleta={paletas}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(paletasId)=> getpaletaById(paletasId)}
        />
      ))}
      {paletaModal &&<PaletaDetalhesModal paleta={paletaModal} closeModal={()=> setPaletaModal(false)}/>}
    </div>
  );
}

export default PaletaLista;
