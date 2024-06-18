import React from 'react'
import '../Styles/Works.css'
import web1 from '../Resources/web1.png'
import web2 from '../Resources/web2.png'
import web3 from '../Resources/web3.png'
import api1 from '../Resources/api1.png'
import api2 from '../Resources/api2.png'
import ml from '../Resources/ml.png'
import { FaGithub } from "react-icons/fa";

const Works = () => {
  return (
    <div className='worksPage'>
      <div className='category-title'>
        <label><span>W</span>eb <span>D</span>evelopment</label>
      </div>
      <div className='category'>
        <article className="project">
          <table>
            <thead>
              <tr>
                <th colSpan='2'>Social Media App</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className='scrShotData'>
                  <img src={web1} className='scrShot' alt='App img'/>
                </td>
              </tr>
              <tr>
                <td className='titleData'><label>Tech Stack:</label></td>
                <td><p>HTML, CSS ,REACT</p></td>
              </tr>
              <tr>
                <td className='titleData'><label>Git Link:</label></td>
                <td><a href='https://github.com/sanjainandhagopal/Social-Media-App-React.git'><FaGithub/></a></td>
              </tr>
              <tr>
                <td className='titleData'><label>Description:</label></td>
                <td><p>This project is a basic social media web application designed to facilitate text-based content sharing among users. Built with modern web technologies, this application offers a seamless and intuitive user experience, allowing users to create, read, and interact with text posts in a clean and responsive interface.</p></td>
              </tr>
            </tbody>
          </table>
        </article>

        <article className="project">
          <table>
            <thead>
              <tr>
                <th colSpan='2'>Portfolio site</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className='scrShotData'>
                  <img src={web2} className='scrShot' alt='App img'/>
                </td>
              </tr>
              <tr>
                <td className='titleData'><label>Tech Stack:</label></td>
                <td><p>HTML, CSS ,REACT</p></td>
              </tr>
              <tr>
                <td className='titleData'><label>Git Link:</label></td>
                <td><a href='https://github.com/sanjainandhagopal/Portfolio.git'><FaGithub/></a></td>
              </tr>
              <tr>
                <td className='titleData'><label>Description:</label></td>
                <td><p>This is the website which you're viewing is a modern and visually appealing website. Designed with user experience in mind, the website features a responsive layout that adapts seamlessly across various devices and screen sizes.</p></td>
              </tr>
            </tbody>
          </table>
        </article>

        <article className="project">
          <table>
            <thead>
              <tr>
                <th colSpan='2'>Task Tracker</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className='scrShotData'>
                  <img src={web3} className='scrShot' alt='App img'/>
                </td>
              </tr>
              <tr>
                <td className='titleData'><label>Tech Stack:</label></td>
                <td><p>HTML, CSS ,JavaScript, PHP, MySQL</p></td>
              </tr>
              <tr>
                <td className='titleData'><label>Git Link:</label></td>
                <td><a href='https://github.com/sanjainandhagopal/Task-Tracker.git'><FaGithub/></a></td>
              </tr>
              <tr>
                <td className='titleData'><label>Description:</label></td>
                <td><p>This project is a sophisticated task management website designed to streamline and enhance the efficiency of organizational operations. The website facilitates the assignment, management, and tracking of tasks within an organization. It provides live updates to ensure that all members of the team stay informed about task statuses in real-time.</p></td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <hr/>

      <div className='category-title'>
        <label><span>A</span>pplication <span>P</span>rogramming <span>I</span>nterface</label>
      </div>
      <div className='category'>
        <article className="project">
          <table>
            <thead>
              <tr>
                <th colSpan='2'>HTTP webserver API</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className='scrShotData'>
                  <img src={api1} className='scrShot' alt='App img'/>
                </td>
              </tr>
              <tr>
                <td className='titleData'><label>Tech Stack:</label></td>
                <td><p>Express JS and Node JS</p></td>
              </tr>
              <tr>
                <td className='titleData'><label>Git Link:</label></td>
                <td><a href='https://github.com/sanjainandhagopal/HTTP-Webserver-Simulator-API.git'><FaGithub/></a></td>
              </tr>
              <tr>
                <td className='titleData'><label>Description:</label></td>
                <td><p>This project is designed to simulate the basic operations of a web server and to function as an API that provides employee data. It incorporates middleware to manage permissions and domain access, ensuring secure and controlled data flow.</p></td>
              </tr>
            </tbody>
          </table>
        </article>

        <article className="project">
          <table>
            <thead>
              <tr>
                <th colSpan='2'>Cloud meta-data extractor API</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className='scrShotData'>
                  <img src={api2} className='scrShot' alt='App img'/>
                </td>
              </tr>
              <tr>
                <td className='titleData'><label>Tech Stack:</label></td>
                <td><p>Python</p></td>
              </tr>
              <tr>
                <td className='titleData'><label>Git Link:</label></td>
                <td><a href='https://github.com/sanjainandhagopal/Cloud-Meta-data-Extractor-API.git'><FaGithub/></a></td>
              </tr>
              <tr>
                <td className='titleData'><label>Description:</label></td>
                <td><p>This project is a Python-based API designed to enhance cloud security by parsing metadata from various cloud platforms such as Azure, AWS, and others. It efficiently gathers and organizes large volumes of metadata into streamlined chunks, providing a robust foundation for further processing and analysis.</p></td>
              </tr>
            </tbody>
          </table>
        </article>

        <article className="project">
          <table>
            <thead>
              <tr>
                <th colSpan='2'>Cloud Data Sampler API</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className='scrShotData'>
                  <img src={api2} className='scrShot' alt='App img'/>
                </td>
              </tr>
              <tr>
                <td className='titleData'><label>Tech Stack:</label></td>
                <td><p>Python</p></td>
              </tr>
              <tr>
                <td className='titleData'><label>Git Link:</label></td>
                <td><a href='https://github.com/sanjainandhagopal/Cloud-Data-Sampler-API.git'><FaGithub/></a></td>
              </tr>
              <tr>
                <td className='titleData'><label>Description:</label></td>
                <td><p>This Python-based project is designed to efficiently extract sample data from larger-sized files to facilitate subsequent AI processing. Handling large datasets can be resource-intensive and time-consuming, making it essential to work with representative samples for initial analysis, testing, and model training.</p></td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <hr/>

      <div className='category-title'>
        <label><span>M</span>achine <span>L</span>earning <span>A</span>nd <span>O</span>bject <span>R</span>ecognition</label>
      </div>
      <div className='category'>
        <article className="project">
          <table>
            <thead>
              <tr>
                <th colSpan='2'>SAM (Smart Assist Model)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className='scrShotData'>
                  <img src={ml} className='scrShot' alt='App img'/>
                </td>
              </tr>
              <tr>
                <td className='titleData'><label>Tech Stack:</label></td>
                <td><p>Python</p></td>
              </tr>
              <tr>
                <td className='titleData'><label>Git Link:</label></td>
                <td><a href='https://github.com/sanjainandhagopal/SAM-Smart-Assist-Model.git'><FaGithub/></a></td>
              </tr>
              <tr>
                <td className='titleData'><label>Description:</label></td>
                <td><p>This project is a Python-based prototype integrating machine learning and computer vision to facilitate object recognition on portable devices. The model is designed to identify a wide range of objects, including non-living items and human faces. Additionally, it provides access to device peripherals, enhancing its functionality in various applications.</p></td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
  )
}

export default Works