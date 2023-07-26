import React from 'react';
import './App.css';
import styled from 'styled-components';
import bild from "./assets/img/Rectangle1.png"

function App() {
  return (
    <div className="App">
      <Box>
        <span>
          <img src={bild} alt="bild..." />
          <Tytle>Headline</Tytle>
          <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
          </Text>
        </span>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
display: flex;
height: 350px;
width: 300px;
border-radius: 15px;
colors background: #FFFFFF;
box-shadow: 0px 4px 20px 5px #0000001A;
// justify-content: center;
//align-items: center;
`
const Tytle = styled.h1`
font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
`
const Text = styled.p`
width: 260px;
height: 40px;
top: 239px;
left: 20px;
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #ABB3BA;
`
