import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { CSSProperties } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import bannerImage from '../images/Splav/index/banner.png';
import logoImage from '../images/Splav/logo.png';
import Layout from './layout';
import {
  block, button, container, feature, featureHeader, featureNumber, header, linearBack, logo,
  mainBanner, mainBannerText, mainBannerText1, mainBannerText2, mainBannerText2Br, mainBannerText3,
  mainBannerText3P, row, rowHeader, rowImage, rowReversed, rowText, video, videoContainer,
} from './splavy.module.scss';

const splavy = () => (
  <Layout>
    <div className={mainBanner} style={{ background: `url(${bannerImage})` }}>
      <div className={header} >
        <img src={logoImage} className={logo} alt="Пронские сплавы логотип" />
      </div>

      <div className={mainBannerText}>
        <div className={`${mainBannerText1} headerFont`}>Погрузитесь</div>
        <div className={`${mainBannerText2} h1Font`} >в мир<br className={mainBannerText2Br} /> водных<br /> приключений</div>
        <div className={`${mainBannerText3} d-flex justify-content-center headerText`}>
          <p className={mainBannerText3P}>Ищете идеальный способ сбежать от городской суеты и ощутить вдохновение природы? Добро пожаловать в мир наших захватывающих путешествий на байдарках по чистым рекам Пронского района Рязанской области! 🌿</p>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className={`${rowHeader} headerFont`}>Наша миссия</div>
      <div className={row}>
        <div><StaticImage className={rowImage} src={'../images/Splav/index/1.jpeg'} alt={'Наша миссия'} /></div>
        <div className={rowText}>
          Мы хотим чтобы люди с разным опытом путешествий видели красоту природы вокруг нас.<br /><br />
          Для новичков и для семей с детьми, и просто тех кто хочет отдохнуть на природе с комфортом - мы расчистили маршрут на реке Кердь которая впадает в Проню, с ночевкой в оборудованном глемпинге: с парковкой, душем, санузлом, всем необходимым оборудованием для отдыха, развлечений и различными вариантами размещения.
          <br /><br />
          Для опытных путешественников мы сами разрабатываем наши авторские маршруты по местам где редко бывает человек. <br /><br />
          Мы влюблены в Пронский район Рязанской области и хотим, чтобы вы увидели его нашими глазами. Мы знаем здесь каждый уголок, и готовы поделиться с вами его историей и красотой.   </div>

      </div>
    </div>

    <div className={container}>
      <div className={`${rowHeader} headerFont`}>Наши преимущества</div>
      <div className={`${row} ${rowReversed}`}>
        <div><StaticImage className={rowImage} src={'../images/Splav/index/3.jpeg'} alt={'Пронские сплавы - Наши преимущества'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>01</span>Для всей семьи</div>
            <div>Наши походы подходят для любого уровня подготовки. Пригласите семью и друзей. Для детей у нас большие скидки!</div>
          </div>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>02</span>Всё включено</div>
            <div>Начиная от трансфера и предоставления всего необходимого оборудования для похода, заканчивая вкусным питанием на маршруте. Ваш отдых в надежных руках - вам только нужно расслабиться и получать удовольствие. Наши байдарки, местного Рязанского производства - удобные надежные и безопасные</div>
          </div>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>03</span>Мы живем приключениями</div>
            <div>Наши гиды знают каждый поворот реки, они сделают все для вашего безопасного и захватывающего путешествия</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={`${row}`}>
        <div><StaticImage className={rowImage} src={'../images/Splav/index/2.jpeg'} alt={'Пронские сплавы - повар и инструктор'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>04</span>Разнообразные маршруты</div>
            <div>Хотите ли вы удалиться от цивилизации на несколько дней? Или хотите полностью комфортный отдых с душем и ночевкой в бунгало с двухспальной кроватью? - у нас есть маршрут для каждого.</div>
          </div>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>05</span>Вкусное питание</div>
            <div>Наш походный повар готовит для вас вкусные блюда прямо на берегу, добавляя вкус к вашему приключению</div>
          </div>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>06</span>Ежедневные походы</div>
            <div>Предлагаем сплавы каждый день, в том числе и в будни.</div>
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className={videoContainer}>
        <iframe className={video} src="https://www.youtube.com/embed/sQ2tOg3mrrs?si=SADGqVcuJLkjJrQI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>
      </div>
    </div>

   <div className={linearBack}>
      <div className={container}>
        <div className={`${rowHeader} headerFont`}>Наши маршруты</div>
        <div className={row} style={{ alignItems: 'start'}}>
            <div className={feature}>
              <StaticImage className={rowImage} style={{marginBottom: 15}} src={'../images/Splav/index/5.jpg'} alt={'Пронские сплавы - 1 день'} />
              <div className={featureHeader}>
                1 День</div>
              <div className={rowText}>Сплав по реке Кердь (приблизительно 2-3 часа), с трансфером из Пронска и инструктором. <br /> Цена 2000р с человека, детям до 14 лет скидка 1000р  до 18 лет скидка 1500р</div>
              <a className={button} href='/splavy/kerd'>Подробнее</a>
            </div>

            <div className={feature}>
              <StaticImage className={rowImage} style={{marginBottom: 15}} src={'../images/Splav/index/6.jpg'} alt={'Пронские сплавы - 2 дня'} />
              <div className={featureHeader}>2 Дня</div>
              <div className={rowText}>Сплав по реке Кердь с впаданием в Проню. Ночёвка на Проне в оборудованом глемпинге. Питание, трансфер, инструкторы и ночёвка в собранных палатках включены в стоимость. <br /> Цена 7000р с человека, детям до 14 лет скидка 3000р, до 18 лет - 2000р</div>
              <a className={button} href="/splavy/pronya">Подробнее</a>
            </div>

            <div className={feature}>
              <StaticImage className={rowImage} style={{marginBottom: 15}} src={'../images/Splav/index/4.png'} alt={'Пронские сплавы - 3 дня'} />
              <div className={featureHeader}>3 Дня</div>
              <div className={rowText} >Автономный сплав по реке Проня на 3 дня в сопровождении инструктора, все необходимое оборудование мы предоставляем.<br />  Цена 8500р. с человека, детям до 18 лет скидка 2000р.</div>
              <a className={button} href="three_day">Подробнее</a>
            </div>
          </div>
      </div>
    </div>

    <Row style={{ padding: '40px 0' }}>
      <Col>
        <div className="container text">
          <h3 style={{ textAlign: 'center', paddingBottom: 30 }}>Прокат и организация корпоратива</h3>
          <div className="row">
            <div className="col">
              <div className="card">
                <StaticImage width={1000} src="../images/Splav/Prony/rent.jpg" className="card-img-top" alt="Кердь" style={{ width: '100%', height: 'auto' }} />
                <div className="card-body">
                  <h5 className="card-title">Прокат-Аренда с доставкой и трансфером</h5>
                  <a href="/splavy/rent" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <StaticImage width={1000} src="../images/Splav/Prony/company.jpg" className="card-img-top" alt="Проня" style={{ width: '100%', height: 'auto' }} />
                <div className="card-body">
                  <h5 className="card-title">Организация корпоратива</h5>
                  <a href="/splavy/company" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>

    <Row style={{ backgroundColor: '#eef0f2', padding: '40px 0' }}>
      <Col>
        <div className="container text">
          <h3 style={{ textAlign: 'center' }}>Как до нас добраться</h3>
          <p style={{ fontSize: '18px', textAlign: "justify" }}> Добраться до р.п. Пронск можно на собственном автомобиле, для вас будет бесплатная охраняемая парковка или на общественном транспорте.
            Примерное время в дороге: от Рязани ~ 45 минут; от Москвы ~ 4 часа.</p>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A77d7e495cb017ecead7fa8df335a1c15454e29de12272bda8c806e292d3a9852&amp;source=constructor" width="100%" height="400"></iframe>
        </div>
      </Col>
    </Row>

    {/*
    <Row style={{backgroundColor: '#eef0f2', padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: 'center'}}>Целебность природы</h3>
          <i style={{fontSize: '18px', textAlign: "justify"}}>Во всех явлениях природы есть нечто чудесное (Аристотель)</i>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Многочисленные исследования доказали, что времяпрепровождение на природе помогает справиться с проблемами психического здоровья, такими как тревога, депрессия, чувство одиночества.
          Природа помогает взять тайм-аут, повышает активность и уверенность в собственных силах, улучшает физическое и моральное здоровье человека, делая его оптимистичнее и крепче.</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Природа обладает чудодейственными лечебными свойствами, она
          создает для человека все условия, чтобы он мог быть здоровым и счастливым. </p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Солнечные лучи дарят заряд бодрости, энергии, способствуют выработке в организме витамина Д.
          Витамин Д3 является естественной профилактикой рака, сердечно-сосудистых заболеваний и диабета, увеличивает плотность костной ткани и улучшает иммунную функцию.</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Звуки Природы. Пение птиц, шелест листьев, журчание ручья – дает терапевтический эффект, снижает уровень гормонов стресса и кровяное давление.
          Одними из самых целительных звуков считаются звуки воды: водопады, ручьи, дождь.</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Цвета Природы. Очень хорошо, если каждый день человек может соприкасаться с красками всего спектра, смотреть на красоту цветов, деревьев.
          Наблюдение врачей в санаторных парках подтвердили лечебное влияние цвета природы на человека: успокаивающе действуют на нервную систему.
          Если наблюдать цвета на природе, то мозг человека начинает функционировать на более высоком когнитивном уровне.</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Воздух. Качественная разница между воздухом в помещении и свежим воздухом луга или леса огромная.
          Воздух в помещении испорчен газами, исходящими из синтетических материалов. Природный воздух совершенно другой по составу, в нем больше жизни, здоровья.</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Биоэнергия. Большой город опустошает человека, забирает энергию. Природа наполняет силами, радостью, жизнью.</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Приезжайте к нам, смотрите на небо, слушайте пение птиц, дышите свежим воздухом!
          </p>
        </div>
      </Col>
    </Row> */}
  </Layout >
);

export default splavy;

export const Head: HeadFC = () =>
  <>
    <title>Пронские сплавы на байдарках - Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/" />
    <meta property="og:title" content="Пронские сплавы" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/CollageProny2.png" />
  </>