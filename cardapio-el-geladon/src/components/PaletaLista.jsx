import './PaletaLista.css'
import {paletas} from '../mocks/paletas.js'

function PaletaLista() {
  return (
    <div className="PaletaLista">
      {paletas.map((paletas, index)=> (
      <div className="PaletaListaItem" key={`PaletaListaItem ${index}`}>
        <div>
          <div className="PaletaListaItem__titulo">{paletas.titulo}</div>
          <div className="PaletaListaItem__preco">{paletas.preco}</div>
          <div className="PaletaListaItem__descricao">{paletas.descricao}</div>
          <div className="PaletaListaItem__acoes Acoes">
            <button className="Acoes__adicionar Acoes__adicionar--preencher">
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