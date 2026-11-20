import React, { CSSProperties } from 'react';
import {
  breadcrumb,
  breadcrumbItem,
  container,
  mainBanner,
  mainBannerText,
  mainBannerText1,
  mainBannerText3,
  mainBannerText3P,
  row,
  rowHeader,
  video,
  videoContainer,
} from './splavy_detail.module.scss';

import ContactUs from '../../components/splavy/ContactUs';
import { HeadFC } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import OneDay from '../../components/splavy/routes/OneDay';
import DayNight from '../../components/splavy/routes/DayNight';
import SplavyFooter from '../../components/splavy/Footer';
import { StaticImage } from 'gatsby-plugin-image';
import TwoDays from '../../components/splavy/routes/TwoDays';
import { rizurVideo } from '../../config';

const company = () => (
  <Layout>

    <div className={container} style={{ paddingTop: 0 }}>
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className={breadcrumb}>
          <li className={breadcrumbItem}><a href="/splavy/">Пронские сплавы</a></li>
          <li className={breadcrumbItem}>/</li>
          <li className={breadcrumbItem} aria-current="page">Организация корпоратива</li>
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
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className="container text">
        <h2 style={{ textAlign: 'center' }}>🌟 Почему стоит выбрать сплав на байдарках для корпоратива?</h2>
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
      <h2 style={{ textAlign: 'center' }}>Видео корпоратива, организованного нами, для команды <a href="https://vk.com/rizur">«НПО Ризур»</a></h2>
      <div className={videoContainer}>
        {rizurVideo}
      </div>
    </div>


    <div className={container}>
      <h2 id="routes" className={`${rowHeader} headerFont`}>Также у нас имеются регулярные групповые походы:</h2>
      <div className={row} style={{ alignItems: 'start' }}>
        <OneDay />
        <DayNight />
        <TwoDays />
      </div>
    </div>
    <SplavyFooter scrollToRoutes />
  </Layout>
);

export default company;

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='Корпоративный сплав на байдарках в Пронске — Пронские сплавы'
    description='Организация корпоративных сплавов на байдарках в Пронском районе под ключ: маршрут, инструкторы, оборудование, питание и трансфер для вашей команды.'
    pathname={location.pathname}
    image='/images/splavy-cover.jpg'
    imageAlt='Корпоративный сплав на байдарках в Пронске'
  />
);