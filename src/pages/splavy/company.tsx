import React, { CSSProperties } from 'react';
import {
  additionalFeature,
  additionalFeatureHeader,
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
} from '../splavy.module.scss';

import { HeadFC } from 'gatsby';
import Layout from '../layout';
import { StaticImage } from 'gatsby-plugin-image';
import logoImage from '../../images/Splav/logo.png';
import odnoklassniki from '../../images/odnoklassniki.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import whatsapp from '../../images/whatsapp.svg';

const company = () => (
  <Layout>

    <div className={container} >
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/splavy/">Пронские сплавы</a></li>
          <li className="breadcrumb-item active" aria-current="page">Организация корпоративов</li>
        </ol>
      </nav>
    </div>


    <div className={mainBanner} >
      <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/Prony/company.jpg'} alt={'Пронские сплавы '} />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }}>

        <div className={mainBannerText}>
          <div className={`${mainBannerText1} headerFont`}>

            <h1>Организация корпоратива - сплав на байдарках</h1></div>
          <div className={`${buttons} ${columnReverseMobile}`}>
            <div style={{ display: 'flex', gap: 15, fontSize: 18, alignItems: 'center' }}>Пишите:
              <a href="https://vk.me/pronskie_splavy" target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' /></a>
              <a href="https://t.me/pronskie_splavy" target='_blank' title='Телеграм'><img src={telegram} alt='Телеграм' /></a>
              <a href="https://wa.me/+79521233539" target='_blank' title='Вотсапп'><img src={whatsapp} alt='Вотсапп' /></a>
            </div>
            <a className={buttonMain} href='tel:+79521233539'>Звоните +79521233539</a>
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className="container text">
        <h3 style={{ textAlign: 'center' }}>🚣‍♂️ Организуй незабываемый корпоративный сплав на байдарках с нами! 🌊</h3>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>Хотите подарить своей команде незабываемый отдых и укрепить ее дух единства? Приглашаем вас на наши корпоративные сплавы на байдарках,
          где каждый участник получит заряд энергии, вдохновения и новых впечатлений!
        </p>
        <h4 style={{ textAlign: 'center' }}>🌟 Почему выбирают нас для корпоративных мероприятий?</h4>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>✅ Повышение эффективности команды: Наше мероприятие на байдарках способствует
          укреплению взаимоотношений между сотрудниками и формированию единой команды.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🏕️ Отрыв от рутины: Уйдите от повседневных дел и окунитесь в атмосферу приключения на природе.
          Это позволит вашей команде отвлечься от рабочих забот и насладиться природной красотой, вдохновляющей на новые свершения.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Кулинарные удовольствия: Вкусные пикники на берегу реки,
          где каждый участник может насладиться изысканными блюдами и приятной беседой в неформальной обстановке.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>✨ Организация "под ключ": Мы позаботимся обо всех деталях вашего мероприятия - от трансфера до пикников на берегу.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩 Подходит для всех: Независимо от уровня подготовки и возраста участников, путешествия с "Пронскими сплавами" подойдут каждому.
          Мы создадим программу, которая удовлетворит все потребности и пожелания вашей команды.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>📞 Не упустите шанс устроить яркий и запоминающийся корпоративный отдых!
          Свяжитесь <a href="tel:+79521233539">+79521233539</a> с нами уже сегодня, чтобы обсудить детали вашего мероприятия и забронировать дату! 🌟🎉
        </p>
        <i style={{ fontSize: '18px', textAlign: "justify" }}>Цена договорная, для больших компаний скидки<br />
        </i>
        <a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>
      </div>
    </div>

    <div className={container}>
      <div className={videoContainer}>
        <iframe className={video} src="https://www.youtube.com/embed/sQ2tOg3mrrs?si=SADGqVcuJLkjJrQI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>
      </div>
    </div>

    <div className={footer} >
      <div><img src={logoImage} className={logo} alt="Пронские сплавы логотип" /></div>
      <div className={footerLinks} >
        <a href="/splavy#routes">Маршруты</a>
        <a href="/splavy/rent/">Аренда</a>
        <a href="/splavy/company/">Организация корпоратива</a>
      </div>
      <div className={social}>
        <a href="https://vk.com/pronskie_splavy" target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' /></a>
        <a href="https://ok.ru/group/70000002650473" target='_blank' title="Одноклассники"><img src={odnoklassniki} alt='Одноклассники' /></a>
      </div>
    </div>
  </Layout>
);

export default company;

export const Head: HeadFC = () =>
  <>
    <title>Проня 2дня/1ночь, сплавы на байдарках - Пронск, Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/company/" />
    <meta property="og:title" content="Проня (2 Дня/1 Ночь)" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/three_day/CollageProny1.png" />
  </>