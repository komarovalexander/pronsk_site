import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ru'; // without this line it didn't work

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import moment from 'moment';
import React, { CSSProperties } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import Layout from '../layout';

moment.locale('ru')

const localizer = momentLocalizer(moment)
const captionStyle: CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#00000059'
};
const events = [
  {
    end: '10.02.2023',
    start: '09.02.2023',
    title: '2-х дневный сплав забронирован. Осталось 6 мест на однодневный сплав'
  }];

const calenderEvents = events.map(e => ({ title: e.title, start: moment(e.start, 'DD.MM.YYYY'), end: moment(e.end, 'DD.MM.YYYY').add(1, 'd') }))

const rent = () => (
  <Layout>
    <Container>
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/splavy/">Пронские сплавы</a></li>
          <li className="breadcrumb-item active" aria-current="page">Прокат-Аренда с доставкой и трансфером</li>
        </ol>
      </nav>
    </Container>
    
    <Row style={{ padding: '40px 0' }}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Prony/rent.jpg" className="rounded" alt="Пронские сплавы" />
                <Carousel.Caption style={captionStyle}>
                  <h1>Прокат-Аренда с доставкой и трансфером</h1>
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
      </Col>
    </Row>

    <Row style={{ padding: '40px 0' }}>
      <Col>
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
      </Col>
    </Row>
  </Layout>
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