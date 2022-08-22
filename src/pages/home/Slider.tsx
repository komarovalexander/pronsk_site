import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <StaticImage src="../../images/slider/zakat2.png" style={{width: '100%'}} alt="Закат на Покровке" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;