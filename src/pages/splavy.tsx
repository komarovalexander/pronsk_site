import { Carousel, Col, Row } from 'react-bootstrap';
import React, { CSSProperties } from 'react';

import { HeadFC } from 'gatsby';
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image';
import bannerImage from '../images/Splav/index/banner.png';
import logoImage from '../images/Splav/logo.png';

const captionStyle: CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#00000059'
};


const splavy = () => (
  <Layout>
    <div className='main-banner' style={{ height: 1200, width: '100%', backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
      <div className='header' style={{ padding: '32px 90px' }}>
        <img src={logoImage} alt="Пронские сплавы логотип" style={{ height: 100, }} />
        <div className='headerFont' style={{ color: 'white' }}>Погрузитесь</div>
      </div>
    </div>

    <Row style={{ backgroundColor: '#eef0f2', padding: '40px 0' }}>
      <Col>
        <div className="container text">
          <h3 style={{ textAlign: 'center' }}>🌊 Погрузитесь в мир водных приключений с нами! 🚣‍♂️</h3>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>Ищете идеальный способ сбежать от городской суеты и ощутить вдохновение природы?
            Добро пожаловать в мир наших захватывающих путешествий на байдарках по чистым рекам Пронского района Рязанской области! 🌿
          </p>
          <h4 style={{ textAlign: 'center' }}>🌅 Почему стоит выбрать нас?</h4>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩‍👧‍👦 Для всей семьи: Наши походы подходят для любого уровня подготовки.
            Пригласите семью и друзей. Для детей у нас большие скидки!
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>✨ Сервис "все включено": Наслаждайтесь беззаботным приключением с нашим полным сервисом,
            из необходимого вам понадобится только питьевая вода в удобной бутылке.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍🎓 Опытные гиды: Наши гиды живут приключениями, знают каждый поворот реки, они сделают все для вашего безопасного и захватывающего приключения.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>🛶 Качественное снаряжение: Наши байдарки, местного Рязанского производства, удобные надежные и безопасные. К ним мы предоставляем все необходимые вещи нужные вам в походе: палатки, спальники, мягкие коврики, гермомешки, дождевики, спасательные жилеты и тд.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>🌲 Разнообразные маршруты: От изолированных троп кристально чистых рек до живописных уголков природы — у нас есть маршрут для каждого.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Кулинарное волшебство на берегу реки: Наш опытный походный повар готовит для вас вкусные блюда прямо на берегу, добавляя вкус к вашему приключению.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>🔄 Ежедневные сплавы: Предлагаем <b>сплавы каждый день</b>, в том числе и в будни.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>🎉 Откройте новые горизонты вместе с нами! Забудьте о повседневности и наслаждайся звуками природы, птичьим пением и весельем в компаниях единомышленников.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>📞 Звоните <a href="tel:+79521233539">+79521233539</a> уже сегодня или пишите в <a href="https://t.me/pronskie_splavy">мессенджеры</a>, чтобы организовать свое исключительное путешествие! Покажи, что ты готов к новым приключениям. 🌈🌊
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>🚐 У нас также есть <a href="/splavy/rent">Прокат-Аренда</a> с доставкой и трансфером: У вас есть возможность организовать индивидуальный сплав по вашему маршруту или из предложенного нами.
            Организуем удобный трансфер и доставку оборудования в начало маршрута и с финиша. Предоставляем байдарки на любую реку Рязанской области и не только!
          </p>
        </div>
      </Col>
    </Row>

    <Row style={{ padding: '40px 0' }}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
                <iframe width='100%' height='550' src="https://www.youtube.com/embed/sQ2tOg3mrrs?si=SADGqVcuJLkjJrQI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
    </Row>
    <Row style={{ padding: '40px 0', backgroundColor: '#eef0f2', }}>
      <Col>
        <div className="container text">
          <h3 style={{ textAlign: 'center', paddingBottom: 30 }}>Наши маршруты</h3>
          <div className="row">
            <div className="col" style={{ marginBottom: 10 }}>
              <div className="card">
                <StaticImage width={1000} src="../images/Splav/Prony/1day.jpg" className="card-img-top" alt="Кердь" style={{ width: '100%', height: 'auto' }} />
                <div className="card-body">
                  <h5 className="card-title">Экспресс-сплав</h5>
                  <p className="card-text">Цена 2000/2500р. (будни/выходной) с человека, детям до 14 лет скидка 1000р.</p>
                  <a href="/splavy/kerd" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <StaticImage width={1000} src="../images/Splav/Prony/2day.jpg" className="card-img-top" alt="Проня" style={{ width: '100%', height: 'auto' }} />
                <div className="card-body">
                  <h5 className="card-title">2 Дня</h5>
                  <p className="card-text">Цена 5500/6000р. (будни/выходной) с человка, детям до 14 лет скидка 2000р.</p>
                  <a href="/splavy/pronya" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <StaticImage width={1000} src="../images/Splav/Prony/3day.jpg" className="card-img-top" alt="Кердь" style={{ width: '100%', height: 'auto' }} />
                <div className="card-body">
                  <h5 className="card-title">3 Дня</h5>
                  <p className="card-text">Цена 8500р. с человека, детям до 14 лет скидка 2000р.</p>
                  <a href="/splavy/three_day" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>

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