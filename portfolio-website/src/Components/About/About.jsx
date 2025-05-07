import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import sandro_laptop from '../../assets/sandro_laptop.png'

// Icons aus deinem assets-Ordner
import flexibility from '../../assets/flexibility.svg'
import solution from '../../assets/solution.svg'
import reliability from '../../assets/reliability.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>Über Verling Solutions</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
            <img src={sandro_laptop} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <img src={flexibility} alt="Flexibilität Icon" className="achievement-icon" />
          <p>Flexibel</p>
        </div>
        <hr />
        <div className="about-achievement">
          <img src={solution} alt="Lösungsorientierung Icon" className="achievement-icon" />
          <p>Lösungsorientiert</p>
        </div>
        <hr />
        <div className="about-achievement">
          <img src={reliability} alt="Zuverlässigkeit Icon" className="achievement-icon" />
          <p>Zuverlässig</p>
        </div>
      </div>
    </div>
  )
}

export default About
