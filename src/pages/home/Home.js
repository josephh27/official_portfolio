import React from 'react';
import './Home.scss';
import myImage from '../../assets/images/owner.png';

const Home = () => {
  const skills = ["HTML", "CSS", "Javascript", "PHP", "C#",  "ReactJS", "Python", "SASS", "Git", "Bootstrap", 
  "NodeJS", "Flask", "MySQL", "Firebase", "Supabase", "Unity"]

  return (
    <div className="home-wrapper">
      <div className="inner-wrapper">
        <div className="sections-container">
            <div className="section first" id="first-section">
              <div className="hero-left-frame">
                <h1>
                  <span className="greet"></span>
                  <br />
                  <span>I am</span>
                  <br />
                  <span>Joseph Jason Buhain</span>                  
                </h1>
                <div className="hero-description">
                  <p><span>Aspiring Software Developer</span>|<span>PUP Computer Engineering Student</span>|<span>AWS Club Member</span></p>
                </div>
              </div>                
              <img src={myImage} alt="Joseph Jason Buhain" />
            </div>
            <div className="section second">
              <div className="inner-wrapper">
                <h1>Skills</h1>
                <div className="skills-container">
                  {
                    skills.map((skill, idx) => {
                      return <div key={idx}>{skill}</div>
                    })
                  }
                </div>
              </div>              
            </div>
            <div className="section third">
              
            </div>
            <div className="section fourth">
              
            </div>
            <div className="section fifth">
              
            </div>
            <div className="section sixth">
              
            </div>            
        </div>
      </div>

    </div>
  )
}

export default Home