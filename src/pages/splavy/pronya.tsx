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
import { routesConfig } from '../../config';

const pronya = () => (
  <Layout>
    <div className={container} style={{ paddingTop: 0 }}>
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className={breadcrumb}>
          <li className={breadcrumbItem}><a href="/splavy/">Пронские сплавы</a></li>
          <li className={breadcrumbItem}>/</li>
          <li className={breadcrumbItem} aria-current="page">{routesConfig.twoDays.title}</li>
        </ol>
      </nav>
    </div>

    <div className={mainBanner} >
      <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/index/4.png'} alt={'Пронские сплавы '} />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', backgroundColor: 'rgba(3, 4, 2, 0.6)' }}>
        <div className={container}>
          <div className={mainBannerText}>
            <div className={`${mainBannerText1} headerFont`}><h1>{routesConfig.twoDays.title}</h1></div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                <p className={mainBannerText3P}>
                  {routesConfig.twoDays.description}</p>
              </div>
            </div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                Цена сплава: {routesConfig.twoDays.price}
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
        <div><StaticImage className={rowImage} width={800} src={'../../images/Splav/index/8.jpg'} alt={'Пронские сплавы - Сплав Кердь-Проня (2 Дня) - 1 день'} /></div>
        <div className={rowText}>
          <i style={{ fontSize: '18px', textAlign: "justify" }}>День 1</i>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>
            10:00 – встреча в р.п. Пронск, трансфер на место старта.<br />
            10:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
            11:00 - сплав на байдарках<br />
            13:00 - обед на стоянке, отдых<br />
            14:00 - сплав на байдарках<br />
            17:00 – прибытие в точку ночлега, отдых<br />
            19:00 - ужин, душевные посиделки у костра
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className={`${row}`}>
        <div><StaticImage className={rowImage} width={800} src={'../../images/Splav/2days/pronya-2-3.JPG'} alt={'Пронские сплавы - Сплав Кердь-Проня (2 Дня) - 2 день'} /></div>
        <div className={rowText}>
          <i style={{ fontSize: '18px', textAlign: "justify" }}>День 2</i>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>
            09:00 – подъем, завтрак<br />
            11:00 - сплав на байдарках<br />
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
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Трехразовое горячее питание</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Обед, ужин, завтрак, обед. Все 2 дня наш опытный повар готовит для вас лучшие походные блюда, добавляя вкус к вашему приключению.</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🚍 Трансфер</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Трансфер от Пронска к месту старта и обратно</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🕵️‍♂️ Сопровождение в пути</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>Наш гид будет с вами на всём маршруте</p>
          </div>
        </div>
      </div>

      <div className={container}>
        <h3 id="nightPrice" className={`${rowHeader} headerFont`}>Отдельно оплачивается проживание в глемпинге "Берег"</h3>
        <div className={row}><p>В зависимости от пожеланий к условиям ночевки можно выбрать различные варианты размещения:</p></div>
        <div className={row} style={{ alignItems: 'start' }}>
          <div className={feature}>
            <StaticImage className={rowImage} style={{ marginBottom: 15 }} width={660} src={'../../images/Splav/glamp/tent.jpg'} alt={'Пронские сплавы - 3 дня'} />
            <h4 className={featureHeader}>Палатко-место в глемпинге - 2000₽ за место</h4>
            <div className={rowText} style={{ maxWidth: 800 }}>Вся инфраструктура глемпинга - электричество, душ, туалет доступна тем кто проживает в палатках. <br />Можно приехать со своей палаткой, но также оборудование для комфортного сна на природе до 4х человек на одно палатко-место наша команда предоставляет бесплатно (палатку на 3-4 человека, мягкие коврики в палатку, спальники). Нужно лишь оплатить место под палатку на территории глемпинга</div>
          </div>
          <div className={feature}>
            <StaticImage className={rowImage} style={{ marginBottom: 15 }} width={660} src={'../../images/Splav/glamp/shater.jpg'} alt={'Пронские сплавы - 3 дня'} />
            <h4 className={featureHeader}>Шатёр - 3500₽ - за весь шатёр</h4>
            <div className={rowText} style={{ maxWidth: 800 }}>Просторный шатер с двумя кроватями, с собственной территорией, светом и электричеством. Для 2х человек, дополнительно в наших спальниках можем подселить одного взрослого или 2х детей бесплатно</div>
          </div>
          <div className={feature}>
            <iframe width="100%" style={{ aspectRatio: 1.5, borderRadius: 10 }} src="https://www.youtube.com/embed/SvdLRZnBj14?si=ojVk7uKLGefcfX6E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h4 className={featureHeader}>Сафари-тент - 6500₽ - за домик </h4>
            <div className={rowText} style={{ maxWidth: 800 }}>Уютный красивый домик на природе на территории глемпинга с двухспальной кроватью, диваном, личным туалетом и душем, микроволновкой, чайником и холодильником. Для 2х человек, дополнительно бесплатно можно подселить 1 взрослого или 2х детей</div>
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
              <b style={{ fontSize: '18px', textAlign: "justify" }}>☀️ Крем от загара </b>
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
          <b style={{ fontSize: '18px', textAlign: "justify" }}>🎣 Рыболовам</b>
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
        <ThreeDays />
        <OneDay />
      </div>
    </div>
    <SplavyFooter style={{ marginTop: 80 }} />
  </Layout >
);

export default pronya;

export const Head: HeadFC = () =>
  <>
    <title>{routesConfig.twoDays.title}, сплавы на байдарках - Пронск, Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/pronya/" />
    <meta property="og:title" content={routesConfig.twoDays.title} />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/pronya/CollageProny1.png" />
  </>