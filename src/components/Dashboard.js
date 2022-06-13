import React from 'react'
import styled from 'styled-components'

const Dashboard = () => {
    return (
        <div>
            <StyleDashboard>
                <div className='dashUp'>
                    <div>Dashboard</div>
                    <div>Desáfio frontend MINEHR</div>
                </div>
                <button>Filtrar</button>
            </StyleDashboard>
        </div>
    )
}

const StyleDashboard = styled.nav`
background-color: grey;
 display: flex;
 justify-content: space-between;
.dashUp{
    display: flex;
    flex-direction: column;
    padding: 0%;
    margin: 0%;
}

button{
    border-radius: 10px;
}

`;


export default Dashboard