import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import Display from './Componants/Display'
import ButtonsContainer from './Componants/ButtonsContainer'


function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const total = eval(calVal);
      setCalVal(total);
    }else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer
          onButtonClick={onButtonClick}
        ></ButtonsContainer>
      </div>
    </div>
  );
  
}

export default App;
