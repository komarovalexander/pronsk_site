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
import { HeadFC } from 'gatsby';
import HowToGetToUs from './HowToGetToUs';
import Layout from '../layout';
import OneDay from './routes/OneDay';
import SplavyFooter from './Footer';
import { StaticImage } from 'gatsby-plugin-image';
import ThreeDays from './routes/ThreeDays';
import TwoDays from './routes/TwoDays';

const company = () => (
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
      <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/Prony/company.jpg'} alt={'Пронские сплавы '} />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', backgroundColor: 'rgba(3, 4, 2, 0.6)' }}>
        <div className={container}>
          <div className={mainBannerText} style={{ marginTop: 30 }}>
            <div className={`${mainBannerText1} headerFont`}><h1>Организация корпоратива - сплав на байдарках</h1></div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                <div>
                  <p className={mainBannerText3P}>
                    🌊 🚣‍♂️ Организуй незабываемый корпоративный сплав на байдарках с нами! <br />Хотите подарить своей команде незабываемый отдых и укрепить ее дух единства? Приглашаем вас на наши корпоративные сплавы на байдарках,
                    где каждый участник получит заряд энергии, вдохновения и новых впечатлений!</p>
                </div>
                <div style={{ fontSize: 14 }}>* Цена договорная, для больших компаний скидки</div>
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className="container text">
        <h4 style={{ textAlign: 'center' }}>🌟 Почему стоит выбрать сплав на байдарках для корпоратива?</h4>
        <div className={row}>
          <div>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>✅ Наше мероприятие на байдарках способствует
              укреплению взаимоотношений между сотрудниками и формированию единой команды.
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>🏕️ Отрыв от рутины: Уйдите от повседневных дел и окунитесь в атмосферу приключения на природе.
              Это позволит вашей команде отвлечься от рабочих забот и наслаждаясь природной красотой пообщаться в неформальной обстановке.
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Мы готовим на природе для больших компаний, наши фирменные горячие блюда не оставят никого равнодушным.
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>✨ Организация "под ключ": Мы позаботимся обо всех деталях вашего мероприятия - от трансфера до досуга на берегу.
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩 Подходит для всех: Независимо от уровня подготовки и возраста участников, путешествия с "Пронскими сплавами" подойдут каждому.
              Мы создадим программу, которая удовлетворит все потребности и пожелания вашей команды.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className={videoContainer}>
        <iframe className={video} src="https://www.youtube.com/embed/pHLYDAfRuvQ?si=ZL6mJSr74jPwxM7c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowFullScreen></iframe>
      </div>
    </div>


    <div className={container}>
      <h3 id="routes" className={`${rowHeader} headerFont`}>Также у нас имеются регулярные групповые походы:</h3>
      <div className={row} style={{ alignItems: 'start' }}>
        <OneDay />
        <TwoDays />
        <ThreeDays />
      </div>
    </div>
    <SplavyFooter scrollToRoutes />
  </Layout>
);

export default company;

export const Head: HeadFC = () =>
  <>
    <title>Прокат-Аренда с доставкой и трансфером - Пронск, Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/company/" />
    <meta property="og:title" content="Организация корпоративов - Пронские сплавы" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/three_day/CollageProny1.png" />
  </>