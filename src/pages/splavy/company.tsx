import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ru'; // without this line it didn't work

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import moment from 'moment';
import React, { CSSProperties } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Carousel, Col, Row } from 'react-bootstrap';

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

const calenderEvents = events.map(e => ({ title: e.title, start: moment(e.start, 'DD.MM.YYYY'), end: moment(e.end, 'DD.MM.YYYY').add(1, 'd')}))

const company = () =>  (
  <Layout>
    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Prony/company.jpg" className="rounded" alt="Пронские сплавы"/>
                <Carousel.Caption style={captionStyle}>
                <h1>Кердь-Проня (2 Дня/1 Ночь)</h1>
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
        <h3 style={{textAlign: 'center'}}>🚣‍♂️ Организуй незабываемый корпоративный сплав на байдарках с нами! 🌊</h3>
            <p style={{fontSize: '18px', textAlign: "justify"}}>Хотите подарить своей команде незабываемый отдых и укрепить ее дух единства? Приглашаем вас на наши корпоративные сплавы на байдарках, 
            где каждый участник получит заряд энергии, вдохновения и новых впечатлений!
            </p>
            <h4 style={{textAlign: 'center'}}>🌟 Почему выбирают нас для корпоративных мероприятий?</h4>
            <p style={{fontSize: '18px', textAlign: "justify"}}>✅ Повышение эффективности команды: Наше мероприятие на байдарках способствует
             укреплению взаимоотношений между сотрудниками и формированию единой команды.
            </p>
            <p style={{fontSize: '18px', textAlign: "justify"}}>🏕️ Отрыв от рутины: Уйдите от повседневных дел и окунитесь в атмосферу приключения на природе. 
            Наше мероприятие позволит вашей команде отвлечься от рабочих забот и насладиться природной красотой, вдохновляющей на новые свершения.
            </p>
            <p style={{fontSize: '18px', textAlign: "justify"}}>🍲 Кулинарные удовольствия: Наши мероприятия включают в себя вкусные пикники на берегу реки, 
            где каждый участник может насладиться изысканными блюдами и приятной беседой в неформальной обстановке.
            </p>
            <p style={{fontSize: '18px', textAlign: "justify"}}>✨ Организация "под ключ": Мы позаботимся обо всех деталях вашего мероприятия - от трансфера до пикников на берегу.
            </p>
            <p style={{fontSize: '18px', textAlign: "justify"}}>👨‍👩 Подходит для всех: Независимо от уровня подготовки и возраста участников, наши сплавы подойдут каждому. 
            Мы создадим программу, которая удовлетворит все потребности и пожелания вашей команды.
            </p>
            <p style={{fontSize: '18px', textAlign: "justify"}}>📞 Не упустите шанс устроить яркий и запоминающийся корпоративный отдых! 
            <a href="tel:+79521233539">Свяжитесь</a> с нами уже сегодня, чтобы обсудить детали вашего мероприятия и забронировать дату! 🌟🎉
            </p>
          <i style={{fontSize: '18px', textAlign: "justify"}}>Цена договорная (ориентировочная на наши организационные маршруты).<br />
          </i>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону <a href="tel:+79521233539">8(952)123-35-39</a> (<a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>).<br /></b>
        </div>
      </Col>
    </Row>

    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
            <div>
              <iframe width='100%' height='500' src="https://www.youtube.com/watch?v=sQ2tOg3mrrs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default company;

export const Head: HeadFC = () => 
<>
  <title>Проня 2дня/1ночь, сплавы на байдарках - Пронск, Рязанская область</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vpronske.ru/splavy/company/" />
  <meta property="og:title" content="Проня (2 Дня/1 Ночь)" />
  <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
  <meta property="og:image" content="https://vpronske.ru/splavy/three_day/CollageProny1.png" />
</>