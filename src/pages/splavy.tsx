import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { CSSProperties } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

import Layout from './layout';

const captionStyle: CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#00000059'
};

const splavy = () => (
  <Layout>
    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
                <StaticImage  src="../images/Splav/Prony/CollageProny2.png" className="rounded" alt="Пронские сплавы"/>
                <Carousel.Caption style={captionStyle}>
                <h1>ПРОНСКИЕ СПЛАВЫ</h1>
              </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
          <i style={{fontSize: '18px', textAlign: "justify"}}>*Бронирование мест по телефону <a href="tel:+79521233539">8(952)123-35-39.</a> <a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a></i>
        </div>
      </Col>
    </Row>

    <Row style={{backgroundColor: '#eef0f2', padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: 'center'}}>О нас</h3>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Считаете, что водные походы под силу только профессионалам активного туризма? Мы покажем, что это совсем не так.
          Сплав по спокойным и живописным водоёмам Пронского района идеально подходят тем, кто впервые берёт в руки весла.</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Если вы хотите на один-два дня вырваться из городской суеты и вдохновиться красотой природы.
          Предлагаем путешествия (от 2 до 13 человек, групп нет - только ваш коллектив) на байдарках, как однодневные (без ночевки), так и многодневные, по живописным рекам Рязанской области.
          Сплавляетесь самостоятельно, опыт не обязателен. Сплавы в любой день. Сезон с 28 апреля и до конца сентября. Начинать бронировать можно с 1 февраля.</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Перезагрузитесь после трудовых будней, побыв наедине с природой, со своей семьей или близкими людьми.
          Ничто так не умиротворяет, как спокойный сплав по нашим рекам и посиделки у костра с прекрасным видом на звезды, вторая половинка точно оценит.
          Если хотите укрепить взаимоотношения с семьей, обязательно берите с собой детей, для них у нас скидка.
          Мы не представляем нашу жизнь без спорта, а когда это еще и приятно, то это двойное удовольствие.
          Так же, если ты молодой и активный, ты попал по адресу, тут ты получишь хорошую кардионагрузку и совместишь приятное с полезным.</p>
        </div>
      </Col>
    </Row>

    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: 'center', paddingBottom: 30}}>Наши маршруты</h3>
          <div className="row">
            <div className="col">
              <div className="card">
                <StaticImage width={1000}  src="../images/Splav/Kerd/1.png" className="card-img-top" alt="Кердь" style={{width: '100%', height: 'auto'}}/>
                <div className="card-body">
                  <h5 className="card-title">1 День </h5>
                  <p className="card-text">Цена 2000р.(от 2-х человек), детям до 14 скидка 1000р.</p>
                  <a href="/splavy/kerd1" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <StaticImage width={1000}  src="../images/Splav/Prony/4-2.jpg" className="card-img-top" alt="Проня" style={{width: '100%', height: 'auto'}}/>
                <div className="card-body">
                  <h5 className="card-title">2 Дня/1 Ночь</h5>
                  <p className="card-text">Цена 5000р.(от 4-х человек), детям до 14 скидка 2000р.</p>
                  <a href="/splavy/pronya" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>

    <Row style={{backgroundColor: '#eef0f2', padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: 'center'}}>Как до нас добраться</h3>
          <p style={{fontSize: '18px', textAlign: "justify"}}> Добраться до р.п. Пронск можно на общественном транспорте или на собственном автомобиле, припаркуем его у нашего дома. Далее уже дело за нами.
          Примерное время в дороге: от Рязани 45 минут; от Москвы 4 часа.</p>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad86e43f60d78d8158fd7d7953ffc5a3ff85f58aa0e5f60805ec54b35c9cbbcf7&amp;source=constructor" width="100%" height="400"></iframe>
          </div>
      </Col>
    </Row>

    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
              <iframe width='100%' height='500' src="https://www.youtube.com/embed/A9zsM14ONlI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
    </Row>

    <Row style={{backgroundColor: '#eef0f2', padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: 'center'}}>Целебность природы</h3>
          <i style={{fontSize: '18px', textAlign: "justify"}}>Во всех явлениях природы есть нечто чудесное (Аристотель)</i>
          <p style={{fontSize: '18px', textAlign: "justify"}}>У всех нас индивидуальные опыт общения с природой и причины, по которым мы хотим проводить с ней больше времени.
          Для одних — это отдушина: свой дом и сад, выращивание цветов и овощей, забота о земле. Для других — это романтика, хождение по сырой траве, купание в речке, шашлыки по выходным.
          А для кого то — это единственный шанс побыть вместе с семьёй, наполниться изнутри здоровьем и спокойствием.</p>
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
    </Row>
  </Layout>
);

export default splavy;

export const Head: HeadFC = () => <title>Пронские сплавы на байдарках - Рязанская область</title>