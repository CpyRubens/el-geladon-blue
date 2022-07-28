import React, { useState } from "react";
import "./PaletaLista.css";
import { paletas } from "../mocks/paletas.js";

function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge">
        {paletaSelecionada[index]}
      </span>
    );

  return (
    <div className="PaletaLista">
      {paletas.map((paletas, index) => (
        <div className="PaletaListaItem" key={`PaletaListaItem ${index}`}>
          {badgeCounter(paletaSelecionada[index], index)}

          <div>
            <div className="PaletaListaItem__titulo">{paletas.titulo}</div>
            <div className="PaletaListaItem__preco">{paletas.preco}</div>
            <div className="PaletaListaItem__descricao">
              {paletas.descricao}
            </div>
            <div className="PaletaListaItem__acoes Acoes">
              <button
                className="Acoes__adicionar Acoes__adicionar--preencher"
                onClick={() => adicionarItem(index)}
              >
                adicionar
              </button>
            </div>
          </div>
          <img
            className="PaletaListaItem__foto"
            src={paletas.foto}
            alt={paletas.sabor}
          />
        </div>
      ))}
    </div>
  );
}

export default PaletaLista;
