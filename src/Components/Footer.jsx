import React from 'react'
import styled from 'styled-components'
import {BsFacebook,BsTwitter} from 'react-icons/bs'

const Foot = styled.footer`
    width: 100%;
    height: 80Vh;
    border-top: 1px solid #f9eeee;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    gap: 5%;
    align-items: center;
    justify-content: flex-start;
    padding: 2%;
    background: ${props=>props.bg};
`
const Top = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    ul{
        color: #fff;
        list-style-type: none;
        li{
            padding-top: 5%;
            font-family: 'Lato', sans-serif;
            font-size: 1.5vw;
          &:nth-child(1){
            font-weight: 500;
            font-family: 'Raleway', sans-serif;
            font-size: 2vw;
          }  
        }
    }
`
const Bottom = styled.div`
    width: 100%;
    height: 20vh;
    border-top: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
    .left{
        @media (max-width:450px) {
            font-size: 1rem;
        }
        color: white;
        font-family: 'Raleway', sans-serif;
        font-size: 1.5vw;
    }
    .right{
        @media (max-width:450px) {
            width: 20%;
        }
        display: flex;
        gap: 5%;
        align-items: center;
        justify-content: space-between;
        width: 5%;
    }
`
function Footer({darkMode}) {
  return (
    <Foot bg={darkMode ? '#333' : "#0680bcc2"}>
        <Top>
            <ul>
                <li>BluebirdCMAST</li>
                <li>About us</li>
                <li>Services</li>
                <li>Contact us</li>
                <li>Faq</li>
            </ul>

            <ul>
                <li>SERVICES</li>
                <li>Consulting Services</li>
                <li>IT Infrastructure Services</li>
                <li>Software Systems</li>
                <li>IT Infrastructure Services</li>
                <li>Devops</li>
            </ul>

            <ul>
                <li>ABOUT</li>
                <li>Who we are</li>
                <li>History</li>
                <li>Mission</li>
                <li>Vision</li>
            </ul>

            <ul>
                <li>CONNECT WITH US</li>
                <li>Request for a demo</li>
                <li>Quick Chat</li>
            </ul>
        </Top>
            <hr />
        <Bottom>
        <div className="left">
            &copy;  BluebirdCMAST 2022
        </div>
        <div className="right">
            <BsFacebook  size="1.5rem" color="#fff" cursor="pointer"/>
            <BsTwitter size="1.5rem" color="#fff" cursor="pointer"/>
        </div>
        </Bottom>
        
    </Foot>
  )
}

export default Footer