import {
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
  routesRow,
  rowText,
  social,
  tinyRow,
  triangle,
  video,
  videoContainer,
} from './splavy.module.scss';

import ContactUs from '../components/splavy/ContactUs';
import { HeadFC } from 'gatsby';
import HowToGetToUs from '../components/splavy/HowToGetToUs';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import OneDay from '../components/splavy/routes/OneDay';
import DayNight from '../components/splavy/routes/DayNight';
import CompanyItem from '../components/splavy/routes/CompanyItem';
import React from 'react';
import SplavyFooter from '../components/splavy/Footer';
import { StaticImage } from 'gatsby-plugin-image';
import TwoDays from '../components/splavy/routes/TwoDays';
import feedbackDoubleQuoteImage from '../images/Splav/index/15.svg';
import logoImage from '../images/Splav/logo.png';
import { scrollToId } from '../utils';
import vk from '../images/vk.svg';
import { splavyVideoMain } from '../config';

const splavy = () => (
  <Layout>
    <div className={mainBanner} >
      <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../images/Splav/index/banner.png'} alt={'Пронские сплавы '} />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }}>
        <div className={header} >
          <img src={logoImage} className={logo} alt="Пронские сплавы логотип" />
        </div>

        <div className={mainBannerText}>
          <div className={`${mainBannerText1} headerFont`}>Погрузитесь</div>
          <h1 className={`${mainBannerText2} h1Font`} style={{ margin: 0 }}>в мир<br className={mainBannerText2Br} /> водных<br /> приключений</h1>
          <div className={`${mainBannerText3} headerText`}>
            <p className={mainBannerText3P}><strong>Сплавы на байдарках в Пронске и Пронском районе</strong> — идеальный способ сбежать от городской суеты и ощутить вдохновение природы. Добро пожаловать в мир наших захватывающих путешествий по чистым рекам Рязанской области! 🌿</p>
          </div>

          <ContactUs />
        </div>
      </div>
    </div>

    <div className={container}>
      <h2 id="routes" className={`${rowHeader} headerFont`}>Наши маршруты</h2>
      <div className={routesRow}>
        <OneDay />
        <DayNight />
        <TwoDays />
        <CompanyItem />
      </div>
    </div>


    <div className={container}>
      <h2 className={`${rowHeader} headerFont`}>Наши преимущества</h2>
      <div className={`${row} ${rowReversed}`}>
        <div><StaticImage width={800} className={rowImage} src={'../images/Splav/index/3.jpeg'} alt={'Пронские сплавы - Наши преимущества'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <h3 className={featureHeader}>
              <span className={featureNumber}>01</span>Для всей семьи</h3>
            <div>Наши походы подходят для любого уровня подготовки. Пригласите семью и друзей. Для детей у нас большие скидки!</div>
          </div>
          <div className={feature}>
            <h3 className={featureHeader}>
              <span className={featureNumber}>02</span>Всё включено</h3>
            <div>Начиная от трансфера и предоставления необходимого оборудования для похода, заканчивая вкусным питанием на маршруте. Ваш отдых в надежных руках - вам только нужно расслабиться и получать удовольствие. Наши байдарки, местного Рязанского производства - удобные надежные и безопасные</div>
          </div>
          <div className={feature}>
            <h3 className={featureHeader}>
              <span className={featureNumber}>03</span>Мы живем приключениями</h3>
            <div>Наши гиды знают каждый поворот реки, они сделают все для вашего безопасного и захватывающего путешествия</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={`${row}`}>
        <div><StaticImage className={rowImage} width={800} src={'../images/Splav/index/2.jpeg'} alt={'Пронские сплавы - повар и инструктор'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <h3 className={featureHeader}>
              <span className={featureNumber}>04</span>Разнообразные маршруты</h3>
            <div>Хотите ли вы удалиться от цивилизации на несколько дней? Или хотите полностью комфортный отдых с душем и ночевкой в бунгало с двухспальной кроватью? - у нас есть маршрут для каждого</div>
          </div>
          <div className={feature}>
            <h3 className={featureHeader}>
              <span className={featureNumber}>05</span>Вкусное питание</h3>
            <div>Наш походный повар готовит для вас вкусные блюда прямо на берегу, добавляя вкус к вашему приключению</div>
          </div>
          <div className={feature}>
            <h3 className={featureHeader}>
              <span className={featureNumber}>06</span>Ежедневные походы</h3>
            <div>Предлагаем сплавы каждый день, в том числе и в будни</div>
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className={videoContainer}>
        {splavyVideoMain}
      </div>
    </div>




    <div className={container}>
      <h2 className={`${rowHeader} headerFont`} style={{ marginBottom: 0 }}>Наши партнёры</h2>
      <div className={`${row} ${partnerRow}`}>

        <div className={feature}>
          <a href="https://pronyaglamping.ru/" target="_blank"><StaticImage className={partner} src={'../images/Splav/index/10.png'} alt={'Пронские сплавы - глэмпинг берег'} /></a>
        </div>

        <div className={feature}>
          <a href="https://kayakstart.ru/" target="_blank"><StaticImage className={partner} src={'../images/Splav/index/11.png'} alt={'Пронские сплавы - байдарки старт'} /></a>
        </div>

        <div className={feature}>
          <a href="https://vk.com/pronsky_meat_shop" target="_blank"><StaticImage className={partner} src={'../images/Splav/index/12.png'} alt={'Пронские сплавы - Пронский мясной цех'} /></a>
        </div>

        <div className={feature}>
          <a href="https://vk.com/equestrian_club_julian" target="_blank"><StaticImage className={partner} src={'../images/Splav/index/13.png'} alt={'Пронские сплавы - Конно-спортивный клуб Юлианна'} /></a>
        </div>
      </div>
    </div>

    <HowToGetToUs />

    <div>
      <div className={`${container} ${imageContainer}`}>

        <StaticImage width={1400} style={{ position: 'absolute', zIndex: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom' }} src={'../images/Splav/index/feedback.jpg'} alt={'Пронские сплавы - отзывы'} />
        <div className={`${row} ${feedback}`} style={{ position: 'relative' }}>
          <div className={feedbackItem}>
            <div className={feedbackItemText}>
              <img src={feedbackDoubleQuoteImage} className={feedbackItemDoubleQuote} />
              <p>Август' 23 кто бы мог подумать... но да! Сплав на байдарках в хорошей компании и при хорошей организации - это живописно, трудно, но весело, очень эмоционально и даже вкусно. Всем рекомедуем Пронские сплавы</p>
              <div className={triangle}></div>
            </div>
            <div className={feedbackPerson}>
              <StaticImage width={56} height={56} src={'../images/Splav/index/17.jpg'} className={feedbackPersonImage} alt='Света Варзина' />

              <div style={{ position: 'relative' }}>
                <div className={feedbackPersonName}>Света Варзина</div>
                <div className={feedbackPersonDate}>9 авг 2023</div>
                <a href="https://vk.com/wall138077588_960" target='_blank' className={feedbackLink}>ссылка на отзыв</a>
              </div>
            </div>
          </div>

          <div className={feedbackItem}>
            <div className={feedbackItemText}>
              <img src={feedbackDoubleQuoteImage} className={feedbackItemDoubleQuote} />
              <p>Сплав 29.07.23 по рекам Пронского района Кердь & Проня. Прошли около 18 км. <br />
                Спасибо <a href="https://vk.com/travelpersona" target='_blank'>Роман Комаров</a>, который контролировал наш процесс сплава ).<br />
                Рекомендую,всем!</p>

              <div className={triangle}></div>
            </div>
            <div className={feedbackPerson}>
              <StaticImage width={56} height={56} src={'../images/Splav/index/16.jpeg'} className={feedbackPersonImage} alt='Ольга Голубева' />
              <div style={{ position: 'relative' }}>
                <div className={feedbackPersonName}>Ольга Голубева</div>
                <div className={feedbackPersonDate}>2 авг 2023</div>
                <a href="https://vk.com/wall4302350_800" target='_blank' className={feedbackLink}>ссылка на отзыв</a>
              </div>
            </div>
          </div>

          <div className={feedbackItem}>
            <div className={feedbackItemText}>
              <img src={feedbackDoubleQuoteImage} className={feedbackItemDoubleQuote} />
              <p>Сплав по реке Кердь в Рязанской области вместе с Пронскими сплавами -это было просто здорово. Нам с Геной очень понравился этот вид активного отдыха, а если ещё и организаторы классные - отдых становится незабываемым!</p>
              <div className={triangle}></div>
            </div>
            <div className={feedbackPerson}>
              <StaticImage width={56} height={56} src={'../images/Splav/index/18.jpeg'} className={feedbackPersonImage} alt='' />
              <div style={{ position: 'relative' }}>
                <div className={feedbackPersonName}>Наталья Слепцова</div>
                <div className={feedbackPersonDate}>13 авг 2023</div>
                <a href="https://vk.com/wall299994005_145" target='_blank' className={feedbackLink}>ссылка на отзыв</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={darkBack}>
        <div className={container} style={{
          paddingTop: 40,
          paddingBottom: 20
        }}>
          <div className={`${rowHeader} headerFont`} style={{ marginBottom: 0, color: 'white' }}>Узнай о нас больше</div>
          <div className={row} style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className={buttons}>
              <a className={buttonRoutes} href='https://vk.com/pronskie_splavy' target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' />Мы ВКонтакте</a>
            </div>
          </div>
        </div>
      </div>
      <SplavyFooter scrollToRoutes />
    </div >
  </Layout >
);

export default splavy;

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='Пронские сплавы на байдарках — Пронск, Рязанская область'
    description='Однодневные и двухдневные сплавы на байдарках по рекам Кердь и Проня. Инструкторы, оборудование, питание, трансфер и ночёвка в глэмпинге.'
    pathname={location.pathname}
    image='/images/splavy-cover.jpg'
    imageAlt='Сплавы на байдарках по рекам Пронского района'
  />
);