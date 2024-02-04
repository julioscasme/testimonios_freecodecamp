import './App.css';
import Personas from './componentes/Personas';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        
        <Personas />

      </div>
    </div>
  );
}

export default App;
