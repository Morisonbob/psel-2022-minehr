import React from 'react'
import styled from 'styled-components'
import { FaFilter } from 'react-icons/fa'

const Dashboard = () => {
    return (
        <div>
            <StyleDashboard>
                <div className='dashUp'>
                    <div><h2>Dashboard</h2></div>
                    <div>Desafio Técnico Frontend</div>
                </div>
                <button><FaFilter />Filtrar</button>
            </StyleDashboard>
        </div>
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
    color: darkblue;

}
`;

export default Dashboard