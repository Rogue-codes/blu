import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav`
    width: 100%;
    height: 12vh;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    position: sticky;
    background: #0680bcc2;
    top: 0;
    bottom: 0;
    z-index: 5;
`

const Logo = styled.h1`
    font-family: 'Rubik Wet Paint', cursive;
    color: #fff;
`
const Links = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        text-decoration: none;
        font-family: 'Roboto Condensed', sans-serif;
        color: #fff;
    }
`
const Toggle = styled.div`
    width: 50px;
    height: 25px;
    border-radius: 20px;
    border: 1px solid #000;
    background-color: #fff;
    right: 10px;
    position: relative;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .btn{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        padding: 2%;
        background-color: #999;
        position: absolute;
        left: 25px;
    }
`

function Nav() {
  return (
    <Navbar>
        <Logo>BLU</Logo>

        <Links>
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>SERVICES</p>
            <p>CONTACT</p>
        </Links>

        <Toggle>
            <img src="sun.png" height='15' width='15' alt="" srcset="" />
            <div className="btn"></div>
            <img src="moon.png" height='15' width='15' alt="" srcset="" />
        </Toggle>
    </Navbar>
  )
}

export default Nav