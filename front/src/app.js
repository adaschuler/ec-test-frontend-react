import React, { useEffect, useState, useContext } from 'react';
import { ProductListPage } from "./productlistpage";
import "./app.css";

export const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------

  return (
    <div style={{ textAlign: 'center' }}>
      <span className="titulo">Prueba tecnica front Ecomsur 2021</span>
      {/* Check to see if express server is running correctly */}
      <h5>{response}</h5>
      <div className="productlist">
      <ProductListPage/>
      </div>
    </div>
  )
}

/* export default App */
