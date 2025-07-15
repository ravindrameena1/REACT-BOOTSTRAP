import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import Display from './Componants/Display'
import ButtonsContainer from './Componants/ButtonsContainer'


function App() {

  return (
    <div className={styles.Wrapper}>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer>
       </ButtonsContainer>
      </div>
    </div>
  );
  
}

export default App;
