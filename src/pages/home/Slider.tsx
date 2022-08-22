import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const IMAGE_HEIGHT = 500;

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <StaticImage src="../../images/slider/zakat2.png" height={IMAGE_HEIGHT} style={{width: '100%'}}  quality={100} alt="Закат на Покровке" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../../images/slider/musey.jpg" height={IMAGE_HEIGHT} style={{width: '100%'}}  quality={100} alt="Музей" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;