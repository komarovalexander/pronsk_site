import Link from 'gatsby-link';
import { StaticImage } from 'gatsby-plugin-image';
import React, { CSSProperties } from 'react';
import { Carousel } from 'react-bootstrap';

import Layout from '../layout';

const captionStyle: CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#00000059'
};

const kerd1 = () => (
  <Layout>
    <div className="container text" style={{paddingTop: 50}}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Prony/14.png" className="rounded" alt="Пронские сплавы"/>
            <Carousel.Caption style={captionStyle}>
            <h1>ПРОНСКИЕ СПЛАВЫ</h1>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="container text" style={{paddingTop: 50}}>
      <h2 style={{textAlign: 'center'}}>Кердь</h2>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Это не большая по ширине речка, извилистая и неглубокая, а скорость течения вполне умеренная. Во время сплава вас будет окружать пение птиц и полеты бабочек. Данный маршрут (протяжённостью ≈ 18 км)  подходит всем желающим, включая новичков. Взрослый могут взять с собой детей, которым исполнилось уже 6 лет.</p>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 1-дневного сплава 2000 р., для детей до 18 лет скидка 1000р. Входит:<br />
      - байдарки в собранном виде, спасжилеты, в т.ч. детские</p>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 1-дневного сплава 2000 р., для детей до 18 лет скидка 1000р. Входит:</p>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 1-дневного сплава 2000 р., для детей до 18 лет скидка 1000р. Входит:</p>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 1-дневного сплава 2000 р., для детей до 18 лет скидка 1000р. Входит:</p>
      <i style={{fontSize: '18px', textAlign: "justify"}}>Бронирование мест по телефону 89521233539.</i>
      <i style={{fontSize: '18px', textAlign: "justify"}}>Бронирование мест по телефону 89521233539.</i>
    </div>
  


    <div className="container text" style={{paddingTop: 50}}>
      <div className="row">
        <div className="col">
          <div className="card">
            <StaticImage width={600}  src="../images/Splav/Kerd/1.png" className="card-img-top" alt="Кердь" style={{width: '100%', height: 'auto'}}/>
            <div className="card-body">
              <h5 className="card-title">1 День </h5>
              <p className="card-text">Цена 2000р., детям до 18 скидка 1000р.</p>
              <a href="#" className="btn btn-primary">Подробнее</a>
            </div>
          </div> 
        </div>
        <div className="col">
          <div className="card">
            <StaticImage width={600}  src="../images/Splav/Kerd/2.jpg" className="card-img-top" alt="Кердь" style={{width: '100%', height: 'auto'}}/>
            <div className="card-body">
              <h5 className="card-title">1 День / 1 Ночь</h5>
              <p className="card-text">Цена 3000р., детям до 18 скидка 1000р.</p>
              <a href="#" className="btn btn-primary">Подробнее</a>
            </div>
          </div> 
        </div>
        <div className="col">
          <div className="card">
            <StaticImage width={600}  src="../images/Splav/Prony/3-1.jpg" className="card-img-top" alt="Проня" style={{width: '100%', height: 'auto'}}/>
            <div className="card-body">
              <h5 className="card-title">2 Дня / 1 Ночь</h5>
              <p className="card-text">Цена 4000р., детям до 18 скидка 1000р.</p>
              <a href="#" className="btn btn-primary">Подробнее</a>
            </div>
          </div> 
        </div>
      </div>
    </div>

    <div className="container text" style={{paddingTop: 50, paddingBottom: 50}}>
      <Carousel>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Prony/C1.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/1.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Prony/4.jpg" className="rounded" alt="Проня"/>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </Layout>
);

export default kerd1;