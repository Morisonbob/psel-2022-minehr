import React from "react";
import Bar from './components/Bar'
import Scatter from './components/Scatter'
import Dashboard from "./components/Dashboard";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [mostraBar, setMostraBar] = useState(true);
  const [mostraScatter, setMostraScatter] = useState(true);
  const [abreMenu, setAbreMenu] = useState(false);

  const menuAberto = () => {
    setAbreMenu(!abreMenu)
  }

  return (
    <StyleApp>
      <Dashboard
        setMostraBar={setMostraBar} mostraBar={mostraBar}
        setMostraScatter={setMostraScatter} mostraScatter={mostraScatter}
        menuAberto={menuAberto} abreMenu={abreMenu}
      />
      <div className="graphs">
        {mostraBar && (<StyleCard>
          <Bar />
        </StyleCard>)}
        {mostraScatter && (<StyleCard>
          <Scatter />
        </StyleCard>)}
      </div>
    </StyleApp>
  );
}


const StyleCard = styled.div`
background-color: #023047;
margin-top: 5vh;
padding: 3vh;
border-radius: 3%;
max-width: 1230px;
width: 46%;
height: 90%;
z-index: 0;
@media screen and (max-width: 1230px){
  width: 100%;
}`;

const StyleApp = styled.div`
min-height: 100vh;
background-color: #8ecae6;
@media screen and (max-width: 1230px){
 .graphs{
   flex-direction: column;
 } 
}
.graphs{
  display: flex;
  justify-content: space-between;
  padding: 0vh 3vh;
  margin-top: 2vh;
  height: 380px;
}`;

export default App;
