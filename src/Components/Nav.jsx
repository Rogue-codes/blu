import {useState} from 'react'
import { Link } from 'react-router-dom'
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
    background: ${props => props.bgc};
    transition: all .5s linear;
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
    a{
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

    }
`
const Btn = styled.button`
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: none;
        padding: 2%;
        left: ${props => props.ps}px;
        position: absolute;
        transition: all .5s linear;
        background: #067fbc;
`

function Nav({toggleDarkMode,darkMode}) {
    const [bg, setBg] = useState(false)


    const changeBg = () => {
        if(window.scrollY >= 250){
            setBg(true)
        }else{
            setBg(false)
        }
    }

    window.addEventListener('scroll', changeBg)
  return (
    <Navbar bgc={ bg ? '#0680bcc2' : 'transparent'}>
        <Logo>BLU</Logo>

        <Links>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT US</Link>
            <Link to='/service'>SERVICES</Link>
            <Link to='/contact'>CONTACT</Link>
        </Links>

        <Toggle>
            <img src="sun.png" height='15' width='15' alt="" srcset="" />
            <Btn ps={ darkMode ? '25' : '0'} onClick={toggleDarkMode}></Btn>
            <img src="moon.png" height='15' width='15' alt="" srcset="" />
        </Toggle>
    </Navbar>
  )
}

export default Nav