import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ru'; // without this line it didn't work

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import moment from 'moment';
import React, { CSSProperties, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Button, Carousel, Col, Modal, Row } from 'react-bootstrap';

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
const calenderEvents = events.map(e => ({ title: e.title, start: moment(e.start, 'DD.MM.YYYY'), end: moment(e.end, 'DD.MM.YYYY').add(1, 'd')}))


const kerd = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
 return (
  <Layout>
    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Kerd/CollageKerd.jpg" className="rounded" alt="Пронские сплавы?"/>
                <Carousel.Caption style={captionStyle}>
                <h1>Кердь (Дневной сплав)</h1>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
    </Row>

    <Row style={{backgroundColor: '#eef0f2', padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <p style={{fontSize: '18px', textAlign: "justify"}}>Кердь - небольшой речки с приятным течением, 
          напоминающей горную, каменистую, с поворотами и мини порогами, удивительными видами и витвистыми деревьями по берегам.
          Во время сплава вас будет окружать пение птиц, шелест листьев, журчание ручья, приятная прохлада от реки и тень от деревьев.
          Вокруг много живности, рядом летают стрекозы (занесены в красную книгу), плавают утки, пасутся коровки и барашки. Отдых на реке заряжает энергией и дарит массу приятных ощущений.
          В этом месте вы точно почувствуете уединение с природой и отдохнете от городского ритма и суеты.
          Данный маршрут - протяжённостью ≈ 7 км (2-3 ч.) подходит всем желающим.</p>
          <i style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 1-дневного сплава 2000/3000р. (будни/выходной) с человека, детям до 14 лет скидка 1000р. Входит:<br />
          - байдарки в собранном виде<br/>
          - сопровождение<br/>
          - спасжилеты, в т.ч. детские<br/>
          - гермомешки<br/>
          - трансфер с Пронска к месту старта и обратно<br/>
          - обед (включен в выходной сплав)<br/></i>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону <a href="tel:+79521233539">8(952)123-35-39</a> (<a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>).<br /></b>
          <i style={{fontSize: '18px', textAlign: "justify"}}>*Бронирование производится по 50% предоплате.
          В случае отказа за 3 дня до мероприятия или в связи с погодными условиями, предоплата возвращается в полном объеме.</i>
        </div>
      </Col>
    </Row>

    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: "center"}}>Маршрут</h3>
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

    <Row style={{backgroundColor: '#eef0f2', padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: "center"}}>Примерная программа однодневного сплава</h3>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          <i style={{fontSize: '18px', textAlign: "justify"}}>По желанию подбирается удобное вам время для сплава.<br /></i>
          10:00 – прибытие в р.п. Пронск, трансфер на место старта.<br />
          10:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
          11:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          12:00 - обед на месте остановки<br />
          12:30 - сплав на байдарках с остановками для фотографирования и купания<br />
          14:00 - финиширование и обратный трансфер к дому<br />
          </p>
        </div>
        </Col>
    </Row>

    
    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel interval={null}>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/1.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/2.JPG" className="rounded" alt="Пороня"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/3.JPG" className="rounded" alt="Проня"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/4.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/5.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/6.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/7.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/8.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/9.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/10.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/11.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/12.JPG" className="rounded" alt="Пороня"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/13.JPG" className="rounded" alt="Проня"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/14.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/15.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/16.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/17.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/18.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/19.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/20.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/20-1.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/21.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/22.JPG" className="rounded" alt="Пороня"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/23.JPG" className="rounded" alt="Проня"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/24.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/25.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/26.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/27.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/28.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/29.JPG" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
    </Row>


    <Row style={{backgroundColor: '#eef0f2', padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <h3 style={{textAlign: 'center'}}>Что взять с собой в поход</h3>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Питьевая вода</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>в удобной бутылке или нескольких маленьких</p>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Перекус на обед</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>на воде тратится много калорий, так что перекусить точно захочется</p>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Запасная одежда</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>обувь в байдарку (сланцы, кроксы), головной убор, солнцезащитные очки</p>
        </div>
      </Col>
    </Row>

    {/* <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/1.png" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/2.png" className="rounded" alt="Пороня"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/3.png" className="rounded" alt="Проня"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/9.png" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/4.png" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/5.png" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/10.png" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/6.png" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/7.png" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <StaticImage  src="../../images/Splav/Kerd/8.png" className="rounded" alt="Кердь"/>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
    </Row> */}

    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
              <iframe width='100%' height='500' src="https://www.youtube.com/embed/JOSEilZ7slQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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