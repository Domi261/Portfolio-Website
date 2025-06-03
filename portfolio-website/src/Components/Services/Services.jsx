import React from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import theme_pattern from '../../assets/theme_pattern.svg';

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="title-box">
        <h1>Dienstleistungen</h1>
        <img src={theme_pattern} alt="Dekoelement" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <p className="services-link">
              Mehr erfahren <span className="arrow">→</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
