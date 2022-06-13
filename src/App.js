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
width: 45%;
background-color: pink;
margin: 5.5vh;
padding: 1.5vh;
border-radius: 3%;
min-width: 300px;
max-width: 500px;
`;

const StyleApp = styled.div`
min-height: 100vh;
padding: 0vh 3vh;
background-color: aliceblue;
.graphs{
  display: flex;
  justify-content: center;

}
`;

export default App;
