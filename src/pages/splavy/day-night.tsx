import React from 'react';
import { foodConfig, routesConfig, splavyVideoMain } from '../../config';
import {
  breadcrumb,
  breadcrumbItem,
  container,
  grayBack,
  mainBanner,
  mainBannerText,
  mainBannerText1,
  mainBannerText3,
  mainBannerText3P,
  row,
  rowHeader,
  rowImage,
  rowReversed,
  rowText,
  videoContainer,
} from './splavy_detail.module.scss';

import ContactUs from './ContactUs';
import { HeadFC } from 'gatsby';
import HowToGetToUs from './HowToGetToUs';
import Layout from '../layout';
import SplavyFooter from './Footer';
import AccommodationOptions from './AccommodationOptions';
import { StaticImage } from 'gatsby-plugin-image';
import OneDay from './routes/OneDay';
import TwoDays from './routes/TwoDays';

const DayNightPage = () => (
  <Layout>
    <div className={container} style={{ paddingTop: 0 }}>
      <nav aria-label='breadcrumb' style={{ marginTop: 10 }}>
        <ol className={breadcrumb}>
          <li className={breadcrumbItem}>
            <a href='/splavy/'>Пронские сплавы</a>
          </li>
          <li className={breadcrumbItem}>/</li>
          <li className={breadcrumbItem} aria-current='page'>
            {routesConfig.dayNight.title}
          </li>
        </ol>
      </nav>
    </div>

    <div className={mainBanner}>
      <StaticImage
        style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }}
        src={'../../images/Splav/dayNight/dayNight3.JPG'}
        alt={'Пронские сплавы'}
      />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', backgroundColor: '#03040299' }}>
        <div className={container}>
          <div className={mainBannerText}>
            <div className={`${mainBannerText1} headerFont`}>
              <h1>{routesConfig.dayNight.title}</h1>
            </div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                <p className={mainBannerText3P}>{routesConfig.dayNight.description}</p>
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>

    <div className={grayBack} style={{ marginTop: 0 }}>
      <div className={container} style={{ paddingTop: 40, paddingBottom: 20 }}>
        <h3 className={`${rowHeader} headerFont`} style={{ marginBottom: 0 }}>
          Цена
        </h3>
        <div className={row} style={{ textAlign: 'center' }}>
          <div className={`${mainBannerText3} headerText`} style={{ width: '100%' }}>
            <div>
              {routesConfig.dayNight.price}
              <div style={{ fontSize: 12 }}>
                *Бронирование производится по 50% предоплате. <br /> **В случае отказа более чем за 7 дней до мероприятия, предоплата
                возвращается в полном объеме
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={container} style={{ paddingTop: 40, paddingBottom: 20 }}>
      <h3 className={`${rowHeader} headerFont`}>🚣‍♂️ Примерная программа</h3>
      <div className={`${row} ${rowReversed}`}>
        <div>
          <StaticImage
            className={rowImage}
            width={800}
            src={'../../images/Splav/dayNight/dayNight.JPG'}
            alt={'Пронские сплавы — день-ночь, день 1'}
          />
        </div>
        <div className={rowText}>
          <i style={{ fontSize: '18px', textAlign: 'justify' }}>День 1</i>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            10:00 – встреча в Глемпинге «Берег» в Пронске, подготовка к сплаву
            <br />
            10:30 – трансфер до места старта
            <br />
            11:00 – инструктаж и начало сплава на байдарках
            <br />
            13:00 – обед на стоянке, отдых
            <br />
            14:00 – сплав на байдарках
            <br />
            16:00 – прибытие в Глемпинг «Берег», свободное время, купание на пляже
            <br />
            18:00 – поход на гору с видами на реку и Пронские холмы
            <br />
            19:00 – ужин
            <br />
            20:30 – посиделки у костра
          </p>
          <i style={{ fontSize: '18px', textAlign: 'justify' }}>День 2</i>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            9:00 – завтрак
            <br />
            Самые активные, могут прогуляться по окрестностям или просто позагорать на пляже глемпинга
          </p>
        </div>
      </div>
    </div>

    <div className={grayBack}>
      <div className={container}>
        <h3 className={`${rowHeader} headerFont`}>В цену входит</h3>
        <div className={row}>
          <div>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>🚣‍♂️ Оборудование для сплава</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              Байдарки в собранном виде, гермомешки, спасжилеты, в т.ч. детские, дождевики
            </p>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>⛺️ Ночёвка в глэмпинге</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              Палатка, мягкие коврики, спальник, подготовленное место для отдыха. На выбор —{' '}
              <a href='#night'>другие варианты размещения</a> за дополнительную плату
            </p>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>🍲 Горячее питание</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              <b style={{ fontSize: '14px' }}>обед</b>: {foodConfig.lunch}
              <br />
              <b style={{ fontSize: '14px' }}>ужин</b>: {foodConfig.dinner}
              <br />
              <b style={{ fontSize: '14px' }}>завтрак</b>: {foodConfig.breakFast}
              <br />
              <i style={{ fontSize: '14px' }}>{foodConfig.base}</i>
            </p>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>🚍 Трансфер</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>Трансфер от Пронска к месту старта</p>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>🕵️‍♂️ Сопровождение в пути</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>Наш гид будет с вами на протяжении сплава</p>
          </div>
        </div>
      </div>
    </div>

    <AccommodationOptions />

    <div className={container}>
      <h3 className={`${rowHeader} headerFont`}>Что взять с собой</h3>
      <div className={row}>
        <div>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>🚿 Средства личной гигиены</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>полотенце, мыло, зубная паста и щётка</p>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>💧 Питьевая вода</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>в удобной бутылке, не менее 1,5 л на человека</p>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>👕 Запасная одежда</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            тёплый свитер, обувь в байдарку (сланцы, кроксы), обувь на стоянку, головной убор, солнцезащитные очки
          </p>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className={videoContainer}>{splavyVideoMain}</div>
    </div>

    <HowToGetToUs />

    <div className={container}>
      <h3 id='routes' className={`${rowHeader} headerFont`}>
        Также может быть интересно
      </h3>
      <div className={row} style={{ alignItems: 'start' }}>
        <OneDay />
        <TwoDays />
      </div>
    </div>
    <SplavyFooter style={{ marginTop: 80 }} />
  </Layout>
);

export default DayNightPage;

export const Head: HeadFC = () => (
  <>
    <title>{routesConfig.dayNight.title}, сплавы на байдарках — Пронск, Рязанская область</title>
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://vpronske.ru/splavy/day-night/' />
    <meta property='og:title' content={routesConfig.dayNight.title} />
    <meta property='og:description' content='Сплав на байдарках с ночёвкой в глэмпинге и завтраком — Пронск, Рязанская область' />
    <meta property='og:image' content='https://vpronske.ru/splavy/pronya/CollageProny1.png' />
  </>
);
