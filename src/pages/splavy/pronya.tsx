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

import { HeadFC } from 'gatsby';
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
              <p className={mainBannerText3P}>
                Сплав по реке Кердь с впаданием в Проню и финишем в древнем городе Пронске.  <br />Отдых в режиме всё включено: Питание, трансфер, инструкторы, палатки и много другое. Ночевка на нашей оборудованной стоянке на реке Кердь.</p>
            </div>
            <div className={`${mainBannerText3} headerText`}>
              <div>
                Цена: 6000₽ (май-июнь), 7000₽ (июль-август), <br /> детям до 14 лет 4000₽
                <br />
                <div style={{ fontSize: 12 }}>*Бронирование производится по 50% предоплате. <br /> **В случае отказа более чем за 7 дней до мероприятия, предоплата возвращается в полном объеме</div>
              </div>
            </div>
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
    </div>

    <div className={container}>
      <h3 className={`${rowHeader} headerFont`}>🚣‍♂️ Особенность маршрута</h3>
      <div className={`${row} ${rowReversed}`}>
        <div><StaticImage className={rowImage} src={'../../images/Splav/index/3.jpeg'} alt={'Пронские сплавы - Наши преимущества'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>01</span>Отдых на природе</h4>
            <div>Оборудованная стоянка для ночлега с нашими палатками и всем необходимым оборудование.</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>02</span>Для всей семьи</h4>
            <div>Наши походы подходят для любого уровня подготовки.
              Пригласите семью и друзей. Для детей у нас большие скидки!</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>03</span>Сервис "все включено"</h4>
            <div>Наслаждайтесь беззаботным приключением с нашим полным сервисом,
              из необходимого вам понадобится только питьевая вода в удобной бутылке.</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>04</span>Опытные гиды</h4>
            <div>Наши профессиональные гиды знают каждый поворот реки, безопасное и захватывающее приключение.</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={`${row}`}>
        <div><StaticImage className={rowImage} src={'../../images/Splav/index/2.jpeg'} alt={'Пронские сплавы - повар и инструктор'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>05</span>Качественное снаряжение</h4>
            <div>Мы предоставляем современные и надежные байдарки, чтобы ваше путешествие было комфортным и беззаботным.</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>06</span>Вкусное питание</h4>
            <div>Наш опытный повар готовит для вас лучшие походные блюда, добавляя вкус к вашему приключению.</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>07</span>Рыбалка</h4>
            <div>Река обильна разнообразной рыбой, что делает ее прекрасным местом для рыболовства.</div>
          </div>
          <div className={feature}>
            <h4 className={featureHeader}>
              <span className={featureNumber}>08</span>Ежедневные сплавы</h4>
            <div>Предлагаем <b>сплавы каждый день</b>, в том числе и в будни.</div>
          </div>
        </div>
      </div>
    </div>

    <div className={container}>

      <br /> Входит:<br />
      - байдарки в собранном виде, спасжилеты, в т.ч. детские<br />
      - сопровождение<br />
      - палатки, мягкие матрасы в палатку, спальники<br />
      - личная посуда<br />
      - гермомешки<br />
      - трехразовое горячее питание<br />
      - подготовленное для отдыха и ночлега место<br />
      - трансфер к месту старта и обратно<br />
      - дождевики<br />
      <b style={{ fontSize: '18px', textAlign: "justify" }}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону <a href="tel:+79521233539">8(952)123-35-39</a> (<a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>).<br /></b>
      <i style={{ fontSize: '18px', textAlign: "justify" }}>*Бронирование производится по 50% предоплате.
        В случае отказа более чем за 7 дней до мероприятия, предоплата возвращается в полном объеме</i>
    </div>

    <div className={container}>
      <div className="container text" style={{ paddingTop: 30 }}>
        <h3 style={{ textAlign: "center" }}>Примерная программа двухдневного сплава</h3>
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
        <i style={{ fontSize: '18px', textAlign: "justify" }}>День 2</i>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>
          09:00 – подъем, завтрак<br />
          11:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          13:00 - обед на финише, конец путешествия<br />
          так же в маршрут входит посещение <a href="/blog/pronsk/#pokrovka">Покровского бугра</a><br />
        </p>
      </div>
    </div>

    <div className={container}>
      <div className={videoContainer}>
        <iframe className={video} src="https://www.youtube.com/embed/sQ2tOg3mrrs?si=SADGqVcuJLkjJrQI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>
      </div>
    </div>

    <div className={container}>
      <div className="container text">
        <h3 style={{ textAlign: 'center' }}>Что взять с собой в поход</h3>
        <b style={{ fontSize: '18px', textAlign: "justify" }}>🚿 Средства личной гигиены</b>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>полотенце, мыло, зубная паста и щётка, туалетная бумага и т.д.</p>
        <b style={{ fontSize: '18px', textAlign: "justify" }}>💧 Питьевая вода</b>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>в удобной бутылке или нескольких маленьких, суммарно не менее 1,5 литров на человека</p>
        <b style={{ fontSize: '18px', textAlign: "justify" }}>👕 Запасная одежда</b>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>теплый свитер, теплые носки, обувь в байдарку (сланцы, кроксы), обувь на стоянку (кроссовки, кеды), головной убор, солнцезащитные очки, ветровка, шорты, спортивные штаны</p>
        <b style={{ fontSize: '18px', textAlign: "justify" }}>☀️ Крем от загара и средство от комаров </b>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>пригодится вам, если вы склонны к обгоранию кожи на солнце</p>
        <p style={{ fontSize: '18px', textAlign: 'justify' }}>🎒 Всё, что вам понадобится в походе - это личные вещи, которые поместятся в небольшой рюкзачок. <b>Всё остальное мы вам предоставим!</b></p>
      </div>
    </div>
    {/*<Row style={{ padding: '40px 0' }}>
      <Col>
        <div className="container text">
          <Carousel interval={null}>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/1.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/2.JPG" className="rounded" alt="Пороня" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/3.JPG" className="rounded" alt="Проня" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/4.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/5.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/6.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/7.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/8.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/9.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/10.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/11.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/12.JPG" className="rounded" alt="Пороня" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/13.JPG" className="rounded" alt="Проня" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/14.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/15.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/16.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Slider/17.JPG" className="rounded" alt="Кердь" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
        </Row>*/}
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