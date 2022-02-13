import css from "styles/App";
import ComponenteFuncional from "./ComponenteFuncional";

/** Componente Principal */
const App = () => (
  // Componente Fragment
  <>
    <div className={css.container}>
      <span className={css.text}>Hello world!</span>
    </div>
    {/** Llamada del componente funcional sin cuerpo */}
    <ComponenteFuncional title="Componente Funcional"/>
    {/** Llamada del componente funcional con cuerpo */}
    <ComponenteFuncional title="Componente Funcional con Cuerpo">
      <div>
        <button>Boton</button>
      </div>
    </ComponenteFuncional>
  </>
);

export default App;
