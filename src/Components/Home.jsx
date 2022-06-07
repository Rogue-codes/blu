import React, { useEffect } from 'react'
import CarouselComponent from './CarouselComponent'
import styled from 'styled-components'
import Accord from './Accord'
import {IoMdContacts} from 'react-icons/io'
import {MdComputer} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import land from '../Assets/land.png'
import logo2 from '../Assets/cloud.jpg'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import MyVerticallyCenteredModalRight from './MyVerticallyCenteredModalRight'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

const SecondSEction = styled.section`
    @media (max-width:450px) {
        flex-direction: column;
        margin-top: 10%;
        height: auto;
    }
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    align-items: center;
    padding: 2%;
    margin-top: -10%;
    .left{
        @media (max-width:450px) {
            width: 100%;
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
        color: ${props=>[props.cl]};
        h1{
            @media (max-width:450px) {
                font-size: 2rem;
            }
            font-size: 2vw;
            font-weight: 800;
        }
        p{
            @media (max-width:450px) {
              font-size: 1.3rem;
            }
            line-height: 30px;
            text-align: justify;
            font-size: 1.2vw;
            color: ${props=>[props.cl]};
            font-weight: 500;
            .blu{
                font-family: 'Dancing Script', cursive;
                font-weight: 900;
            }
            .cmast{
                font-family: 'Rubik', sans-serif;
            }
        }
    }
`
const ThirdSEction = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: url('https://media.istockphoto.com/photos/clouds-on-sky-picture-id184103864?b=1&k=20&m=184103864&s=170667a&w=0&h=ZngznsmOs4gnb0bRP13q5RFXY-cv-BHZJNjJXb6ffyk=') fixed;
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-repeat: no-repeat;
    justify-content: center;
    position: relative;
    align-items: center;
    padding: 5%;
    transition: all .3s linear;
    @media (max-width:480px) {
        display: none;
    }
    &:hover{
        .card{
            transition: all .3s linear;
            &:nth-child(1){
                @media (max-width:480px) {
                    transform: translatey(-125%);
                }
                transform: translateX(-125%);
                background: #fff;
                color: #000;
            }
            &:nth-child(2){
                @media (max-width:480px) {
                    transform: translatey(-5%);
                }
                transition: all .3s linear;
                transform: translateX(-5%);
            }
            &:nth-child(3){
                @media (max-width:480px) {
                    transform: translatey(125%);
                }
                transition: all .3s linear;
                transform: translateX(125%);
                background: #fff;
                color: #000;
            }
        }
    }
    .card{
        @media (max-width:480px) {
            width: 95%;
        }
        width: 25%;
        height: 80%;
        position: absolute;
        background: #067fbcfc;
        color: #fff;
        transition: all .5s linear;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        justify-content: flex-start;
        gap: 10%;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        padding: 2%;
        cursor: pointer;
        p{
            font-family: 'Raleway', sans-serif;
            font-size: 1.5vw;
        }
        ul li {
            font-family: 'Raleway', sans-serif;
            font-size: 1.2vw;
            font-weight: 500;
        }
    }  
