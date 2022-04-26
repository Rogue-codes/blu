import React from 'react'
import CarouselComponent from './CarouselComponent'
import styled from 'styled-components'
import Accord from './Accord'
import {IoMdContacts} from 'react-icons/io'
import {MdComputer} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import land from '../Assets/land.png'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import MyVerticallyCenteredModalRight from './MyVerticallyCenteredModalRight'

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
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-family: 'Raleway', sans-serif;
        color: #020008;
        h1{
            font-size: 3vw;
            font-weight: 800;
        }
        p{
            line-height: 30px;
            text-align: justify;
            font-size: 1.2vw;
            color: #020008;
            font-weight: 500;
        }
        button{
            padding: 2% 7%;
            font-size: 1.3vw;
            background: #020008;
            border-radius: 5px;
            color: #fff;
            border: none;
            cursor: pointer;
            transition: all 0.5s linear;
            &:hover{
                background: #0680bcc2;
                color: #fff;
            }
        }
    }
`
const ThirdSEction = styled.div`
    @media (max-width:480px) {
        display: none;
    }
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
            font-size: 2vw;
        }
        ul li {
            font-family: 'Raleway', sans-serif;
            font-size: 1.2vw;
            font-weight: 500;
        }
    }  
`
const FourthSection = styled.section`
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 5%;
        align-items: center;
        padding: 2%;
        .top{
            height: 50%;
            h1{
                text-align: center;
                font-size: 4vw;
            }
        }
        .bottom{
            height: 50vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 5%;
            .filling{
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
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                align-items: center;  
                filter: sepia();
                cursor: pointer;
                transition: all .5s linear;
                &:hover {
                    filter: none;
                }
                p{
                    font-size: 2vw;
                    letter-spacing: 5px;
                    color: #fff;
                    font-weight: 900;
                    font-family: 'Roboto Condensed', sans-serif;
                }
            }
            .land{
                width: 50%;
                height: 100%;
                background: url(${land});
                background-size: cover;
                -webkit-background-size:cover;
                -moz-background-size:cover;
                -o-background-size:cover;
                background-repeat: no-repeat;
                border-radius: 15px;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    width: 100%;
    height: 70vh;
    margin-top: 10%;
    background: #f3ffff;
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;
    padding: 4%;
    .left{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        animation: glow 1.0s infinite alternate;
        @keyframes glow {
            from {
                      box-shadow: 0 0 10px -10px #067fbcfc;
                    }
                    to {
                      box-shadow: 0 0 10px 10px #067fbcfc;
                    }
                }
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .right{
        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2%;
        h3{
            font-size: 4vw;
            font-weight: 900;
            font-family: 'Roboto Condensed', sans-serif;
        }
        p{
            font-size: 2vw;
            font-weight: 500;
            font-family: 'Roboto Condensed', sans-serif;
        }
        .contact{
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
            &:hover{
                background: #fff;
                color:#0680bcc2;
                border: 2px solid #0680bcc2;
            }
        }
    }
`


function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <div>
        <CarouselComponent/>
        <SecondSEction>
            <div className="left">
                <h1>
                Mission Statement
                </h1>

                <p>Bluebird CMAST Nigeria Limited is a company which delivers tailored solutions to address business challenges. With a backbone of experienced staff, the company has since built for itself a solid reputation as the frontline Consulting Services, Portfolio Management, Information Technology and Information Management service provider.</p>
                <button>more</button>
                
            </div>

            <Accord/>
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

            <div className="card">
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
                <div className="filling" onClick={() => setModalShow(true)}>
                    <p>Enterprise filling system</p>
                </div>
                <div className="land" onClick={() => setModalShow2(true)}>

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
            <div className="left">
                <img src="/idea.webp" alt="" srcset="" />
            </div>
            <div className="right">
                <h3>Want to know more?</h3>
                <p>Speak to one of our technology professionals on how to achieve the desired results for your business.</p>
                <button className='contact'>Contact Us</button>
            </div>
        </FifthSection>


    </div>
  )
}

export default Home