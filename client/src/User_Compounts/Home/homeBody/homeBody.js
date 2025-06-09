import React from "react";
import "./homeBody.css";
import image1 from "../../UserImages/aslam.jpg";
import { Link } from "react-router-dom";

function HomeBody() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-inner">
          <div className="text">
            <div className="text-one">Hello,</div>
            <div className="text-two">I'm Aslam Youseph</div>
            <div className="text-three">
              <span className="typing-text">MERN Stack Developer</span>
            </div>
            <div className="text-four">From Kerala</div>
            <div className="home-buttons">
              <Link to="/contact" className="btn hire-btn">
                Hire Me
              </Link>
              {/* Download a file  */}
              <a
                href="/Resume/ASLAMYOUSEPH-Resume.pdf"
                download
                className="btn resume-btn"
              >
                Download Resume
              </a>
            </div>
          </div>
          <img className="homePage-img" src={image1} alt="Aslam" />
        </div>
      </div>
    </section>
  );
}

export default HomeBody;
