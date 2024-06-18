import React from 'react'
import { FaReact, FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiAmazonapigateway } from "react-icons/si";
import { MdNetworkCheck } from "react-icons/md";

const Skills = () => {
  return (
    <div className='skill-data'>
      <ul>
        <li><span><FaReact/></span> React<span>JS</span></li>
        <li><span><SiExpress/></span> Express<span>JS</span></li>
        <li><span><FaNode/></span> Node<span>JS</span></li>
        <li><span><SiMongodb/></span> Mongo<span>DB</span></li>
        <li><span><MdNetworkCheck/></span> Networking</li>
        <li><span><SiAmazonapigateway/></span> API</li>
      </ul>
    </div>
  )
}

export default Skills