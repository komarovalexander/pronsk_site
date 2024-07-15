import React, { CSSProperties } from 'react';
import {
  additionalFeature,
  additionalFeatureHeader,
  breadcrumb,
  breadcrumbItem,
  button,
  buttonMain,
  buttonRoutes,
  buttons,
  columnReverseMobile,
  container,
  darkBack,
  feature,
  featureHeader,
  featureNumber,
  feedback,
  feedbackItem,
  feedbackItemDoubleQuote,
  feedbackItemText,
  feedbackLink,
  feedbackPerson,
  feedbackPersonDate,
  feedbackPersonImage,
  feedbackPersonName,
  footer,
  footerLinks,
  grayBack,
  header,
  imageContainer,
  linearBack,
  logo,
  mainBanner,
  mainBannerText,
  mainBannerText1,
  mainBannerText2,
  mainBannerText2Br,
  mainBannerText3,
  mainBannerText3P,
  partner,
  partnerRow,
  row,
  rowHeader,
  rowImage,
  rowImageBigHeight,
  rowReversed,
  rowText,
  social,
  tinyRow,
  triangle,
  underlinedLink,
  video,
  videoContainer,
} from './splavy_detail.module.scss';
import { foodConfig, routesConfig } from '../../config';

import ContactUs from './ContactUs';
import { HeadFC } from 'gatsby';
import HowToGetToUs from './HowToGetToUs';
import Layout from '../layout';
import SplavyFooter from './Footer';
import { StaticImage } from 'gatsby-plugin-image';
import ThreeDays from './routes/ThreeDays';
import TwoDays from './routes/TwoDays';

const kerd = () => {

  return (
    <Layout>
      <div className={container} style={{ paddingTop: 0 }}>
        <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
          <ol className={breadcrumb}>
            <li className={breadcrumbItem}><a href="/splavy/">Пронские сплавы</a></li>
            <li className={breadcrumbItem}>/</li>
            <li className={breadcrumbItem} aria-current="page">{routesConfig.oneDay.title}</li>
          </ol>
        </nav>
      </div>

      <div className={mainBanner} >
        <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/Prony/1day.jpg'} alt={'Пронские сплавы '} />
        <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', backgroundColor: '#03040277' }}>
          <div className={container}>
            <div className={mainBannerText}>
              <div className={`${mainBannerText1} headerFont`}><h1>{routesConfig.oneDay.title}</h1></div>
              <div className={`${mainBannerText3} headerText`}>
                <div>
                  <p className={mainBannerText3P}>
                    {routesConfig.oneDay.description}
                    <br />
                  </p>
                </div>
              </div>
              <div className={`${mainBannerText3} headerText`}>
                <div>
                  Цена: {routesConfig.oneDay.price}
                  <br />
                  <div style={{ fontSize: 12 }}>*Бронирование производится по 50% предоплате. <br /> **В случае отказа более чем за 7 дней до мероприятия, предоплата возвращается в полном объеме</div>
                </div>
              </div>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>


      <div className={container} style={{
        paddingTop: 40,
        paddingBottom: 20
      }}>
        <h3 className={`${rowHeader} headerFont`}>🚣‍♂️ Примерная программа слава</h3>
        <div className={`${row} ${rowReversed}`}>
          <div><StaticImage className={rowImage} width={800} src={'../../images/Splav/1day/1day.jpeg'} alt={'Пронские сплавы - Сплав Кердь-Проня (2 Дня) - 1 день'} /></div>
          <div className={rowText}>
            10:00 – прибытие в р.п. Пронск, трансфер на место старта.<br />
            10:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
            11:00 - сплав на байдарках<br />
            13:00 - обед на стоянке, отдых<br />
            14:00 - сплав на байдарках<br />
            16:00 – прибытие на финиш<br />
          </div>
        </div>
      </div>


      <div className={container}>
        <h3 className={`${rowHeader} headerFont`}>В цену входит</h3>

        <div className={row}>
          <div>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🚣‍♂️ Оборудование для сплава</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Байдарки в собранном виде, гермомешки, спасжилеты, в т.ч. детские, дождевики</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Горячее питание</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>
              <b style={{ fontSize: '14px' }}>обед</b>: {foodConfig.lunch}
              <br />
              <i style={{ fontSize: '14px' }}>{foodConfig.note}</i>
            </p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🚍 Трансфер</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Трансфер от Пронска к месту старта и обратно</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🕵️‍♂️ Сопровождение в пути</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Наш гид будет с вами на всём маршруте</p>
          </div>
        </div>
      </div>


      <div className={container}>
        <div className="container text">
          <h3 className={`${rowHeader} headerFont`}>Что взять с собой</h3>
          <div className={row}>
            <div>
              <b style={{ fontSize: '18px', textAlign: "justify" }}>💧 Питьевая вода</b>
              <p style={{ fontSize: '18px', textAlign: "justify" }}>в удобной бутылке или нескольких маленьких</p>
              <b style={{ fontSize: '18px', textAlign: "justify" }}>🧢 Запасная одежда</b>
              <p style={{ fontSize: '18px', textAlign: "justify" }}>обувь в байдарку (сланцы, кроксы), головной убор, солнцезащитные очки</p>
            </div>
          </div>
        </div>
      </div>


      <div className={container}>
        <div className={videoContainer}>
          <iframe className={video} src="https://www.youtube.com/embed/2KkbJCEnjAA?si=LKBAoWAuyNqgXU8Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>
        </div>
      </div>

      <HowToGetToUs />

      <div className={container}>
        <h3 id="routes" className={`${rowHeader} headerFont`}>Также может быть интересно</h3>
        <div className={row} style={{ alignItems: 'start' }}>
          <ThreeDays />
          <TwoDays />
        </div>
      </div>
      <SplavyFooter style={{ marginTop: 80 }} />
    </Layout>
  )
};

export default kerd;

export const Head: HeadFC = () =>
  <>
    <title>Кердь и Проня дневной сплав на байдарках - Пронск, Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/kerd/" />
    <meta property="og:title" content={routesConfig.oneDay.title} />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/kerd/CollageKerd.png" />
  </>
