import React, { CSSProperties } from 'react';
import { foodConfig, routesConfig } from '../../config';
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

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import ContactUs from '../../components/splavy/ContactUs';
import SplavyFooter from '../../components/splavy/Footer';
import HowToGetToUs from '../../components/splavy/HowToGetToUs';
import AccommodationOptions from '../../components/splavy/AccommodationOptions';
import OneDay from '../../components/splavy/routes/OneDay';
import DayNight from '../../components/splavy/routes/DayNight';
import CompanyItem from '../../components/splavy/routes/CompanyItem';

const pronya = () => (
  <Layout>
    <div
      className={container}
      style={{ paddingTop: 0 }}
    >
      <nav
        aria-label='breadcrumb'
        style={{ marginTop: 10 }}
      >
        <ol className={breadcrumb}>
          <li className={breadcrumbItem}>
            <a href='/splavy/'>Пронские сплавы</a>
          </li>
          <li className={breadcrumbItem}>/</li>
          <li
            className={breadcrumbItem}
            aria-current='page'
          >
            {routesConfig.twoDays.title}
          </li>
        </ol>
      </nav>
    </div>

    <div className={mainBanner}>
      <StaticImage
        style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }}
        src={'../../images/Splav/index/4.png'}
        alt={'Пронские сплавы '}
      />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', backgroundColor: 'rgba(3, 4, 2, 0.6)' }}>
        <div className={container}>
          <div className={mainBannerText}>
            <div className={`${mainBannerText1} headerFont`}>
              <h1>{routesConfig.twoDays.title}</h1>
            </div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                <p className={mainBannerText3P}>{routesConfig.twoDays.description}</p>
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>

    <div
      className={grayBack}
      style={{ marginTop: 0 }}
    >
      <div
        className={container}
        style={{
          paddingTop: 40,
          paddingBottom: 20,
        }}
      >
        <h2
          className={`${rowHeader} headerFont`}
          style={{ marginBottom: 0 }}
        >
          Цена
        </h2>
        <div
          className={`${row}`}
          style={{ textAlign: 'center' }}
        >
          <div
            className={`${mainBannerText3} headerText`}
            style={{ width: '100%' }}
          >
            <div>
              {routesConfig.twoDays.price}
              <div style={{ fontSize: 12 }}>
                *Бронирование производится по 50% предоплате. <br /> **В случае отказа более чем за 7 дней до мероприятия, предоплата
                возвращается в полном объеме
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={container}
      style={{
        paddingTop: 40,
        paddingBottom: 20,
      }}
    >
      <h2 className={`${rowHeader} headerFont`}>🚣‍♂️ Примерная программа сплава</h2>
      <div className={`${row} ${rowReversed}`}>
        <div>
          <StaticImage
            className={rowImage}
            width={800}
            src={'../../images/Splav/index/8.jpg'}
            alt={'Пронские сплавы - Сплав Кердь-Проня (2 Дня) - 1 день'}
          />
        </div>
        <div className={rowText}>
          <i style={{ fontSize: '18px', textAlign: 'justify' }}>День 1</i>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            10:00 – встреча в Глемпинге "Берег" в Пронске, подготовка к сплаву
            <br />
            10:30 -  трансфер до места старта
            <br />
            11:00 - инструктаж и начало сплава на байдарках
            <br />
            13:00 - обед на стоянке, отдых
            <br />
            14:00 - сплав на байдарках
            <br />
            16:00 – прибытие в Глемпинг "Берег", свободное время, купание на пляже, отдых
            <br />
            18:00 - поход на гору с видами на реку, монастырь и Пронские холмы
            <br />
            19:00 - ужин 
            <br />
            20:30 - душевные посиделки у костра с музыкантом
            <br />
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className={`${row}`}>
        <div>
          <StaticImage
            className={rowImage}
            width={800}
            src={'../../images/Splav/2days/pronya-2-3.JPG'}
            alt={'Пронские сплавы - Сплав Кердь-Проня (2 Дня) - 2 день'}
          />
        </div>
        <div className={rowText}>
          <i style={{ fontSize: '18px', textAlign: 'justify' }}>День 2</i>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            08:30 – подъем, завтрак
            <br />
            10:00 - сплав на байдарках
            <br />
            11:00 - стоянка, посещение конной фермы "Юлианна", контактный зоопарк, дегустация молока
            <br />
            12:00 - сплав на байдарках
            <br />
            13:30 - обед на финише, конец путешествия
            <br />
          </p>
        </div>
      </div>
    </div>

    <div className={grayBack}>
      <div className={container}>
        <h2 className={`${rowHeader} headerFont`}>В цену входит</h2>
        <div className={row}>
          <div>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>🚣‍♂️ Оборудование для сплава</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              Байдарки в собранном виде, гермомешки, спасжилеты, в т.ч. детские, дождевики
            </p>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>⛺️ Оборудование для комфортного сна на природе</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              Палатки, мягкие коврики в палатку, спальники, подготовленное для отдыха и ночлега место. На выбор у нас есть также{' '}
              <a href='#night'>другие варианты ночевки</a>
            </p>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>🍲 Трехразовое горячее питание</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              <b style={{ fontSize: '14px' }}>обед (день 1)</b>: {foodConfig.lunch}
              <br />
              <b style={{ fontSize: '14px' }}>ужин</b>: {foodConfig.dinner}
              <br />
              <b style={{ fontSize: '14px' }}>завтрак</b>: {foodConfig.breakFast}
              <br />
              <b style={{ fontSize: '14px' }}>обед (день 2)</b>: {foodConfig.lunch2}
              <br />
              <i style={{ fontSize: '14px' }}>{foodConfig.base}</i>
              <br />
              <i style={{ fontSize: '14px' }}>{foodConfig.note}</i>
            </p>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>🚍 Трансфер</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>Трансфер от Пронска к месту старта</p>
            <b style={{ fontSize: '18px', textAlign: 'justify' }}>🕵️‍♂️ Сопровождение в пути</b>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>Наш гид будет с вами на всём маршруте</p>
          </div>
        </div>
      </div>

      <AccommodationOptions />

      <div className={container}>
        <div className='container text'>
          <h2
            className={`${rowHeader} headerFont`}
            id='take_it'
          >
            Что взять с собой
          </h2>
          <div className={row}>
            <div>
              <b style={{ fontSize: '18px', textAlign: 'justify' }}>🚿 Средства личной гигиены</b>
              <p style={{ fontSize: '18px', textAlign: 'justify' }}>полотенце, мыло, зубная паста и щётка, туалетная бумага и т.д.</p>
              <b style={{ fontSize: '18px', textAlign: 'justify' }}>💧 Питьевая вода</b>
              <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                в удобной бутылке или нескольких маленьких, суммарно не менее 1,5 литров на человека
              </p>
              <b style={{ fontSize: '18px', textAlign: 'justify' }}>👕 Запасная одежда</b>
              <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                теплый свитер, теплые носки, резиновые сапоги, обувь в байдарку (сланцы, кроксы), обувь на стоянку (кроссовки, кеды), головной убор,
                солнцезащитные очки, ветровка, шорты, спортивные штаны
              </p>
              <b style={{ fontSize: '18px', textAlign: 'justify' }}>☀️ Крем от загара </b>
              <p style={{ fontSize: '18px', textAlign: 'justify' }}>пригодится вам, если вы склонны к обгоранию кожи на солнце</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <h2 className={`${rowHeader} headerFont`}>Кому идеально подходит маршрут?</h2>
      <div className={row}>
        <div>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>👨‍👩‍👧‍👦 Семейным</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            Байдарки безопасные и очень устойчивые. На речке Кердь хорошее течение есть перекаты но нет опасных порогов - это значит что
            путешествие будет безопасным и не скучным. 2 дня сплава (1 ночь в палатке) - идеальное количество дней для знакомства семьи с
            нашим видом туризма
          </p>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>🤟 Компаниям друзей</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            Вместе побыть на природе, расслабиться и не думать о мелочах, наслаждаясь общением друг с другом
          </p>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>🛶 Ищущим новых интересных знакомств и впечатлений</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            Это же интересно оказываться в нестандартной для себя ситуации и знакомить с новыми людьми, не правда ли?
          </p>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>🎣 Рыболовам</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>На остановках можно рыбачить, вечером и на рассвете клёв хороший</p>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>👨‍💼 Коллегам</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            Провести время совместно проходя маршрут, пообщаться в максимально неформальной обстановке, за два дня сплава многое можно
            обсудить
          </p>
          <b style={{ fontSize: '18px', textAlign: 'justify' }}>🙂 На самом деле всем кто любит приключения</b>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>Откройте красоту Пронского района, Рязанской области вместе с нами</p>
        </div>
      </div>
    </div>

    <HowToGetToUs />

    <div className={container}>
      <h2
        id='routes'
        className={`${rowHeader} headerFont`}
      >
        Также может быть интересно
      </h2>
      <div
        className={row}
        style={{ alignItems: 'start' }}
      >
        <OneDay />
        <DayNight />
        <CompanyItem />
      </div>
    </div>
    <SplavyFooter style={{ marginTop: 80 }} />
  </Layout>
);

export default pronya;

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='Двухдневный сплав по Керди и Проне — Пронские сплавы'
    description='Двухдневный сплав на байдарках с ночёвкой в глэмпинге, питанием, оборудованием, инструкторами и трансфером. Маршрут по рекам Кердь и Проня в Пронском районе.'
    pathname={location.pathname}
    image='/images/splavy-cover.jpg'
    imageAlt='Двухдневный сплав на байдарках по рекам Кердь и Проня'
  />
);
