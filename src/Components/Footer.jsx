import React from 'react'
import styled from 'styled-components'
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Foot = styled.footer`
    @media (max-width:450px) {
        height: auto;
    }
    width: 100%;
    height: 60Vh;
    border-top: 1px solid #f9eeee;
    display: flex;
    flex-direction: column;
    gap: 2%;
    align-items: center;
    justify-content: baseline;
    padding: 2%;
    background: ${props=>props.bg};
`
const Top = styled.div`
    @media (max-width:450px) {
        height: auto;
        flex-wrap: wrap;
    }
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    ul{
        @media (max-width:450px) {
            width: 50%;
        }
        color: #fff;
        list-style-type: none;
        li{
            @media (max-width:450px) {
                font-size: .7rem;
                padding-top: 10%;
            }
            padding-top: 5%;
            font-family: 'Lato', sans-serif;
            font-size: 14px;
            a{
                text-decoration: none;
                color: #fff;
                transition: all 0.5s linear;
                &:hover {
                    color: #000;
                }
            }
          &:nth-child(1){
            @media (max-width:450px) {
                font-size: .8rem;
            }
            font-weight: 500;
            font-family: 'Raleway', sans-serif;
            font-size: 1.2vw;
          }  
        }
    }
`
const Bottom = styled.div`
    @media (max-width:450px) {
        padding-left: 5%;
    }
    width: 100%;
    height: 10vh;
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
        font-size: 1vw;
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
    <Foot bg={darkMode ? '#333' : "#067fbc"}>
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