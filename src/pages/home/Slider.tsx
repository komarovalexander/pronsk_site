import { StaticImage } from 'gatsby-plugin-image';
import React, { CSSProperties } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const IMAGE_HEIGHT = 500;
const imageStyle: CSSProperties = {
  objectFit: 'cover',
  margin: 'auto'
};

const itemStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center'
};

const captionStyle: CSSProperties = {
  left: 'auto',
  right: 'auto',
  padding: '10px 30px',
  backgroundColor: '#00000059'
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
        <div style={itemStyle}>
          <StaticImage src="../../images/slider/zakat2.png" height={IMAGE_HEIGHT} style={imageStyle} quality={100} alt="Закат на Покровке" />
          <Carousel.Caption style={captionStyle}>
            <h4>Добро пожаловать в Пронск</h4>
            <p>Город с красивейшей природой, богатой историей, и приветливыми людьми</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <StaticImage src="../../images/slider/musey.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Музей" />
          <Carousel.Caption style={captionStyle}>
            <h4>Пронский краеведческий музей</h4>
            <p>Картины. Старинная утварь. Интересные экскурсии. Постоянные и временные выставки</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <StaticImage src="../../images/slider/церковь.png" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption style={captionStyle}>
            <h4>Увидьте первозданную историю</h4>
            <p>Около 15 столетиями нетронутых Храмов можно найти в разных локациях района. Прошлое ближе чем кажется</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <StaticImage src="../../images/slider/памятник.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption style={captionStyle}>
            <h4>Никто не забыт</h4>
            <p>Память, прошедшая через года, показана в виде величественных монументов в каждом поселении</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <StaticImage src="../../images/slider/Рыбалка2.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption style={captionStyle}>
            <h4>Отдых на природе</h4>
            <p>Рыбалка, палатки, купание в чистых реках, посиделки у костра</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <StaticImage src="../../images/slider/монастырь.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption style={captionStyle}>
            <h4>Спасо-Преображенский Пронский монастырь</h4>
            <p>Место силы земли Пронской, где всегда рады любым гостям</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <StaticImage src="../../images/slider/артисты.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption style={captionStyle}>
            <h4>Лучшие артисты</h4>
            <p>Люди - главное достояние Пронского района</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <StaticImage src="../../images/slider/танцы.jpg" height={IMAGE_HEIGHT} style={imageStyle}  quality={100} alt="Елшино" />
          <Carousel.Caption style={captionStyle}>
            <h4>Почувствуйте Русскую душу</h4>
            <p>Народные коллективы и опытные наставники сохраняют Русскую культуру для следующих поколений</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;