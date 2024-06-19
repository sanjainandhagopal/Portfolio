import '../Styles/Profile.css';
import profilePic from '../Resources/prof3.png';
import Education from './ProfileComponents/Education';
import Skills from './ProfileComponents/Skills';
import Language from './ProfileComponents/Language';

const Profile = () => {
  return (
    <div className='profile-bg'>
      <table>
        <tr className='prof-top'>
          <td className='picData'>
            <img src={profilePic} className='profile-pic' alt="Profile pic"/>
            <label>Sanjai <span>N</span></label>
          </td>
          <td>
            <h3>Skills:</h3>
            <Skills/>
          </td>
          <td>
            <h3>Languages:</h3>
            <Language/>
          </td>
        </tr>
        <Education/>
      </table>
    </div>
  );
}

export default Profile;
