import "./App.css";
import Card from "./Components/Card";
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const ExampleContext = createContext("FreeApi");

const App = () => {
  // ESTADO LOADING --> Para comprobar si podemos o no renderizar la información
  const [loading, setLoading] = useState(true);
  // ESTADO INFORMACIÓN DEL GET
  const [apis, setApis] = useState();
  // FORZAR RECARGA INFO ENDPOINT
  const [forceLoad, setForceLoad] = useState(false);



  useEffect(() => {
    (async function fetchData() {
      setLoading(true);
      const { data } = await axios.get("https://api.publicapis.org/entries");
      setApis(data);
      setLoading(false);
    })();
  }, [forceLoad]);
  console.log(forceLoad);
  return (
    <div className="App">
      <ExampleContext.Provider value="FreeApi">
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <div style={{paddingTop: '50px'}}>¡Hemos encontrado {apis.count} apis!</div>
            <button onClick={() => setForceLoad(!forceLoad)}>Recargar</button>
            <div className="apisContainer">
              {apis.entries.slice(0,50).map((api) => (
                <Card key={api.Link} apiData={api} />
              ))}
            </div>
          </>
        )}
      </ExampleContext.Provider>
    </div>
  );
};

export default App;