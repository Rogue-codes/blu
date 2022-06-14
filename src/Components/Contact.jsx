import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import cont from '../Assets/cont.webp'
import emailjs from '@emailjs/browser';
import {HiMail} from 'react-icons/hi'
import Aos from 'aos'
import "aos/dist/aos.css"
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast';
import AnimatedText from 'react-animated-text-content';

const First = styled.div`
    @media (max-width:450px) {
      margin-top: -20%;
      height: 70vh;
    }
    margin-top: -7%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, #067fbc62 42%, #067fbc62 77%, #067fbc62 100%),url(${cont});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5%;
`
const Card = styled.div`
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
    margin-top: 5%;
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
    }
    .left{
        @media (max-width:450px) {
            margin-top: 0%;
            width: 100%;
            flex-direction: column;
            height: auto;
            margin-bottom: 15%;
        }
        width: 50%;
        height: 40vh;
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
              font-size: 2rem;
              padding-left: 2%;
            }
            font-size: 2vw;
            font-weight: 800;
            color: #0680bcc2;
        }
        li{
          @media (max-width:450px) {
              font-size: 1.2rem;
          }  
            line-height: 30px;
            text-align: justify;
            font-size: 1.2vw;
            padding-top: 8%;
            font-weight: 500;
        }
    }
    .right{
        @media (max-width:450px) {
              width: 100%;
              flex-direction: column;
              height: auto;
              margin-bottom: 5%;
        }
        width: 50%;
        height: auto;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
`
const Form = styled.form`
  width: 100%;
  height: 100%;
  font-family: 'Raleway', sans-serif;
  input{
    display: block;
    width: 90%;
    margin:auto;
    margin-top: 2%;
    border-radius: 5px;
    border: 1px solid lightgrey;
    height: 8vh;
    padding-left: 2%;
    @media (max-width:450px) {
      font-size: 1rem;
    }
    &:focus{
      outline: none;
    }
    &::placeholder{
      @media (max-width:450px) {
        font-size: 1rem;
      }
      font-size: 1vw;
    }
  }
  button{
    padding: 2% 7%;
    margin-left: 5%;
    margin-top: 5%;
    border: none;
    background: #0680bcc2;
    font-size: 1.4vw;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 5%;
    display: block;
    @media (max-width:450px) {
      font-size: 1rem;
    }
  }
`
const List = styled.ul`
    color: ${props => props.cl};
`
const Input =styled.input`
  background: ${props => props.bg};
  color: ${props => props.cl}
`
const Textarea =styled.textarea`
    background: ${props => props.bg};
    color: ${props => props.cl};
    width: 90%;
    padding-left: 2%;
    margin-top: 5%;
    margin-left: 5%;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding-top: 2%;
    @media (max-width:450px) {
      font-size: 1rem;
    }
    &:focus{
      outline: none;
    }
    &::placeholder{
      @media (max-width:450px) {
        font-size: 1rem;
      }
      font-size: 1vw;
    }
`

function Contact({darkMode}) {
  useEffect(()=>{
    Aos.init({duration : 3000})
  },[])
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,SetMessage] = useState('')

  const formRef = useRef()
  const [done, isDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name,email,message)
    if(!email || !name || !message) {
      console.log('empty')
      toast.error('Company Name, Email and message are required')
      return
    }
    emailjs.sendForm('service_0mhvxbd', 'template_ic74q1b', formRef.current, '8RJySH7rZZrTznIBh')
  .then((result) => {
      console.log(result.text);
      isDone(true)
  }, (error) => {
      console.log(error.text);
  });
}

  

  return (
    <div>
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
                      CONTACT US
        </AnimatedText>
        </Card>
      </First>
      <SecondSEction>
            <div className="left">
                <h1>
                  Reach us via:
                </h1>

                <List cl={darkMode ? 'white' : 'black'}>
                    <li> <span><HiMail/></span> support@<span className='blu'><b>Bluebird</b></span><span className='cmast'>CMAST</span> bluebirdcmast.com</li>
                </List>

                
            </div>

            <div className="right">
              <Form action="" ref={formRef} onSubmit={handleSubmit}>
                <Input value={name} onChange={(e)=>setName(e.target.value)} bg={darkMode ? '#333' : '#e9f3f7'}  cl={darkMode ? 'white' : 'black'} name='userName' type="text" placeholder="Company Name" />
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} bg={darkMode ? '#333' : '#e9f3f7'}  cl={darkMode ? 'white' : 'black'} name="userEmail"  type="email" placeholder="Email"/>
                <Input bg={darkMode ? '#333' : '#e9f3f7'}  cl={darkMode ? 'white' : 'black'} name="userSubject" type="text" placeholder="Subject"/>
                <Textarea value={message} onChange={(e)=>SetMessage(e.target.value)} cl={darkMode ? 'white' : 'black'} bg={darkMode ? '#333' : '#e9f3f7'} name="message" id="" placeholder="Message" cols="30" rows="10"></Textarea>
                <button>Send</button>
                {done && 'Your Mail has been sent'}
              </Form>
            </div>
        </SecondSEction>
        <Toaster/>
    </div>
  )
}

export default Contact