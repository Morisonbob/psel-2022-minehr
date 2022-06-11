import React from "react";
import Bar from './Bar'
import Scatter from './Scatter'

function App() {
  return (
    <div>
      {/*TODO: Fix Navbar */}
      <nav>
        <div>
          Dashboard
          <button>Filtrar</button>
        </div>
        Desáfio frontend MINEHR
      </nav>
      <div>
        <Bar />
        <Scatter />
      </div>

    </div>

  );
}

export default App;
