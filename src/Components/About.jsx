import React, { useEffect } from 'react'
import styled from 'styled-components'
import bg from '../Assets/abt.webp'
import abtbg from '../Assets/abtbg.png'
import cld from '../Assets/cld.jpg'
import cld2 from '../Assets/sky.webp'
import AnimatedText from 'react-animated-text-content';
import Aos from 'aos'
import "aos/dist/aos.css"

const First = styled.div`
    @media (max-width:450px) {
      margin-top: -20%;
      background-position: 70% 70%;
      height: 70vh;
    }
    margin-top: -7%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, #067fbc62 0%, #067fbc7a 32%, #067fbc48 100%),url(${bg});
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
        @media (max-width:450px) {
            font-size: 4rem;
        }
        font-size: 6vw;
        color: #fff;
    }
`
const SecondSEction = styled.section`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    align-items: center;
    padding: 2%;
    @media (max-width:450px) {
        margin-top: 0%;
        flex-direction: column;
        gap: 10%;
    }
    .right{
        width: 50%;
        height: 60vh;
        background: url(${abtbg});
        background-size: cover;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
        @media (max-width:450px) {
            width: 100%;
        }
    }
`
const ThirdSection = styled.div`
    @media (max-width:450px) {
        margin-top: 10%;
    }
    width: 100%;
    height: auto;
    padding: 2%;
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
    @media (max-width:450px) {
        width: 80%;
        height: auto;
        padding: 4%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    width: 50%;
    height: auto;
    background: ${props => props.bg};
    padding: 2%;
    h1{
        @media (max-width:450px) {
            font-size: 1.5rem;
        }
        font-size: 2vw;
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        color:#067fbcfc;
    }
    p{
        @media (max-width:450px) {
            font-size: 1rem;
            font-family: 'Raleway', sans-serif;
        }
        font-size: 1.5vw;
        font-family: 'Raleway', sans-serif;
    }
`
const Left = styled.div`
    color:${props => props.cl};   
    @media (max-width:450px) {
        margin-top: 0%;
        width: 100%;
        flex-direction: column;
        height: auto;
        margin-bottom: 10%;
    }
    width: 50%;
    height: auto;
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
        @media (max-width:450px) {
            font-size: 1.5rem;
        }
        font-size: 3vw;
        font-weight: 800;
        color: #067fbcfc;
    }
    p{
        @media (max-width:450px) {
            font-size: 1rem;
        } 
        line-height: 30px;
        text-align: justify;
        font-size: 1.2vw;
        font-weight: 500;
    }
`
const FourthSection = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2%;
`
const FourthLeft = styled.div`
    width: 48%;
    height: auto;
    h1{
        @media (max-width:450px) {
            font-size: 1.5rem;
        }
        font-size: 3vw;
        font-weight: 800;
        font-family: 'Raleway', sans-serif;
        color: #067fbcfc;
    }
    p{
        @media (max-width:450px) {
            font-size: 1rem;
        } 
        line-height: 30px;
        text-align: justify;
        font-size: 1.5vw;
        font-weight: 500;
        font-family: 'Lato', sans-serif;
    }
`
const FourthRight = styled.div`
    width: 48%;
    height: auto;
    h1{
        @media (max-width:450px) {
            font-size: 1.5rem;
        }
        font-size: 3vw;
        font-weight: 800;
        font-family: 'Raleway', sans-serif;
        color: #067fbcfc;
    }
    p{
        @media (max-width:450px) {
            font-size: 1rem;
        } 
        line-height: 30px;
        text-align: justify;
        font-size: 1.5vw;
        font-weight: 500;
        font-family: 'Lato', sans-serif;
    }
`
const FifthSection = styled.div`
    width: 100%;
    height: auto;
    background: linear-gradient(90deg, #067fbc62 0%, #067fbc7a 32%, #067fbc48 100%),url(${cld2});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-attachment: fixed;
    background-position: 10% 70%;
    h1{
        text-align: center;
        color: #fff;
        font-size: 3vw;
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
    }
`
const ValuesContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
`
const Cards = styled.div`
    width: 24%;
    height: 50vh;
    background: #067fbcde;
    padding: 1%;
    border-radius: 5px;
    h1{
        color: #fff;
        font-size: 3vw;
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
    }
    p{
        font-family: 'Raleway', sans-serif;
        font-size: 1.4vw;
        color: #fff;
    }
`
function About({darkMode}) {
    useEffect(()=>{
        Aos.init({duration : 3000})
    },[])
  return (
    <div className='about'>
        <First>
            <Card data-aos="fade-left">
            <AnimatedText
                      type="words" // animate words or chars
                      animation={{
                          x: '200px',
                          y: '-20px',
                          scale: 1.1,
                          ease: 'ease-in-out',
                      }}
                      animationType="float"
                      interval={0.06}
                      duration={0.8}
                      tag="h1"
                      className="animated-paragraph"
                      includeWhiteSpaces
                      threshold={0.1}
                      rootMargin="20%"
                  >
                      ABOUT US
        </AnimatedText>
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
     data-aos-duration="3000" bg={darkMode ? '#333' : '#fff'}>
                <h1>WHO WE ARE</h1>
                <p><b>BlueBird Cmast Nig</b>, is known to perform creditably and to World standards. In our Design/Build jobs, we ensure a holistic, stress free, fixed price, and predetermined completion/target approach. We take responsibility for ALL our installations and always provide needed support and maintenance.</p>
                <p>We redifine tech to help enterprise technology companies transform their technical support and services function into a strategic value creation engine for growth.</p>
                <p>With our experienced team, we have been able to focus on our core solution areas and our commitment to our customers and partners remain our highest priority. </p>

            </Banner>
        </ThirdSection>

        <FourthSection>
            <FourthLeft  data-aos="fade-right">
                <h1>Mission</h1>
                <p>Bluebird CMAST Nigeria Limited is a company which delivers tailored solutions to address business challenges. With a backbone of experienced staff, the company has since built for itself a solid reputation as the frontline Consulting Services, Portfolio Management, Information Technology and Information Management service provider.</p>
            </FourthLeft>
            <FourthRight  data-aos="fade-left">
                <h1>Vision</h1>
                <p>To be Africa’s largest cloud solution/ I.T Infrastructure company and enhance Prowess of digital Transformation across all businesses.</p>
            </FourthRight>
        </FourthSection>

        <FifthSection>
            <br />
            <h1>OUR CORE VALUES</h1>
            <ValuesContainer>
                <Cards data-aos="fade-up"
     data-aos-duration="2000">
                    <h1>Service</h1>
                    <p>We Deliver quintessential I.T services to our customers.</p>
                </Cards>

                <Cards data-aos="fade-up"
     data-aos-duration="2000">
                    <h1>Innovation</h1>
                    <p>At BluebirdCMAST, we have developed the skills to be innovative and creative in all our day-to-day work. We consistently create solutions that solves daily human challenges using technology.</p>
                </Cards>

                <Cards data-aos="fade-up"
     data-aos-duration="2000">
                    <h1>Excellence</h1>
                    <p>We create service-oriented system driven by excellent performance.</p>
                </Cards>

                <Cards data-aos="fade-up"
     data-aos-duration="2000">
                    <h1>Commitment</h1>
                    <p>We value positive customer experience and are committed to ensuring all our esteemed customers get ROI during their cloud migration journey .With our commitment high customer satisfaction is guaranteed.</p>
                </Cards>
            </ValuesContainer>
        </FifthSection>
        
    </div>
  )
}

export default About