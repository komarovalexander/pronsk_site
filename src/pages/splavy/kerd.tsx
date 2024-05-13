import { Carousel, Col, Container, Modal, Row } from 'react-bootstrap';
import React, { CSSProperties } from 'react';

import { HeadFC } from 'gatsby';
import Layout from '../layout';
import { StaticImage } from 'gatsby-plugin-image';

const captionStyle: CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#00000059'
};

const kerd = () => {

  return (
    <Layout>
      <Container>
        <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/splavy/">Пронские сплавы</a></li>
            <li className="breadcrumb-item active" aria-current="page">Однодневный сплав, реки: Кердь и Проня</li>
          </ol>
        </nav>
      </Container>

      <Row style={{ padding: '40px 0' }}>
        <Col>
          <div className="container text">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <div>
                  <StaticImage src="../../images/Splav/Prony/1day.jpg" className="rounded" alt="Пронские сплавы?" />
                  <Carousel.Caption style={captionStyle}>
                    <h1>Однодневный сплав, реки: Кердь и Проня</h1>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>

      <Row style={{ backgroundColor: '#eef0f2', padding: '40px 0' }}>
        <Col>
          <div className="container text">
            <h3 style={{ textAlign: 'center' }}>🚣‍♂️ Особеность маршрута</h3>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>✨ Сервис "все включено": Наслаждайтесь беззаботным приключением с нашим полным сервисом,
              из необходимого вам понадобится только питьевая вода в удобной бутылке.
            </p><p style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Кулинарное волшебство на берегу реки: Наш опытный походный повар готовит для вас изысканные блюда прямо на берегу, добавляя вкус к вашему приключению.
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩‍👧‍👦 Для всей семьи: Наши походы подходят для любого уровня подготовки.
              Пригласите семью и друзей. Для детей у нас большие скидки!
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍🎓 Опытные гиды: Наши профессиональные гиды знают каждый поворот реки, безопасное и захватывающее приключение.
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>🛶 Качественное снаряжение: Мы предоставляем современные и надежные байдарки, чтобы ваше путешествие было комфортным и беззаботным.
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>🐦 Обилие животных: Во время сплава по реке Кердь можно насладиться пением птиц, шелестом листьев и журчанием ручья.
              Вокруг много живности, таких как стрекозы (занесенные в красную книгу), утки, коровки и барашки, что создает удивительную атмосферу встречи с дикой природой.
            </p>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>🌿 Отправляйтесь на неповторимое приключение по реке Кердь!🌊
            </p>
            <i style={{ fontSize: '18px', textAlign: "justify" }}>Стоимость 1-дневного сплава 3500₽ с человека, детям до 14 лет 2000₽ Входит:<br />
              - байдарки в собранном виде<br />
              - сопровождение<br />
              - спасжилеты, в т.ч. детские<br />
              - гермомешки<br />
              - трансфер с Пронска к месту старта и обратно<br />
              - полноценный обед<br /></i>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону <a href="tel:+79521233539">8(952)123-35-39</a> (<a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>).<br /></b>
            <i style={{ fontSize: '18px', textAlign: "justify" }}>*Бронирование производится по 50% предоплате.
              В случае отказа за 7 дней до мероприятия, предоплата возвращается в полном объеме.</i>
          </div>
        </Col>
      </Row>


      <Row style={{ backgroundColor: '#eef0f2', padding: '40px 0' }}>
        <Col>
          <div className="container text">
            <h3 style={{ textAlign: "center" }}>Примерная программа экспресс-сплава</h3>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>
              10:00 – прибытие в р.п. Пронск в Глемпинг берег, трансфер на место старта.<br />
              10:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
              11:00 - сплав на байдарках с остановками для фотографирования и купания<br />
              13:00 - обед на стоянке, отдых<br />
              14:00 - сплав на байдарках с остановками для фотографирования и купания<br />
              17:00 – прибытие на финиш<br />
            </p>
          </div>
        </Col>
      </Row>


      <Row style={{ padding: '40px 0' }}>
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
      </Row>


      <Row style={{ backgroundColor: '#eef0f2', padding: '40px 0' }}>
        <Col>
          <div className="container text">
            <h3 style={{ textAlign: 'center' }}>Что взять с собой в поход</h3>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>💧 Питьевая вода</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>в удобной бутылке или нескольких маленьких</p>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🧢 Запасная одежда</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>обувь в байдарку (сланцы, кроксы), головной убор, солнцезащитные очки</p>
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
    </Layout>
  )
};

export default kerd;

export const Head: HeadFC = () =>
  <>
    <title>Кердь и Проня дневной сплав на байдарках - Пронск, Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/kerd/" />
    <meta property="og:title" content="Кердь-Проня (Дневной сплав)" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/kerd/CollageKerd.png" />
  </>
