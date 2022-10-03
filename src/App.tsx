import React from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <main>
        123
      </main>
    </LocalizationProvider>
  );
}

export default App;
