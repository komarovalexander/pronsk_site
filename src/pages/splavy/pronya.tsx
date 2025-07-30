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

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../layout';
import ContactUs from './ContactUs';
import SplavyFooter from './Footer';
import HowToGetToUs from './HowToGetToUs';
import OneDay from './routes/OneDay';
import CompanyItem from './routes/CompanyItem';

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
        <h3
          className={`${rowHeader} headerFont`}
          style={{ marginBottom: 0 }}
        >
          Цена
        </h3>
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
      <h3 className={`${rowHeader} headerFont`}>🚣‍♂️ Примерная программа сплава</h3>
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
        <h3 className={`${rowHeader} headerFont`}>В цену входит</h3>
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

      <div className={container}>
        <h3
          id='night'
          className={`${rowHeader} headerFont`}
        >
          Варианты ночёвки
        </h3>
        <div className={row}>
          <div>
            <p>
              Одна из особенностей нашего двухдневного сплава - это то, что мы ночуем на территории Глэмпинга. У нас не только можно
              ночевать в комфортных палатках, которые включены в стоимость сплава, но и также можно снять отдельные домики и сафари-тенты.
              Любой уровень комфорта доступен на сплаве!
            </p>
            <p>
              Если вы приезжаете издалека - то вы можете приехать за день до сплава, переночевать в удобном для вас варианте размещения, и с
              утра отправиться на сплав.
            </p>
            <p>В зависимости от пожеланий к условиям ночёвки, можно выбрать различные варианты размещения:</p>
          </div>
        </div>
        <div
          className={row}
          style={{ alignItems: 'start', paddingBottom: 50 }}
        >
          <div className={feature}>
            <StaticImage
              className={rowImage}
              style={{ marginBottom: 15 }}
              width={660}
              src={'../../images/Splav/glamp/tent.jpg'}
              alt={'Пронские сплавы - 2 дня'}
            />
            <h4 className={featureHeader}>Палатка - включена в стоимость сплава</h4>
            <div
              className={rowText}
              style={{ maxWidth: 800 }}
            >
              Вся инфраструктура глэмпинга - электричество, душ, туалет доступна тем кто проживает в палатках. <br />
              Мы предоставляем палатку на 2-4 человека, мягкие коврики в палатку, спальники. <br />
              Можно со своим оборудованием - во время сплава место в глемпинге будет для вас бесплатно. <br />
            </div>
          </div>
          <div className={feature}>
            <StaticImage
              className={rowImage}
              style={{ marginBottom: 15 }}
              width={660}
              src={'../../images/Splav/glamp/shater.JPG'}
              alt={'Пронские сплавы - 2 дня'}
            />
            <h4 className={featureHeader}>Сафари-тент, общий душ и туалет - от 6100 Р./сутки</h4>
            <div
              className={rowText}
              style={{ maxWidth: 800 }}
            >
              Просторный сафари-тент оборудован помостом и электричеством. В сафари: две кровати с матрасами, одеялами, подушками,
              полотенцами; стеллаж для одежды, тумбочки, стол со стульями. Душевые кабинки и санузел в специальном блоке на территории.
              Размещение для 2 человек.
            </div>
          </div>
        </div>
        <div
          className={row}
          style={{ alignItems: 'start' }}
        >
          <div className={feature}>
            <iframe
              src='https://vk.com/video_ext.php?oid=-213925828&id=456239141&hd=2'
              width='660'
              height={440}
              style={{ maxWidth: '100%' }}
              allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
              frameborder='0'
              allowfullscreen
            ></iframe>
            <h4 className={featureHeader}>Сафари-тент, душ и туалет в номере - от 7600 Р./сутки</h4>
            <div
              className={rowText}
              style={{ maxWidth: 800 }}
            >
              Уютный сафари-тент на берегу реки. Великолепные закаты с вашей террасы! В тенте санузел с душевой, мини-кухня со всем
              необходимым, белоснежное постельное белье, мангал у каждого домика. На территории пляж, пирс, волейбольная площадка, кафе.
              Размещение до 3 человек.
            </div>
          </div>
          <div className={feature}>
            <iframe
              src='https://vk.com/video_ext.php?oid=-213925828&id=456239140&hd=2'
              width='660'
              height={440}
              style={{ maxWidth: '100%' }}
              allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
              frameborder='0'
              allowfullscreen
            ></iframe>
            <h4 className={featureHeader}>Сканди дом - от 8100 Р./сутки </h4>
            <div
              className={rowText}
              style={{ maxWidth: 800 }}
            >
              Приватная закрытая территория, где расположены два одинаковых дома и беседка. Трехкомнатный дом со всеми удобствами на берегу
              реки. Шикарный вид на реку из окна вашего домика! На закате можно посидеть с чашечкой чая на своей террасе. Приготовить
              вкусные блюда на мангале. В доме кондиционер, санузел с душевой, кухня-столовая со всем необходимым,Wi-Fi на всей территории,
              парковка. Красивый эксклюзивный ландшафт с травкой, прудиком. Свой выход к реке и пирс. Дома расположены в 3 минутах на авто
              от Глэмпинга. Размещение до 6 человек.
            </div>
          </div>
        </div>
      </div>

      <div className={container}>
        <div className='container text'>
          <h3
            className={`${rowHeader} headerFont`}
            id='take_it'
          >
            Что взять с собой
          </h3>
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
                теплый свитер, теплые носки, обувь в байдарку (сланцы, кроксы), обувь на стоянку (кроссовки, кеды), головной убор,
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
      <h3 className={`${rowHeader} headerFont`}>Кому идеально подходит маршрут?</h3>
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
      <h3
        id='routes'
        className={`${rowHeader} headerFont`}
      >
        Также может быть интересно
      </h3>
      <div
        className={row}
        style={{ alignItems: 'start' }}
      >
        <OneDay />
        <CompanyItem />
      </div>
    </div>
    <SplavyFooter style={{ marginTop: 80 }} />
  </Layout>
);

export default pronya;

export const Head: HeadFC = () => (
  <>
    <title>{routesConfig.twoDays.title}, сплавы на байдарках - Пронск, Рязанская область</title>
    <meta
      property='og:type'
      content='website'
    />
    <meta
      property='og:url'
      content='https://vpronske.ru/splavy/pronya/'
    />
    <meta
      property='og:title'
      content={routesConfig.twoDays.title}
    />
    <meta
      property='og:description'
      content='Cплавы на байдарках - Пронск, Рязанская область'
    />
    <meta
      property='og:image'
      content='https://vpronske.ru/splavy/pronya/CollageProny1.png'
    />
  </>
);
