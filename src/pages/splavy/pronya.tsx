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
import { StaticImage } from 'gatsby-plugin-image';
import logoImage from '../../images/Splav/logo.png';
import odnoklassniki from '../../images/odnoklassniki.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import whatsapp from '../../images/whatsapp.svg';

const pronya = () => (
  <Layout>
    <div className={container} style={{ paddingTop: 0 }}>
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className={breadcrumb}>
          <li className={breadcrumbItem}><a href="/splavy/">Пронские сплавы</a></li>
          <li className={breadcrumbItem}>/</li>
          <li className={breadcrumbItem} aria-current="page">Сплав Кердь-Проня (2 Дня)</li>
        </ol>
      </nav>
    </div>

    <div className={mainBanner} >
      <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/index/8.jpg'} alt={'Пронские сплавы '} />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }}>
        <div className={container}>
          <div className={mainBannerText} style={{ backgroundColor: '#5C8300AA' }}>
            <div className={`${mainBannerText1} headerFont`}><h1>Кердь-Проня (2 Дня)</h1></div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                <p className={mainBannerText3P}>
                  Сплав по реке Кердь с впаданием в Проню и финишем в древнем городе Пронске.  <br />Отдых в режиме всё включено: Питание, трансфер, инструкторы, палатки и много другое. Ночевка на нашей оборудованной стоянке на реке Кердь.</p>
              </div>
            </div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                Цена: 6000₽ (май-июнь), 7000₽ (июль-август), <br /> детям до 14 лет 4000₽
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
        <div><StaticImage className={rowImage} width={800} src={'../../images/Splav/2days/pronya-1.jpeg'} alt={'Пронские сплавы - Сплав Кердь-Проня (2 Дня) - 1 день'} /></div>
        <div className={rowText}>
          <i style={{ fontSize: '18px', textAlign: "justify" }}>День 1</i>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>
            10:00 – встреча в р.п. Пронск, трансфер на место старта.<br />
            10:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
            11:00 - сплав на байдарках с остановками для фотографирования и купания<br />
            13:00 - обед на стоянке, отдых<br />
            14:00 - сплав на байдарках с остановками для фотографирования и купания<br />
            17:00 – прибытие в точку ночлега, отдых<br />
            19:00 - ужин, душевные посиделки у костра
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className={`${row}`}>
        <div><StaticImage className={rowImage} src={'../../images/Splav/2days/pronya-2-3.JPG'} alt={'Пронские сплавы - Сплав Кердь-Проня (2 Дня) - 2 день'} /></div>
        <div className={rowText}>
          <i style={{ fontSize: '18px', textAlign: "justify" }}>День 2</i>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>
            09:00 – подъем, завтрак<br />
            11:00 - сплав на байдарках с остановками для фотографирования и купания<br />
            13:00 - обед на финише, конец путешествия<br /><br />

            *так же в маршрут входит посещение <a href="/blog/pronsk/#pokrovka">Покровского бугра</a><br />
          </p>
        </div>
      </div>
    </div>

    <div className={grayBack}>
      <div className={container}>
        <h3 className={`${rowHeader} headerFont`}>В цену входит</h3>

        <div className={row}>
          <div>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🚣‍♂️ Оборудование для сплава</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Байдарки в собранном виде, гермомешки, спасжилеты, в т.ч. детские, дождевики</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>⛺️ Оборудование для комфортного сна на природе</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Палатки, мягкие коврики в палатку, спальники, подготовленное для отдыха и ночлега место</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Трехразовое горячее питание</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Обед, ужин, завтрак, обед. Все 2 дня наш опытный повар готовит для вас лучшие походные блюда, добавляя вкус к вашему приключению.</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🚍 Трансфер</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Трансфер к месту старта и обратно</p>
          </div>
        </div>
      </div>


      <div className={container}>
        <div className="container text">
          <h3 className={`${rowHeader} headerFont`}>Что взять с собой</h3>
          <div className={row}>
            <div>
              <b style={{ fontSize: '18px', textAlign: "justify" }}>🚿 Средства личной гигиены</b>
              <p style={{ fontSize: '18px', textAlign: "justify" }}>полотенце, мыло, зубная паста и щётка, туалетная бумага и т.д.</p>
              <b style={{ fontSize: '18px', textAlign: "justify" }}>💧 Питьевая вода</b>
              <p style={{ fontSize: '18px', textAlign: "justify" }}>в удобной бутылке или нескольких маленьких, суммарно не менее 1,5 литров на человека</p>
              <b style={{ fontSize: '18px', textAlign: "justify" }}>👕 Запасная одежда</b>
              <p style={{ fontSize: '18px', textAlign: "justify" }}>теплый свитер, теплые носки, обувь в байдарку (сланцы, кроксы), обувь на стоянку (кроссовки, кеды), головной убор, солнцезащитные очки, ветровка, шорты, спортивные штаны</p>
              <b style={{ fontSize: '18px', textAlign: "justify" }}>☀️ Крем от загара и средство от комаров </b>
              <p style={{ fontSize: '18px', textAlign: "justify" }}>пригодится вам, если вы склонны к обгоранию кожи на солнце</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className={container}>
      <h3 className={`${rowHeader} headerFont`}>Кому идеально подходит маршрут?</h3>
      <div className={row}>
        <div>
          <b style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩‍👧‍👦 Семейным</b>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>Байдарки безопасные и очень устойчивые. На речке Кердь хорошее течение есть перекаты но нет опасных порогов - это значит что путешествие будет безопасным и не скучным. 2 дня сплава  (1 ночь в палатке) - идеальное количество дней для знакомства семьи с нашим видом туризма</p>
          <b style={{ fontSize: '18px', textAlign: "justify" }}>🤟 Компаниям друзей</b>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>Вместе побыть на природе, расслабиться и не думать о мелочах, наслаждаясь общением друг с другом</p>
          <b style={{ fontSize: '18px', textAlign: "justify" }}>🛶 Ищущим новых интересных знакомств и впечатлений</b>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>Это же интересно оказываться в нестандартной для себя ситуации и знакомить с новыми людьми, не правда ли?</p>
          <b style={{ fontSize: '18px', textAlign: "justify" }}>🐟 Рыболовам</b>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>На остановках можно рыбачить, вечером и на рассвете клёв хороший</p>
          <b style={{ fontSize: '18px', textAlign: "justify" }}>👨‍💼 Коллегам</b>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>Провести время совместно проходя маршрут, пообщаться в максимально неформальной обстановке, за два дня сплава многое можно обсудить</p>
          <b style={{ fontSize: '18px', textAlign: "justify" }}>🙂 На самом деле всем кто любит приключения</b>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>Откройте красоту Пронского района, Рязанской области вместе с нами</p>
        </div>
      </div>
    </div>

    <HowToGetToUs />

    <div className={container}>
      <h3 id="routes" className={`${rowHeader} headerFont`}>Также может быть интересно</h3>
      <div className={row} style={{ alignItems: 'start' }}>
        <div className={feature}>
          <StaticImage className={rowImage} style={{ marginBottom: 15 }} src={'../../images/Splav/index/3days.jpg'} alt={'Пронские сплавы - 3 дня'} />
          <h4 className={featureHeader}>3 Дня, река Проня</h4>
          <div className={rowText} style={{ maxWidth: 800 }}>Автономный сплав по реке Проня на 3 дня в сопровождении инструктора, все необходимое оборудование мы предоставляем.<br /> <br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: 8500₽ (май-июнь), 9500₽ (июль-август), <br /> детям до 14 лет 7500₽</div>
          <a className={button} href="/splavy/three_day">Подробнее</a>
        </div>
        <div className={feature}>
          <StaticImage className={rowImage} style={{ marginBottom: 15 }} src={'../../images/Splav/index/5.jpg'} alt={'Пронские сплавы - 1 день'} />
          <h4 className={featureHeader}>
            1 День</h4>
          <div className={rowText} style={{ maxWidth: 800 }}>Сплав с инструктором по рекам Кердь и Проня, с полноценным обедом и трансфером из Пронска. <br /><br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: 3500₽ (май-июнь), 4500₽ (июль-август) <br /> детям до 14 лет 2000₽</div>
          <a className={button} href='/splavy/kerd'>Подробнее</a>
        </div>
        <Glamping />
      </div>
    </div>
    <div className={footer} style={{ marginTop: 80 }} >
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
  </Layout >
);

export default pronya;

export const Head: HeadFC = () =>
  <>
    <title>Проня 2дня/1ночь, сплавы на байдарках - Пронск, Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/pronya/" />
    <meta property="og:title" content="Проня (2 Дня/1 Ночь)" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/pronya/CollageProny1.png" />
  </>