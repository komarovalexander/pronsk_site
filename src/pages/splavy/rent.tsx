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

const rent = () => (
  <Layout>
    <div className={container} >
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/splavy/">Пронские сплавы</a></li>
          <li className="breadcrumb-item active" aria-current="page">Прокат-Аренда с доставкой и трансфером</li>
        </ol>
      </nav>
    </div>


    <div className={mainBanner} >
      <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/Prony/rent.jpg'} alt={'Пронские сплавы - Прокат-Аренда с доставкой и трансфером'} />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }}>

        <div className={mainBannerText}>
          <div className={`${mainBannerText1} headerFont`}>


            <h1>Прокат-Аренда с доставкой и трансфером</h1></div>
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
        <h3 style={{ textAlign: 'center' }}>🌊 Погрузись мир водных приключение с нами! 🚣‍♂️</h3>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>Хочешь покорить водные просторы и насладиться красотами природы? Наша аренда байдарок предлагает идеальное решение для тебя!
        </p>
        <h4 style={{ textAlign: 'center' }}>🌅 Почему стоит выбрать нас?</h4>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🚐 Трансфер и доставка: Мы обеспечим полный сервис "под ключ" - трансфер от места встречи до начала маршрута и обратно,
          а также доставку всего необходимого оборудования прямо на место.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🛶 Качественное снаряжение: Мы предоставляем современные и надежные байдарки, а также качественные палатки,
          самонадувающиеся коврики с подушкой, теплые спальники и т.д., обеспечивая комфортный отдых на природе.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🌲 Разнообразие маршрутов: Исследуй водные просторы Рязанской области и за ее пределами!
          Наши маршруты простираются от живописных рек и озер до уединенных водоемов, где ты сможешь насладиться природой в полной мере.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🕒 Гибкий график: Наши байдарки доступны для аренды в любое время. Планируй свое приключение так, как тебе удобно.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩‍👧‍👦 Для всей семьи: Аренда байдарок подходит для всех возрастов и уровней подготовки. Приглашай своих близких и друзей и отправляйтесь в увлекательное путешествие по воде!
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🎉 Открой новые горизонты вместе с нами! Забронируй байдарки уже сегодня по телефону <a href="tel:+79521233539">+79521233539</a> и отправляйся на водные приключения, создавая незабываемые воспоминания. 📞
        </p>
      </div>
    </div>


    <div className={container}>
      <div className="container text" style={{ paddingTop: 30 }}>
        <h3 style={{ textAlign: "center" }}>Стоимость оборудования за день (прокат от 2-х дней)</h3>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>
          <i>Байдарка 2-х местная - 1800 р.<br />
            Гермомешок - 200 р.<br />
            Спальник - 300 р.<br />
            Самонадувающийся коврик - 300 р.<br />
            Палатка 4-х местная - 500 р.<br />
          </i>
        </p>
      </div>
    </div>

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