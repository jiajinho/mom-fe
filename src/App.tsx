import React, { useEffect } from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import api from 'api';

function App() {

  useEffect(() => {
    (async () => {
      const x = await api.weather.getLatest2Hour("1");
      const y = await api.traffic.getTrafficImages();
      console.log(x);
      console.log(y);
    })();
  }, []);


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <main>
        123
      </main>
    </LocalizationProvider>
  );
}

export default App;
