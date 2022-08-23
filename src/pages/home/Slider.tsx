import { StaticImage } from 'gatsby-plugin-image';
import React, { CSSProperties } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const IMAGE_HEIGHT = 500;
const imageStyle: CSSProperties = {
  objectFit: 'cover',
  margin: 'auto'
};

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [{
  src: 'zakat2.png',
  alt: 'Закат на Покровке'
}]

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{display: 'flex'}}>
          <StaticImage src="../../images/slider/zakat2.png" height={IMAGE_HEIGHT} style={imageStyle} quality={100} alt="Закат на Покровке" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: 'flex'}}>
          <StaticImage src="../../images/slider/musey.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Музей" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: 'flex'}}>
          <StaticImage src="../../images/slider/церковь.png" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: 'flex'}}>
          <StaticImage src="../../images/slider/памятник.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: 'flex'}}>
          <StaticImage src="../../images/slider/Рыбалка2.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: 'flex'}}>
          <StaticImage src="../../images/slider/монастырь.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: 'flex'}}>
          <StaticImage src="../../images/slider/артисты.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: 'flex'}}>
          <StaticImage src="../../images/slider/танцы.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;