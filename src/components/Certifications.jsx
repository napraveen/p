import React from 'react';

import ibmLogo from '../images/ibm.png';
import gfgLogo from '../images/gfgLogo.jpg';
import freecodecampLogo from '../images/freecodecampLogo.webp';
import { useEffect, useRef } from 'react';
const Features = ({ navigateToCertificates }) => {
  const certificatesRef = useRef(null);

  useEffect(() => {
    if (navigateToCertificates) {
      certificatesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [navigateToCertificates]);

  return (
    <div>
      <div className="home-features-container" ref={certificatesRef}>
        <h1>
          {' '}My
          <span style={{ color: '#ff4f00' }}> Certifications</span>
        </h1>
        <div className="home-features">
          <div className="certificate-container">
            <img
              src={ibmLogo}
              alt="Feature logo"
              className="certificate-logos"
            />
            <h4>
              <a href="google.com" target="blank">
                IBM Full-stack Developer Professional Certificate{' '}
              </a>
            </h4>
            <p>
              Identify strengths, capitalize on weaknesses, and chart a course
              for unparalleled success.
            </p>
          </div>
          <div className="certificate-container">
            <img
              src={gfgLogo}
              alt="Feature logo"
              className="certificate-logos"
            />
            <h4>
              <a href="google.com" target="blank">
                DSA self-paced Course{' '}
              </a>
            </h4>
            <p>
              Identify strengths, capitalize on weaknesses, and chart a course
              for unparalleled success.
            </p>
          </div>
          <div className="certificate-container">
            <img
              src={freecodecampLogo}
              alt="Feature logo"
              className="certificate-logos"
            />
            <h4>
              <a href="google.com" target="blank">
                Responsive Web Design
              </a>
            </h4>
            <p>
              Identify strengths, capitalize on weaknesses, and chart a course
              for unparalleled success.
            </p>
          </div>
        </div>
        <button className="features-view-more">View More</button>
      </div>
    </div>
  );
};

export default Features;
