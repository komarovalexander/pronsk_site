import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ru'; // without this line it didn't work

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import moment from 'moment';
import React, { CSSProperties, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Button, Carousel, Col, Container, Modal, Row } from 'react-bootstrap';

import Layout from '../layout';

moment.locale('ru')

const localizer = momentLocalizer(moment)
const captionStyle: CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#00000059'
};
const events = [
  {
    end: '09.02.2023',
    start: '09.02.2023',
    title: '2-дневный сплав'
  },
  {
    end: '09.02.2023',
    start: '09.02.2023',
    title: '1-дневный сплав свободно 6 мест'
  },
  {
    end: '09.02.2023',
    start: '09.02.2023',
    title: '1-дневный сплав свободно 6 мест'
  },];
const calenderEvents = events.map(e => ({ title: e.title, start: moment(e.start, 'DD.MM.YYYY'), end: moment(e.end, 'DD.MM.YYYY').add(1, 'd') }))


const kerd = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <Container>
      <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/splavy/">Пронские сплавы</a></li>
          <li className="breadcrumb-item active" aria-current="page">Экспресс-сплав река Кердь</li>
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
                    <h1>Экспресс-сплав река Кердь</h1>
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
            <p style={{ fontSize: '18px', textAlign: "justify" }}>⏱️ Быстрое приключение: Сплав, организованный по принципу "быстро и ярко", позволит вам насладиться водными приключениями за короткий срок,
            данный маршрут протяженностью ≈ 7 км (2-3 часа).
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
            <i style={{ fontSize: '18px', textAlign: "justify" }}>Стоимость 1-дневного сплава 2000/2500р. (будни/выходной) с человека, детям до 14 лет скидка 1000р. Входит:<br />
              - байдарки в собранном виде<br />
              - сопровождение<br />
              - спасжилеты, в т.ч. детские<br />
              - гермомешки<br />
              - трансфер с Пронска к месту старта и обратно<br />
              - обед (включен в выходной сплав)<br /></i>
            <b style={{ fontSize: '18px', textAlign: "justify" }}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону <a href="tel:+79521233539">8(952)123-35-39</a> (<a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>).<br /></b>
            <i style={{ fontSize: '18px', textAlign: "justify" }}>*Бронирование производится по 50% предоплате.
              В случае отказа за 3 дня до мероприятия, предоплата возвращается в полном объеме.</i>
          </div>
        </Col>
      </Row>

      <Row style={{ padding: '40px 0' }}>
        <Col>
          <div className="container text">
            <h3 style={{ textAlign: "center" }}>Маршрут</h3>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6fbda1eea2609666e1b3b6e4120aac58e80e83b0ebebe0e62c4392117a84993f&amp;source=constructor" width="100%" height="400"></iframe>
          </div>
        </Col>
      </Row>

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
            onSelectEvent={(e) => {
              <Modal show={show} onHide={handleShow}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            }}
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
        <div className="container text">
          <b style={{fontSize: '18px', textAlign: "justify"}}>Примерная программа однодневного сплава:</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          10:30 – прибытие в р.п. Пронск к нашему дому, трансфер на место старта.<br />
          11:00 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
          11:30 - сплав на байдарках с остановками для фотографирования и купания<br />
          17:00 - финиширование у Пронского моста, обратный трансфер к дому
          </p>
        </div>
      </Col>
    </Row> */}

      <Row style={{ backgroundColor: '#eef0f2', padding: '40px 0' }}>
        <Col>
          <div className="container text">
            <h3 style={{ textAlign: "center" }}>Примерная программа экспресс-сплава</h3>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>
              ⏰<i style={{ fontSize: '18px', textAlign: "justify" }}> По желанию подбирается удобное вам время для сплава.<br /></i>
              🚗 10:00 – прибытие в р.п. Пронск в Глемпинг берег, трансфер на место старта.<br />
              🛶 10:15 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
              🚣‍♂️ 10:30 - сплав на байдарках с остановками для фотографирования и купания<br />
              🚐 12:30 - финиширование и обратный трансфер к дому<br />
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
            <b style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Перекус на обед</b>
            <p style={{ fontSize: '18px', textAlign: "justify" }}>на воде тратится много калорий, так что перекусить точно захочется</p>
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
    <title>Кердь дневной сплав на байдарках - Пронск, Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/kerd/" />
    <meta property="og:title" content="Кердь-Проня (Дневной сплав)" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/splavy/kerd/CollageKerd.png" />
  </>
