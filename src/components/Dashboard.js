import React from 'react'
import styled from 'styled-components'
import { FaFilter } from 'react-icons/fa'

const Dashboard = ({ setMostraBar, mostraBar, setMostraScatter, mostraScatter, menuAberto, abreMenu }) => {

    const filtraBar = () => {
        setMostraBar(!mostraBar)
        if (mostraBar) {
            document.getElementById("barLi").style.backgroundColor = "#FF0000";
        } else {
            document.getElementById("barLi").style.backgroundColor = "#000";
        }
    }

    const filtraScatter = () => {
        setMostraScatter(!mostraScatter)
        if (mostraScatter) {
            document.getElementById("scatterLi").style.backgroundColor = "#FF0000";
        } else {
            document.getElementById("scatterLi").style.backgroundColor = "#000";
        }
    }

    return (
        <StyleDashboard>
            <div className='dashUp'>
                <div><h2>Dashboard</h2></div>
                <div className='text'>Desafio Técnico Frontend</div>
            </div>
            <div className="container">
                <button onClick={menuAberto}>
                    <FaFilter />Filtrar
                </button>
                {abreMenu && (<div class="dropdown">
                    <ul>
                        <li id="barLi" onClick={filtraBar}>Barras</li>
                        <li id="scatterLi" onClick={filtraScatter}>Scatter</li>
                    </ul>
                </div>)}
            </div>
        </StyleDashboard>
    )
}

const StyleDashboard = styled.nav`
 display: flex;
 justify-content: space-between;
 padding: 0vh 3vh;
 align-items: center;

.dashUp{
    display: flex;
    flex-direction: column;
    padding: 0vh;
    margin: 1vh;
}

button{
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin: .5vh;
    padding: 1.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 80px;
    color: white;
    background-color: black;
    max-height: 40px;
}
h2{
    margin-top: 0vh;
    margin-bottom: 1vh;
    color: #023047;

}
.text{
    color: #023047;
}
.container {
  position: relative;
  display: inline-block;
}
.dropdown {
  position: absolute;
  top: 100%;
  z-index: 2;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 8px 12px;
  background-color: black;
  color: #fca311;
  margin-left: 1vh;
}

li:hover {
  background-color: #219ebc;
  cursor: pointer;
}
`;

export default Dashboard