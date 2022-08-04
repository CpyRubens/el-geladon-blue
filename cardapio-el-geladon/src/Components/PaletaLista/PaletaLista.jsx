import React, { useState, useEffect } from "react";
import "./PaletaLista.css";
import { PaletaService } from "services/paletaService";
import PaletaListaItem from "Components/PaletaListaItem/PaletaListaItem";
function PaletaLista() {
  const [paletas, setPaletas] = useState([]);

  const [paletaSelecionada, setPaletaSelecionada] = useState({});

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
        />
      ))}
    </div>
  );
}

export default PaletaLista;
