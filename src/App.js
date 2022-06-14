import React from "react";
import Bar from './components/Bar'
import Scatter from './components/Scatter'
import Dashboard from "./components/Dashboard";
import styled from "styled-components";

function App() {
  return (
    <StyleApp>
      <Dashboard />
      <div className="graphs">
        <StyleCard>
          <Bar />
        </StyleCard>
        <StyleCard>
          <Scatter />
        </StyleCard>
      </div>
    </StyleApp>
  );
}


const StyleCard = styled.div`
background-color: pink;
margin-top: 5vh;
padding: 3vh;
border-radius: 3%;
max-width: 1230px;
width: 46%;
height: 90%;
@media screen and (max-width: 1230px){
  width: 100%;
}`;

const StyleApp = styled.div`
min-height: 100vh;
background-color: aliceblue;
@media screen and (max-width: 1230px){
 .graphs{
   flex-direction: column;
 } 
}
.graphs{
  display: flex;
  justify-content: space-between;
  padding: 0vh 3vh;
  height: 380px;
}`;

export default App;
