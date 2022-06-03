import React from 'react'
import styled from 'styled-components'
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'

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
            a{
                text-decoration: none;
                color: #fff;
                transition: all 0.5s linear;
                &:hover {
                    color: #000;
                }
            }
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
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
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
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/service'>Services</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/'>Faq</Link></li>
            </ul>

            <ul>
                <li>SERVICES</li>
                <li><Link to='/service'>Consulting Services</Link></li>
                <li><Link to='/service'>Software Systems</Link></li>
                <li><Link to='/service'>IT Infrastructure Services</Link></li>
                <li><Link to='/service'>Devops</Link></li>
            </ul>

            <ul>
                <li>ABOUT</li>
                <li><Link to='/about'>Who we are</Link></li>
                <li><Link to='/about'>History</Link></li>
                <li><Link to='/about'>Mission</Link></li>
                <li><Link to='/about'>Vision</Link></li>
            </ul>

            <ul>
                <li><Link to='/contact'>CONNECT WITH US</Link></li>
                <li><Link to='/contact'>Request for a demo</Link></li>
                <li><a href="https://api.whatsapp.com/send?phone=2347086793671">Quick Chat</a></li>
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