import React, { useState, useEffect } from 'react';
import Counters from './components/Counters';
import Map from './components/Map';
import Header from './components/Header'
import axios from 'axios';
import https from 'https';

const App = () => {
  const [state, setState] = useState({
    counters: [
      { id: 0, name: 'airports', value: 3, minValue: 3, label: 'Airports' },
      { id: 1, name: 'clouds', value: 4, minValue: 4, label: 'Clouds' },
      { id: 2, name: 'map', value: 10, minValue: 10, label: 'Map size' },
    ],
    field: []
  })


  const getInfo = async () => {
    const route = 'http://localhost:3333';
    const req = {};

    state.counters.map((e) => {
      req[e.name] = e.value;
    });

    let response = await axios.post(route, req, {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `application/json`
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })

    const field = response.data.plot;
    const firstAirportCovered = response.data.firstAirportCovered;
    const allAirportsCovered = response.data.allAirportsCovered;
    const counters = [...state.counters]
    setState({ counters, field, firstAirportCovered, allAirportsCovered })

  };

  useEffect(() => {
    getInfo();
  }, []);

  const addCounter = (counter) => {
    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setState({ counters });
  };

  const decreaseCounter = (counter) => {
    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    setState({ counters });
  };

  return (
    <>
      <Header />
      <main>
        <Counters
          counters={state.counters}
          onIncrement={addCounter}
          onDecrement={decreaseCounter}
          onSend={getInfo}
          firstAirportCovered={state.firstAirportCovered}
          allAirportsCovered={state.allAirportsCovered}
        />

        <Map list={state.field} />

      </main>
    </>
  );
}


export default App;
