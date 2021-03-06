import React, { useEffect } from 'react'
import styled from 'styled-components'
import servbg from '../Assets/serv.jpeg'
import serv from '../Assets/serv.jpg'
import serv2 from '../Assets/serv2.jpg'
import serv3 from '../Assets/serv3.jpg'
import serv4 from '../Assets/devops.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
import AnimatedText from 'react-animated-text-content';

const First = styled.div`
    @media (max-width:450px) {
      margin-top: -20%;
      height: 70vh;
    }
    margin-top: -7%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, #067fbc62 0%, #067fbc7a 32%, #067fbc48 100%),url(${servbg});
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
    .left{
        @media (max-width:450px) {
            margin-top: 0%;
            width: 100%;
            flex-direction: column;
            height: auto;
            margin-bottom: 12%;
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
            @media (max-width:450px) {
              font-size: 1.5rem;
            }
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
        }
        li{
            @media (max-width:450px) {
              font-size: 1.2rem;
              padding-right: 2%;
            }
            line-height: 30px;
            text-align: justify;
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
        @media (max-width:450px) {
            width: 100%;
        }
    }
`
const SecondSEction2 = styled.section`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    align-items: center;
    padding: 2%;
    @media (max-width:450px) {
        margin-top: 10%;
        flex-direction: column;
        gap: 10%;
    }
    .left{
        @media (max-width:450px) {
            margin-top: 10%;
            width: 100%;
            flex-direction: column;
            height: auto;
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
            @media (max-width:450px) {
              font-size: 1.5rem;
            }
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
        }
        li{
            @media (max-width:450px) {
              font-size: 1.2rem;
              padding-right: 2%;
            }
            line-height: 30px;
            text-align: justify;
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
        @media (max-width:450px) {
            width: 100%;
        }
    }
`
const SecondSEction3 = styled.section`
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
    .left{
        @media (max-width:450px) {
            margin-top: 0%;
            width: 100%;
            flex-direction: column;
            height: auto;
            margin-bottom: 12%;
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
            @media (max-width:450px) {
              font-size: 1.5rem;
            }
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
        }
        li{
            @media (max-width:450px) {
              font-size: 1.2rem;
              padding-right: 2%;
            }
            line-height: 30px;
            text-align: justify;
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
        @media (max-width:450px) {
            width: 100%;
        }
    }
`
const SecondSEction4 = styled.section`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    align-items: center;
    padding: 2%;
    @media (max-width:450px) {
        margin-top: 10%;
        flex-direction: column;
        gap: 10%;
    }
    .left{
        @media (max-width:450px) {
            margin-top: 0%;
            width: 100%;
            flex-direction: column;
            height: auto;
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
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
            @media (max-width:450px) {
              font-size: 1.5rem;
            }
        }
        li{
            line-height: 30px;
            text-align: justify;
            font-weight: 500;
            @media (max-width:450px) {
              font-size: 1.2rem;
              padding-right: 2%;
            }
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
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        @media (max-width:450px) {
            width: 100%;
            margin-bottom: 10%;
        }
    }
`
const List = styled.ul`
    color: ${props=>props.cl};
    li{
        font-size: 1.2vw;
    }
`

function Service({darkMode}) {
    useEffect(()=>{
        Aos.init({duration : 2000})
    },[])
  return (
    <div>
        <First>
            <Card  data-aos="fade-left">
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
                      SERVICES
        </AnimatedText>
            </Card>
        </First>

        <SecondSEction>
            <div className="left"  data-aos="fade-right">
                <h1>
                    Consulting Services
                </h1>

                <List cl={darkMode ? 'white' : 'black'}>
                    <li>Analyze issues/challenges and propose remedial actions.</li>
                    <li>Plan, build and support ICT solutions that help organizations reduce cost, increase reve-nue, manage risk and value add processes.</li>
                    <li>Carry out reviews on Compliance, Policies, Procedures and new ways of working em-bedment.</li>
                    <li>Programme and project management</li>
                </List>

                
            </div>

            <div className="right"  data-aos="fade-left"></div>
        </SecondSEction>

        <SecondSEction2>
            <div className="right"  data-aos="fade-left"></div>

            <div className="left"  data-aos="fade-right">
                <h1>
                    IT Infrastructure Services
                </h1>

                <List cl={darkMode ? 'white' : 'black'}>
                    <li>Full integration and support of a wide range of I.T services such as computers, telecommunication, V-SAT and network equipment, Access Control, CCTV, Professional Audio Visual and Renewable Energy Systems.</li>
                    <li>Supply, installation, support and maintenance of computer systems, Printers, Plotters, Laptops, UPS, Servers, digital cameras and all other PC peripherals.</li>
                    <li>Installation and commissioning of WAN and LAN links using Microwave, Fibre cabling and twisted pair cable where applicable.</li>
                </List>

                
            </div>
        </SecondSEction2>

        <SecondSEction3>
            <div className="left"  data-aos="fade-left">
                <h1>
                    Software Systems
                </h1>

                <List cl={darkMode ? 'white' : 'black'}>
                    <li>Design, Installation, Integration and support for software programs.</li>
                    <li>Customer interactive solutions.</li>
                    <li>Carry out reviews on Compliance, Policies, Procedures and new ways of working em-bedment.</li>
                    <li>Service provider solutions.</li>
                </List>

                
            </div>

            <div className="right"  data-aos="fade-right"></div>
        </SecondSEction3>

        <SecondSEction4>
            <div className="right"  data-aos="fade-left"></div>

            <div className="left"  data-aos="fade-right">
                <h1>
                    DevOPs
                </h1>

                <List cl={darkMode ? 'white' : 'black'}>
                    <li><b>We Plan.</b> This phase helps define business value and requirements. Sample tools include Jira or Git to help track known issues and perform project management.</li>
                    <li><b>We Build.</b>  In this phase, you manage software builds and versions, and use automated tools to help compile and package code for future release to production. You use source code repositories or package repositories that also ???package??? infrastructure needed for product release. Sample tools include Docker, Ansible, Puppet, Chef, Gradle, Maven, or JFrog Artifactory.</li>
                    <li><b>We Deploy.</b> This phase can include tools that help manage, coordinate, schedule, and automate product releases into production. Sample tools include Puppet, Chef, Ansible, Jenkins, Kubernetes, OpenShift, OpenStack, Docker, or Jira.</li>
                </List>

                
            </div>
        </SecondSEction4>
    </div>
  )
}

export default Service