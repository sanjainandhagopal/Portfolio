import React from 'react';
import '../Styles/internships.css';
import internData from '../Resources/data/intern.json'
import intern1 from '../Resources/inter_certificate/intern1.jpg'
import intern2 from '../Resources/inter_certificate/intern2.png'
import intern3 from '../Resources/inter_certificate/intern3.jpg'
import intern4 from '../Resources/inter_certificate/intern4.png'

const Internships = () => {
  const intern = internData;
  const img_data = [intern1, intern2, intern3, intern4]
  let index = 0;

  return (
    <div className='internship'>
      {intern.map((data, index) => (
        <article className='internPage' key={index}>
          <table>
            <tbody>
              <tr className='intern-img-field'>
                <td colSpan={2}>
                  <img src={img_data[index++]} className='internimg' alt='Intern Certificate' style={{width: data.width, height:data.height}}/>
                </td>
              </tr>
              <tr>
                <td className='internlabel'>Organization:</td>
                <td><span>{data.org}</span></td>
              </tr>
              <tr>
                <td className='internlabel'>Domain:</td>
                <td>{data.domain}</td>
              </tr>
              <tr>
                <td className='internlabel'>Duration:</td>
                <td>{data.duration}</td>
              </tr>
            </tbody>
          </table>
        </article>
      ))}
    </div>
  );
};

export default Internships;
