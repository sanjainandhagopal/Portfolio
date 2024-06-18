import React from 'react'
import '../Styles/contact.css'
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contactPage'>
      <article>
        <table>
          <tr>
            <td><IoIosMail /> E-Mail:</td>
            <td><a href= "mailto: sanjainandhagopal@gmail.com"> sanjainandhagopal@gmail.com </a></td>
          </tr>
          <tr>
            <td><FaPhoneVolume /> Ph & <FaWhatsapp /> Whatsapp:</td>
            <td>+91 6382908345</td>
          </tr>
          <tr>
            <td><FaLinkedin /> LinkedIn:</td>
            <td><a href='https://www.linkedin.com/in/sanjai-nandhagopal-59836b206/'>https://www.linkedin.com/in/sanjai-nandhagopal-59836b206/</a></td>
          </tr>
          <tr>
            <td><FaGithub /> GitHub:</td>
            <td><a href='https://github.com/sanjainandhagopal'>https://github.com/sanjainandhagopal</a></td>
          </tr>
          <tr>
            <td><FaLocationDot /> Current Location:</td>
            <td><a href='https://maps.app.goo.gl/RXiaf965DPDJSW9P8'>270, 2nd A Cross Rd, Zuzuvadi, Maruti Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560029</a></td>
          </tr>
        </table>
      </article>
    </div>
  )
}

export default Contact