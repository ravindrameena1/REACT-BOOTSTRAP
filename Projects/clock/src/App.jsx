import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from './componants/ClockHeading1';
import ClockSlogan from './componants/ClockSlogan';
import CurrentTime from './componants/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan />
    <CurrentTime/>
  </center>
}
export default App;
