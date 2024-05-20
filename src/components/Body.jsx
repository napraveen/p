import React from 'react';
import myImg from '../images/myImg.jpg';
const Body = () => {
  return (
    <div>
      <div className="home-body">
        <div className="body-left">
          <div className="body-left-inside">
            {' '}
            <h1>
              Hello, <br></br>
              <span style={{ color: '#ff4f00' }}>I'm Praveen </span>
            </h1>
            <p>
              A passionate Full-Stack Developer with a strong foundation in core
              technologies and a keen interest in exploring emerging frameworks
            </p>
            <button className="get-started">Dive In</button>
          </div>
        </div>
        <div className="body-right">
          <div className="body-right-img-container">
            {' '}
            <img src={myImg} alt="dashboard" className="dashboard-img" />
          </div>
        </div>
        <div className="body-right"></div>
      </div>
    </div>
  );
};

export default Body;
