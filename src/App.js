import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [set, setSet] = useState([]);
 
  useEffect(() => {
  async function getSet() {
    const resp = await fetch("https://brickset.com/api/v3.asmx/getSets", {
      method: 'POST',
      body: new URLSearchParams({
          'apiKey': '3-qn95-6I0l-uhhJg',
          'params': {'setNumber':'75325-1', 'extendedData':1},
          'userHash': ''
      })
  })
    const data = await resp.json();

    console.log(data.results)

    setSet(data.results)
  }

  getSet()

  }, [])

  return (
          <p>I Love Lego!</p>
    )
  }

export default App;
