import React from 'react'
import styled from 'styled-components'
import {BsFacebook,BsTwitter} from 'react-icons/bs'

const Foot = styled.footer`
    width: 100%;
    height: 20Vh;
    border-top: 1px solid #f9eeee;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    background: ${props=>props.bg};
    .left{
        color: #067fbcfc;
        font-family: 'Raleway', sans-serif;
        font-size: 1vw;
    }
    .right{
        display: flex;
        gap: 5%;
        align-items: center;
        justify-content: space-between;
        width: 5%;
    }
`
function Footer({darkMode}) {
  return (
    <Foot bg={darkMode ? '#000' : null}>
        <div className="left">
            &copy;  BluebirdCMAST 2022
        </div>
        <div className="right">
            <BsFacebook size="1.5rem" color="#067fbcfc" cursor="pointer"/>
            <BsTwitter size="1.5rem" color="#067fbcfc" cursor="pointer"/>
        </div>
        
    </Foot>
  )
}

export default Footer