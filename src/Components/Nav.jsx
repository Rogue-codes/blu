import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../Assets/logo.png'
import Aos from 'aos'
import "aos/dist/aos.css"


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
    @media (max-width:480px) {
        background-color: #067fbc;        
    }
    .bars{
        display: none;
        @media (max-width:480px) {
            display: block;
            font-size: 2rem;
            padding-right: 5%;
            color: white;
        }
    }
    .firstAni{
        @media (max-width:480px) {
        display: block;
        }
        display: none;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 90;
        background-color: #010214a6;
    }
    
    .animate{
    @media (max-width:480px) {
      display: block;
    }
    display: none;
    width: 80%;
    box-shadow: 2px 2px 4px #010214a6;
    min-height: 1000vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2250;
    background-color: #067fbc;
    a{
        display: block;
        color: #fff;
        margin-top: 5%;
        padding: 5%;
        margin-bottom: 9%;
        border-bottom: 1px solid #fff;
        text-decoration: none;
        font-size: 1.2rem;
    }
  }
`

const Logo = styled.div`
    color: #fff;
    height: 50px;
    width: 58px;
    background: url(${logo});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    position: relative;
    p{
        position: absolute;
        left: 85%;
        bottom: 0;
        font-family: 'Dancing Script', cursive;
        font-weight: 800;
        span{
            font-family: 'Rubik', sans-serif;
        }
    }
`
const Links = styled.div`
    @media (max-width:450px) {
        display: none;
    }
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
    useEffect(()=>{
        Aos.init({duration : 1000})
    },[])

    const [bg, setBg] = useState(false)


    const changeBg = () => {
        if(window.scrollY >= 250){
            setBg(true)
        }else{
            setBg(false)
        }
    }

    window.addEventListener('scroll', changeBg)

    const [showMenu, setShowMenu]= useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
    })
  
    const menuTransitions = useTransition(showMenu, {
      from: { opacity: 0, transform: "translateX(-100%)"},
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(-100%)" },
      reverse: showMenu,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })
  return (
    <Navbar bgc={ bg ? '#067fbc' : 'transparent'}>
        <Logo>
            <p data-aos="fade-right">Bluebird<span>CMAST</span></p>
        </Logo>

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

        <span className='bars' onClick={()=>setShowMenu(!showMenu)}><GiHamburgerMenu/></span>

        {
            maskTransitions(
            (styles, item) => item && <animated.div style={styles} className='firstAni' onClick={()=> setShowMenu(false)}>

            </animated.div>
            )
        }

        {
            menuTransitions(
            (styles, item) => item && <animated.div style={styles} className='animate'>
                <Link to='/' onClick={()=> setShowMenu(false)}>HOME</Link>
                <Link to='/about' onClick={()=> setShowMenu(false)}>ABOUT US</Link>
                <Link to='/service' onClick={()=> setShowMenu(false)}>SERVICES</Link>
                <Link to='/contact' onClick={()=> setShowMenu(false)}>CONTACT</Link>
            </animated.div>
            )
      }
    </Navbar>
  )
}

export default Nav