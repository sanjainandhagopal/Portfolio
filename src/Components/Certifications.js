import React from 'react'
import certificateData from '../Resources/data/certificateData.json'
import '../Styles/certificate.css'
import net1 from '../Resources/Certification/net1.jpg'
import net2 from '../Resources/Certification/net2.jpg'
import fir1 from '../Resources/Certification/fir1.jpg'
import fir2 from '../Resources/Certification/fir2.jpg'
import fir3 from '../Resources/Certification/fir3.jpg'
import cyb1 from '../Resources/Certification/cyb1.jpg'
import clo1 from '../Resources/Certification/clo1.jpg'
import blo1 from '../Resources/Certification/blo1.png'
import ml1 from '../Resources/Certification/ml1.jpg'
import ml2 from '../Resources/Certification/ml2.png'
import ml3 from '../Resources/Certification/ml3.png'
import ml4 from '../Resources/Certification/ml4.png'
import ml5 from '../Resources/Certification/ml5.png'

const Certifications = () => {
  const certificate = certificateData;
  const img_data = [net1, net2, fir1, fir2, fir3, cyb1, clo1, blo1, ml1, ml2, ml3, ml4, ml5]
  let index = 0;

  return (
    <div className='certificate'>
      {certificate.map((data, index) => (
        <article className='certificatePage' key={index}>
          <table>
            <tbody>
              <tr className='intern-img-field'>
                <td colSpan={2}>
                  <img src={img_data[index++]} className='internimg' alt='Intern Certificate' style={{width: 350, height:200}}/>
                </td>
              </tr>
              <tr>
                <td className='certificatelabel'>Title:</td>
                <td><span>{data.title}</span></td>
              </tr>
              <tr>
                <td className='certificatelabel'>Particular:</td>
                <td>{data.particular}</td>
              </tr>
              <tr>
                <td className='certificatelabel'>Provider:</td>
                <td>{data.provider}</td>
              </tr>
            </tbody>
          </table>
        </article>
      ))}
    </div>
  )
}

export default Certifications