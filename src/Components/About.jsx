import React, { useEffect } from 'react'
import styled from 'styled-components'
import bg from '../Assets/abt.jpg'
import abtbg from '../Assets/abtbg.png'
import cld from '../Assets/cld.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"

const First = styled.div`
    margin-top: -7%;
    width: 100%;
    height: 100vh;
    background: url(${bg});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5%;
`
const Card = styled.div`
    height: 50vh;
    width: 60%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1{
        font-size: 6vw;
        color: #fff;
    }
`
const SecondSEction = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    align-items: center;
    padding: 2%;
    @media (max-width:450px) {
        margin-top: 0%;
        flex-direction: column;
        gap: 10%;
        border: 11px solid #000;
    }
    .left{
       
    }
    .right{
        width: 50%;
        height: 60vh;
        background: url(${abtbg});
        background-size: cover;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
    }
`
const ThirdSection = styled.div`
    width: 100%;
    height: 70vh;
    background: url(${cld});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Banner = styled.div`
    width: 40%;
    height: 55%;
    background: ${props => props.bg};
    padding: 2%;
    h1{
        font-size: 2vw;
        color:#067fbcfc;
    }
    p{
        font-size: 1.2vw;
    }
`
const Left = styled.div`
    color:${props => props.cl};   
 @media (max-width:450px) {
            margin-top: 0%;
            width: 100%;
            flex-direction: column;
            height: auto;
            border: 11px solid #000;
        }
        width: 50%;
        height: 60vh;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5%;
        align-items: flex-start;
        padding: 2%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        font-family: 'Raleway', sans-serif;
        h1{
            font-size: 3vw;
            font-weight: 800;
        }
        p{
            line-height: 30px;
            text-align: justify;
            font-size: 1.2vw;
            font-weight: 500;
        }
`
function About({darkMode}) {
    useEffect(()=>{
        Aos.init({duration : 3000})
    },[])
  return (
    <div>
        <First>
            <Card data-aos="fade-left">
                <h1>ABOUT US</h1>
            </Card>
        </First>
        <SecondSEction cl={darkMode ? '#fff' : '#000'}>
            <Left data-aos="fade-right" className="left" cl={darkMode ? '#fff' : '#020008'}>
                <h1>
                    Goal Principle
                </h1>

                <p>Information Technology has advanced consistently since the birth of the analog computer, from filling rooms to the comfort of small easy to use devices that have populated the market across the world. Bluebird CMAST believes in this approach which technology has shown us, to provide advanced solutions that give comfort and ease to the clients but most especially addresses the problem with an accurate and efficient solution.</p>

                
            </Left>

            <div className="right" data-aos="fade-left"></div>
        </SecondSEction>

        <ThirdSection>
            <Banner data-aos="fade-up"
     data-aos-duration="3000" bg={darkMode ? '#000' : '#fff'}>
                <h1>Our History</h1>
                <p>BlueBird Cmast Nig, is known to perform creditably and to World standards. In our Design/Build jobs, we ensure a holistic, stress free, fixed price, and predetermined completion/target approach. We take responsibility for ALL our installations and always provide needed support and maintenance.</p>
            </Banner>
        </ThirdSection>
        
    </div>
  )
}

export default About