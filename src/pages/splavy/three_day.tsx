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

const three_day = () => (
  <Layout>
    <div className={container}>
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/splavy/">Пронские сплавы</a></li>
          <li className="breadcrumb-item active" aria-current="page">Проня (3 Дня)</li>
        </ol>
      </nav>
    </div>



    <div className={mainBanner} >
      <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/Prony/3day.jpg'} alt={'Пронские сплавы '} />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }}>

        <div className={mainBannerText}>
          <div className={`${mainBannerText1} headerFont`}>
            Проня (3 Дня)</div>
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
        <h3 style={{ textAlign: 'center' }}>🚣‍♂️ Особеность маршрута</h3>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩‍👧‍👦 Для всей семьи: Наши походы подходят для любого уровня подготовки, от новичков до опытных каякеров.
          Пригласите семью и друзей. Для детей у нас большие скидки!
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>✨ Сервис "все включено": Наслаждайтесь беззаботным приключением с нашим полным сервисом,
          из необходимого вам понадобится только питьевая вода в удобной бутылке.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍🎓 Опытные гиды: Наши профессиональные гиды знают каждый поворот реки, безопасное и захватывающее приключение.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🛶 Качественное снаряжение: Мы предоставляем современные и надежные байдарки, чтобы ваше путешествие было комфортным и беззаботным.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Кулинарное волшебство на берегу реки: Наш опытный походный повар готовит для вас изысканные блюда прямо на берегу, добавляя вкус к вашему приключению.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🎣 Рыбалка: Река обильна разнообразной рыбой, что делает ее прекрасным местом для рыболовства.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>🌅 Неповторимые закаты: Заканчивайте день, наслаждаясь невероятными закатами над водой Прони. Этот момент станет идеальным завершением вашего дня на реке.
        </p>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>Отправляйтесь на приключение по реке Проня и откройте для себя всю ее красоту и магию! 🌄
        </p>
        <i style={{ fontSize: '18px', textAlign: "justify" }}><b>Стоимость 3-дневного сплава 8500р. (май-июнь)/9500р. (июль-август). <br />Детям до 14 лет 7500р.</b>
          <br /> Входит:<br />
          - байдарки в собранном виде, спасжилеты, в т.ч. детские<br />
          - сопровождение<br />
          - палатки, мягкие матрасы в палатку, спальники<br />
          - личная посуда<br />
          - гермомешки<br />
          - трехразовое горячее питание<br />
          - трансфер к месту старта и обратно<br />
          - дождевики<br /></i>
        <b style={{ fontSize: '18px', textAlign: "justify" }}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону <a href="tel:+79521233539">8(952)123-35-39</a> (<a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>).<br /></b>
        <i style={{ fontSize: '18px', textAlign: "justify" }}>*Бронирование производится по 50% предоплате.
          В случае отказа за 7 дней до мероприятия, предоплата возвращается в полном объеме.</i>
      </div>
    </div>

    {/* карта */}
    {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A32cdf8701bc032eaf53d635a839918cbb5ccf218ea8d0e38e90e714ac113ac6c&amp;source=constructor" width="979" height="406" frameborder="0"></iframe> */}

    {/* <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: 'center'}}>График занятости путешествий</h3>
          <i style={{fontSize: '18px', textAlign: "justify"}}>* Бронирование производится по 50% предоплате.
          В случае отказа за 3 дня до мероприятия, предоплата возвращается в полном объеме.</i>
          <Calendar
            localizer={localizer}
            culture={'ru'}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={['month']}
            events={calenderEvents}
            messages={ {
              previous: 'Предыдущий',
              next: 'Следующий',
              today: `Сегодня`,
            }}
          />
        </div>
        <div className="container text" style={{paddingTop: 30}}>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Примерная программа однодневного сплава:<br /></b>
          <i style={{fontSize: '18px', textAlign: "justify"}}>День 1</i>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          12:00 – прибытие в р.п. Пронск к нашему дому, трансфер на место старта.<br />
          12:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
          13:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          15:00 - горячий обед на свободной стоянке, отдых<br />
          16:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          19:00 – встречаем вас с готовым лагерем, игры на берегу, ужин, душевные посиделки у костра
          </p>
          <i style={{fontSize: '18px', textAlign: "justify"}}>День 2</i>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          09:00 – подъем, завтрак<br />
          10:30 - сплав на байдарках с остановками для фотографирования и купания<br />
          14:00 - финиширование у Пронского моста, обратный трансфер к дому<br />
          </p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          Все передвижения проходят на байдарках, не отягощенных грузом, так как все нужные вещи для лагеря мы берем на себя и подготавливаем его во время вашего сплава.
          Это значительно сэкономит и время, и силы участников. На лёгких байдарках передвигаться значительно веселее и комфортнее.</p>
        </div>
      </Col>
    </Row> */}


    <div className={container}>
      <div className="container text" style={{ paddingTop: 30 }}>
        <h3 style={{ textAlign: "center" }}>Примерная программа 3-дневного сплава</h3>
        <i style={{ fontSize: '18px', textAlign: "justify" }}>День 1</i>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>
          10:00 – прибытие в р.п. Пронск в Глемпинг берег, трансфер на место старта.<br />
          11:00 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
          11:30 - сплав на байдарках с остановками для фотографирования и купания<br />
          13:00 - обед на стоянке, отдых<br />
          14:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          17:00 – финиширование, отдых<br />
          19:00 - ужин, душевные посиделки у костра
        </p>
        <i style={{ fontSize: '18px', textAlign: "justify" }}>День 2</i>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>
          09:00 – подъем, завтрак<br />
          10:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          13:00 - обед на стоянке, отдых<br />
          14:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          17:00 – финиширование, отдых<br />
          19:00 - ужин, душевные посиделки у костра
        </p>
        <i style={{ fontSize: '18px', textAlign: "justify" }}>День 3</i>
        <p style={{ fontSize: '18px', textAlign: "justify" }}>
          09:00 – подъем, завтрак<br />
          10:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          13:00 - финиширование, обед на стоянке, отдых<br />
          15:00 - обратный трансфер<br />
        </p>
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

export default three_day;

export const Head: HeadFC = () =>
  <>
    <title>Проня 2дня/1ночь, сплавы на байдарках - Пронск, Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/three_day/" />
    <meta property="og:title" content="Проня (2 Дня/1 Ночь)" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/three_day/CollageProny1.png" />
  </>