`
const FourthSection = styled.section`
        @media (max-width:450px) {
            height: auto;
        }
        width: 100%;
        margin-top: 2%;
        margin-bottom: 2%;
        min-height: 70vh;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 5%;
        align-items: center;
        padding: 2%;
        .top{
            height: 30%;
            h1{
                @media (max-width:450px) {
                    font-size: 2rem;
                    margin-top: 15%;
                }
                text-align: center;
                font-size: 2vw;
            }
            p{
                text-align: center;
                margin-bottom: 10%;
            }
        }
        .bottom{
            @media (max-width:450px) {
                flex-direction: column;
                align-items: center;
                height: 100vh;
            }
            height: 50vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 5%;
            .filling{
                @media (max-width:450px) {
                    width: 100%;
                    height: 50%;
                }
                width: 50%;
                height: 100%;
                background:url('https://images.pexels.com/photos/1370294/pexels-photo-1370294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
                background-size: cover;
                -webkit-background-size:cover;
                -moz-background-size:cover;
                -o-background-size:cover;
                background-repeat: no-repeat;
                display: flex;
                justify-content: center;
                border-radius: 15px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                align-items: center;  
                filter: sepia();
                cursor: pointer;
                transition: all .5s linear;
                &:hover {
                    filter: none;
                }
                p{
                    @media (max-width:450px) {
                        font-size: 2rem;
                        text-align: center;
                    }
                    font-size: 2vw;
                    letter-spacing: 5px;
                    color: #fff;
                    font-weight: 900;
                    font-family: 'Roboto Condensed', sans-serif;
                }
            }
            .land{
                @media (max-width:450px) {
                    width: 100%;
                    height: 50%;
                }
                width: 50%;
                height: 100%;
                background: url(${land});
                background-size: cover;
                -webkit-background-size:cover;
                -moz-background-size:cover;
                -o-background-size:cover;
                background-repeat: no-repeat;
                border-radius: 15px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                filter: sepia();
                cursor: pointer;
                transition: all .5s linear;
                &:hover {
                    filter: none;
                }
            }
        }
`
const FifthSection = styled.div`
    @media (max-width:450px) {
        flex-direction: column;
        height: auto;
    }
    width: 100%;
    height: 70vh;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;
    padding: 4%;
    .left{
        @media (max-width:450px) {
            width: 300px;
            height: 300px;
        }
        width: 500px;
        height: 300px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right{
        @media (max-width:450px) {
            width: 100%;
        }
        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2%;
        h3{
            @media (max-width:450px) {
                font-size: 2rem;
            }
            font-size: 2vw;
            font-weight: 900;
            font-family: 'Raleway', sans-serif;
        }
        p{
            @media (max-width:450px) {
                font-size: 1.2rem;
            }
            font-size: 1.5vw;
            font-weight: 500;
            font-family: 'Roboto Condensed', sans-serif;
        }
        .contact{
            @media (max-width:450px) {
                font-size: 1rem;
                width: 45%;
            }
            width:35% ;
            padding: 2% 5%;
            margin-left: 2%;
            background: #0680bcc2;
            border: solid 1px #fff;
            border-radius: 5px;
            font-family: 'Roboto Condensed', sans-serif;
            color: #fff;
            margin-top: 2%;
            font-size: 2vw;
            transition: all .5s linear;
            a{
                text-decoration: none;
                color: #fff;
            }
            &:hover{
                color:#0680bcc2;
                background: #000;
            }
        }
    }
`
const SixthSection = styled.div`
    @media (max-width:450px) {
        height: auto;
        padding: 2%;
    }
    width: 100%;
    height: 70vh;
    background:  linear-gradient(90deg, #067fbc62 0%, #067fbc7a 32%, #067fbc48 100%),url(${logo2}) center fixed ;
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
`
const SixthCard = styled.div`
    @media (max-width:450px) {
        width: 90%;
    }
    width: 60%;
    height: auto;
    border-radius: 12px;
    background: ${props => props.bg};
    padding: 2%;
    h1{
        @media (max-width:450px) {
            font-size: 1.5rem;
        }
        color: #0680bcc2;
        font-size: 2vw;
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
    }
    h2{
        @media (max-width:450px) {
            font-size: 1.2rem;
        }
        font-size: 1.5vw;
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
    }
    p{
        @media (max-width:450px) {
            font-size: 1rem;
        }
        font-family: 'Raleway', sans-serif;
        font-size: 1.3vw;
    }
`
const Btn = styled.button`
    @media (max-width:450px) {
      font-size: 1rem;
    }
    padding: 2% 7%;
    font-size: 1.3vw;
    background: ${props => props.bg};
    border-radius: 5px;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover{
        background: #0680bcc2;
        color: #fff;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
`

function Home({darkMode}) {
    useEffect(()=>{
        Aos.init({duration : 1000})
    },[])

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <div className='home'>
        <CarouselComponent/>
        <SecondSEction>
            <div className="left"  data-aos="fade-right">
                <h1>
                Mission Statement
                </h1>

                <p><span className='blu'><b>Bluebird</b></span><span className='cmast'>CMAST</span> Nigeria Limited is a company which delivers tailored solutions to address business challenges. With a backbone of experienced staff, the company has since built for itself a solid reputation as the frontline Consulting Services, Portfolio Management, Information Technology and Information Management service provider.</p>
                <Btn bg={darkMode ? '#0680bcc2' : 'black'}><Link to='/about'>more</Link></Btn>
                
            </div>

            <Accord  data-aos="fade-left"/>
        </SecondSEction>
        <ThirdSEction>
            <div className="card">
                <div className="top">
                    <IoMdContacts size='3rem'/>
                </div>
                <div className="mid">  
                    <p>Consulting Services</p>
                </div>
                <div className="bottom">
                <ul>
                    <li>
                        Analyze issues/challenges and propose remedial actions.
                    </li>
                    <li>
                        Plan, build and support ICT solutions.
                    </li>
                    <li>
                        Programme and project management
                    </li>
                </ul>
                </div>
            </div>

            <div className="card" cl={darkMode ? '#fff' : null}>
                <div className="top">
                    <MdComputer size='3rem'/>
                </div>
                <div className="mid">  
                    <p>IT Infrastructure Services</p>
                </div>
                <div className="bottom">
                <ul>
                    <li>
                        Analyze issues/challenges and propose remedial actions.
                    </li>
                    <li>
                        Plan, build and support ICT solutions.
                    </li>
                    <li>
                        Programme and project management
                    </li>
                </ul>
                </div>
            </div>

            <div className="card">
                <div className="top">
                    <FiSettings size='3rem'/>
                </div>
                <div className="mid">  
                    <p>Software Systems</p>
                </div>
                <div className="bottom">
                <ul>
                    <li>
                        Design, Installation, Integration and support for software programs.
                    </li>
                    <li>
                        Customer interactive solutions.
                    </li>
                    <li>
                        Service provider solutions.
                    </li>
                </ul>
                </div>
            </div>
        </ThirdSEction>

        <FourthSection>
            <div className="top">
                <h1>PRODUCTS</h1>
                <p>Below are some our Solutions. Click on the images for more info</p>
            </div>
            <div className="bottom">
                <div className="filling" onClick={() => setModalShow(true)} data-aos="fade-right">
                    <p>Enterprise filling system</p>
                </div>
                <div className="land" onClick={() => setModalShow2(true)} data-aos="fade-left">

                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <MyVerticallyCenteredModalRight
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
        </FourthSection>

        <FifthSection>
            <div className="left" data-aos="fade-right"
     data-aos-duration="1000">
                <img src="/idea.webp" alt="" srcset="" />
            </div>
            <div className="right" data-aos="fade-left"
     data-aos-duration="1000">
                <h3>Want to know more?</h3>
                <p>Speak to one of our technology professionals on how to achieve the desired results for your business.</p>
                <button className='contact'><Link to='/contact'>Contact Us</Link></button>
            </div>
        </FifthSection>

        <SixthSection>
            <SixthCard data-aos="fade-up"
     data-aos-duration="2000" bg={darkMode ? '#333' : '#fff'}>
                <h1>Who We Are</h1>
                <h2>Transforming The Face of IT Support</h2>
                <p>We are a global <b>Cloud/Technology Support</b> organization providing innovative technology and business solutions to Enterprises institutions across continents.</p>
                <p>With our business office in Portharcourt Nigeria, and an army of Highly intuitive I.T professionals and Cloud engineers with competencies across Microsoft Azure, AWS, GCP, consulting and software development, BluebirdCMAST is on a mission to support organizations and states with technologies and intellectual strength required to enable them surpass their stakeholders’ expectations.</p>
            </SixthCard>
        </SixthSection>


    </div>
  )
}

export default Home