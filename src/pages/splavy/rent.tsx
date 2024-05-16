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

import ContactUs from './ContactUs';
import Glamping from './routes/Glamping';
import { HeadFC } from 'gatsby';
import HowToGetToUs from './HowToGetToUs';
import Layout from '../layout';
import OneDay from './routes/OneDay';
import SplavyFooter from './Footer';
import { StaticImage } from 'gatsby-plugin-image';
import ThreeDays from './routes/ThreeDays';
import TwoDays from './routes/TwoDays';

const rent = () => (
  <Layout>
    <div className={container} style={{ paddingTop: 0 }}>
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className={breadcrumb}>
          <li className={breadcrumbItem}><a href="/splavy/">Пронские сплавы</a></li>
          <li className={breadcrumbItem}>/</li>
          <li className={breadcrumbItem} aria-current="page">Прокат-Аренда с доставкой и трансфером</li>
        </ol>
      </nav>
    </div>


    <div className={mainBanner} >
      <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/index/6.jpg'} alt={'Пронские сплавы '} />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }}>
        <div className={container}>
          <div className={mainBannerText} style={{ backgroundColor: '#520A0C77' }}>
            <div className={`${mainBannerText1} headerFont`}><h1>Прокат-Аренда с доставкой и трансфером</h1></div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                <p className={mainBannerText3P}>
                  🌊 🚣‍♂️ Хочешь покорить водные просторы и насладиться красотами природы? Наша аренда байдарок предлагает идеальное решение для тебя!</p>
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className="container text">
        <h3 className={`${rowHeader} headerFont`}>Стоимость оборудования за день <br /> (прокат от 2-х дней)</h3>
        <div className={row}>
          <div>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🚣‍♂️ Оборудование для сплава</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Байдарка 2-х местная + вёсла - 1800 р.</p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Гермомешок - 200 р.</p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Спасательный жилет - 200 р.</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>⛺️ Оборудование для комфортного сна на природе</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Спальник - 300 р.</p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Самонадувающийся коврик - 400 р.</p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Палатка 4-х местная - 500 р.</p>

            <div style={{ fontSize: 12 }}>*Бронирование производится по 50% предоплате. <br /> **В случае отказа более чем за 7 дней до мероприятия, предоплата возвращается в полном объеме</div>

          </div>
        </div>
      </div>
    </div>


    <div className={container}>
      <h3 className={`${rowHeader} headerFont`}>Почему стоит выбрать нас?</h3>
      <div className={`${row} ${rowReversed}`}>
        <div><StaticImage width={800} className={rowImage} src={'../../images/Splav/rent/rent-1.jpeg'} alt={'Пронские сплавы - Почему стоит выбрать нас?'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>01</span>Доставка оборудования до старта</h4>
            <div>Мы доставим всё необходимого оборудования прямо на ваш маршрут и заберем с финиша. Стоимость доставки рассчитывается отдельно и зависит от удаленности маршрута от города Пронска</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>02</span>Трансфер</h4>
            <div>У нас есть возможность заказать трансфер до начала вашего маршрута и с финиша</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>03</span>Разнообразие маршрутов</h4>
            <div>Если вы хотите попробовать пройти по нашим маршрутам самостоятельно, на арендованном оборудовании, мы с радостью вам о них расскажем. У нас очень красивая природа и мы её ценим и бережём</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={`${row}`}>
        <div><StaticImage className={rowImage} width={800} src={'../../images/Splav/rent/rent-2.jpeg'} alt={'Пронские сплавы - повар и инструктор'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>04</span>Гибкий график</h4>
            <div>Наши байдарки доступны для аренды в любое время. Планируй свое приключение так, как вам удобно</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>05</span>Большое количество байдарок</h4>
            <div>У вас собирается большая компания? Да это же отлично! Мы можем предоставить байдарки для компаний до 48 человек! Нужно больше? - Звоните, мы найдем решение</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>06</span>Вы сами планируете свой поход</h4>
            <div>При Аренде, мы - ваш инструмент который надежно доставит вам необходимое оборудование, а вы сами организатор и имеете больше гибкости для планирования, мы лишь можем вам подсказать и дать советы. У нас так же имеются <a href="#routes">Организованные маршруты</a>, и если у вас нет опыта походов советуем начать с них - там мы все приготовим под ключ</div>
          </div>
        </div>
      </div>
    </div>
    <div className={container}>
      <h3 id="routes" className={`${rowHeader} headerFont`}>Также с нами можно пойти в полностью организованное нами путешествие</h3>
      <div className={row} style={{ alignItems: 'start' }}>
        <TwoDays />
        <ThreeDays />
      </div>
      <div className={row} style={{ alignItems: 'start' }}>
        <OneDay />
        <Glamping />
      </div>
    </div>
    <SplavyFooter scrollToRoutes />

  </Layout >
);

export default rent;

export const Head: HeadFC = () =>
  <>
    <title>Аренда с доставкой и трансфером</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/rent/" />
    <meta property="og:title" content="Аренда с доставкой и трансфером" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/three_day/CollageProny1.png" />
  </>