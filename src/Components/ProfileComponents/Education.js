import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
      <tr className='edu-data'>
        <td>
          <h3>Education Qualification:</h3>
          <h3>UG - B.Tech <span><IoSchool/></span></h3>
          <p><label>Branch:</label> Information Technology</p>
          <p><label>CGPA:</label> 7.29</p>
          <p><label>Institute <FaSchool/>:</label> Knowledge Institue of Technology</p>
          <p><label>Location <IoLocation/>:</label> Salem, TamilNadu</p>
        </td>
        <td className='edu-data-mid'>
          <h3>HSC <span><IoSchool/></span></h3>
          <p><label>Branch:</label> Maths ComputerScience</p>
          <p><label>Percentage:</label> 66.5</p>
          <p><label>Institute <FaSchool/>:</label> Wisdom Gates Hr.Sec.School</p>
          <p><label>Location <IoLocation/>:</label> Salem, TamilNadu</p>
        </td>
        <td>
          <h3>SSLC <span><IoSchool/></span></h3>
          <p><label>Percentage:</label> 77.8</p>
          <p><label>Institute <FaSchool/>:</label> Sri Ramalinga Vallalar Hr.Sec.School</p>
          <p><label>Location <IoLocation/>:</label> Salem, TamilNadu</p>
        </td>
      </tr>
  )
}

export default Education