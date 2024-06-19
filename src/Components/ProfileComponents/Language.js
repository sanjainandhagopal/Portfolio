import React from 'react'
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { SiPhpmyadmin } from "react-icons/si";

const Language = () => {
  return (
    <div>
      <ul className='lang-data'>
        <li> <label><span>P</span>rogramming <span>L</span>anguages</label>
          <ul>
            <li><span><FaPython/></span> Python</li>
            <li><span><TbBrandJavascript/></span> JavaScript</li>
            <li><span><FaJava/></span> Java</li>
            <li><span><SiPhpmyadmin/></span> PHP</li>
          </ul>
        </li>
        <li> <label><span>S</span>poken <span>L</span>anguages</label>
          <ul>
            <li>English</li>
            <li>Tamil</li>
            <li>Japanese - N5</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Language