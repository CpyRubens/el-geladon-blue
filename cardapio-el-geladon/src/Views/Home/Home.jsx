import './Home.css'
import PaletaLista  from 'Components/PaletaLista/PaletaLista';
import Navbar from 'Components/Navbar/Navbar';
function Home() {
    return (
      <div className="Home">
       <Navbar />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
    )
  }
  
  export default Home;