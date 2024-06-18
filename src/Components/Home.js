import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import TypingEffect from './TypingEffect';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <h3>Hello, It's Me</h3>
        <h1>Sanjai Nandhagopal</h1>
        <h3>And I'm a <TypingEffect/></h3>
        <p>I'm a Fresher software developer with extensive knowledge of MERN stack, Networking 
          <br/>and some research perspective of machine learning.</p>
        <div className='home-sci'>
          <a href='https://github.com/sanjainandhagopal' style={{ '--i': 6 }}><FaGithub /></a>
          <a href='https://www.linkedin.com/in/sanjai-nandhagopal-59836b206/' style={{ '--i': 7 }}><FaLinkedin /></a>
          <a href= "mailto: sanjainandhagopal@gmail.com" style={{ '--i': 8 }}><IoIosMail /></a>
          
          <Link to={'/contact'} style={{ '--i': 9 }}><FaWhatsapp /></Link>
        </div>
      </div>
    </section>
  )
}

export default Home