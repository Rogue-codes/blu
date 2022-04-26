import React from 'react'
import styled from 'styled-components'
import servbg from '../Assets/servbg.webp'
import serv from '../Assets/serv.jpg'
import serv2 from '../Assets/serv2.jpg'
import serv3 from '../Assets/serv3.jpg'
import serv4 from '../Assets/serv4.jpg'

const First = styled.div`
    margin-top: -7%;
    width: 100%;
    height: 100vh;
    background: url(${servbg});
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
    background: #0680bcc2;
    border-radius: 5px;
    box-shadow: rgba(63, 38, 38, 0.35) 0px 5px 15px;
    height: 50vh;
    width: 60%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1{
        font-size: 4vw;
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
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
        }
        li{
            line-height: 30px;
            text-align: justify;
            font-size: 1vw;
            color: #020008;
            font-weight: 500;
        }
    }
    .right{
        width: 50%;
        height: 50vh;
        background: url(${serv});
        background-size: cover;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
    }
`
const SecondSEction2 = styled.section`
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
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
        }
        li{
            line-height: 30px;
            text-align: justify;
            font-size: 1vw;
            color: #020008;
            font-weight: 500;
        }
    }
    .right{
        width: 50%;
        height: 50vh;
        background: url(${serv2});
        background-size: cover;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
    }
`
const SecondSEction3 = styled.section`
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
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
        }
        li{
            line-height: 30px;
            text-align: justify;
            font-size: 1vw;
            color: #020008;
            font-weight: 500;
        }
    }
    .right{
        width: 50%;
        height: 50vh;
        background: url(${serv3});
        background-size: cover;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
    }
`
const SecondSEction4 = styled.section`
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
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
        }
        li{
            line-height: 30px;
            text-align: justify;
            font-size: 1vw;
            color: #020008;
            font-weight: 500;
        }
    }
    .right{
        width: 50%;
        height: 50vh;
        background: url(${serv4});
        background-size: cover;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
    }
`

function Service() {
  return (
    <div>
        <First>
            <Card>
                <h1>SERVICES</h1>
            </Card>
        </First>

        <SecondSEction>
            <div className="left">
                <h1>
                    Consulting Services
                </h1>

                <ul>
                    <li>Analyze issues/challenges and propose remedial actions.</li>
                    <li>Plan, build and support ICT solutions that help organizations reduce cost, increase reve-nue, manage risk and value add processes.</li>
                    <li>Carry out reviews on Compliance, Policies, Procedures and new ways of working em-bedment.</li>
                    <li>Programme and project management</li>
                </ul>

                
            </div>

            <div className="right"></div>
        </SecondSEction>

        <SecondSEction2>
            <div className="right"></div>

            <div className="left">
                <h1>
                    IT Infrastructure Services
                </h1>

                <ul>
                    <li>Full integration and support of a wide range of I.T services such as computers, telecommunication, V-SAT and network equipment, Access Control, CCTV, Professional Audio Visual and Renewable Energy Systems.</li>
                    <li>Supply, installation, support and maintenance of computer systems, Printers, Plotters, Laptops, UPS, Servers, digital cameras and all other PC peripherals.</li>
                    <li>Installation and commissioning of WAN and LAN links using Microwave, Fibre cabling and twisted pair cable where applicable.</li>
                </ul>

                
            </div>
        </SecondSEction2>

        <SecondSEction3>
            <div className="left">
                <h1>
                    Software Systems
                </h1>

                <ul>
                    <li>Design, Installation, Integration and support for software programs.</li>
                    <li>Customer interactive solutions.</li>
                    <li>Carry out reviews on Compliance, Policies, Procedures and new ways of working em-bedment.</li>
                    <li>Service provider solutions.</li>
                </ul>

                
            </div>

            <div className="right"></div>
        </SecondSEction3>

        <SecondSEction4>
            <div className="right"></div>

            <div className="left">
                <h1>
                    IT Infrastructure Services
                </h1>

                <ul>
                    <li>Full integration and support of a wide range of I.T services such as computers, telecommunication, V-SAT and network equipment, Access Control, CCTV, Professional Audio Visual and Renewable Energy Systems.</li>
                    <li>Supply, installation, support and maintenance of computer systems, Printers, Plotters, Laptops, UPS, Servers, digital cameras and all other PC peripherals.</li>
                    <li>Installation and commissioning of WAN and LAN links using Microwave, Fibre cabling and twisted pair cable where applicable.</li>
                </ul>

                
            </div>
        </SecondSEction4>
    </div>
  )
}

export default Service