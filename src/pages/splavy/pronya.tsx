import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ru'; // without this line it didn't work

import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Carousel, Col, Row } from 'react-bootstrap';
import React, { CSSProperties } from 'react';

import { HeadFC } from 'gatsby';
import Layout from '../layout';
import { StaticImage } from 'gatsby-plugin-image';
import moment from 'moment';

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

const pronya = () => (
  <Layout>
    <Row style={{ padding: '40px 0' }}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Prony/2day.jpg" className="rounded" alt="Пронские сплавы" />
                <Carousel.Caption style={captionStyle}>
                  <h1>Кердь-Проня (2 Дня/1 Ночь)</h1>
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
          <p style={{ fontSize: '18px', textAlign: "justify" }}>🏕️ <a href="https://pronyaglamping.ru/">Глемпинг</a> под звездами: Ночуйте в уютных палатках, где вся инфраструктура доступна для вашего комфорта и удобства.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩‍👧‍👦 Для всей семьи: Наши походы подходят для любого уровня подготовки.
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
          <p style={{ fontSize: '18px', textAlign: "justify" }}>🔄 Ежедневные сплавы: Предлагаем <b>сплавы каждый день</b>, в том числе и в будни.
          </p>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>Отправляйтесь на приключение по рекам Кердь-Проня и откройте для себя всю их красоту и магию! 🌄
          </p>
          <i style={{ fontSize: '18px', textAlign: "justify" }}><b>Стоимость 2-дневного сплава 5500/6000р.</b> (будни/выходной) с человека, детям до 14 лет скидка 2000р. Входит:<br />
            - байдарки в собранном виде, спасжилеты, в т.ч. детские<br />
            - сопровождение<br />
            - палатки, мягкие матрасы в палатку, спальники<br />
            - личная посуда<br />
            - гермомешки<br />
            - трехразовое горячее питание<br />
            - подготовленное для отдыха и ночлега место<br />
            - трансфер к месту старта и обратно<br />
            - дождевики<br /></i>
          <b style={{ fontSize: '18px', textAlign: "justify" }}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону <a href="tel:+79521233539">8(952)123-35-39</a> (<a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>).<br /></b>
          <i style={{ fontSize: '18px', textAlign: "justify" }}>*Бронирование производится по 50% предоплате.
            В случае отказа за 7 дней до мероприятия, предоплата возвращается в полном объеме.</i>
        </div>
      </Col>
    </Row>

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
      </Col>
    </Row> */}

    <Row style={{ padding: '40px 0' }}>
      <Col>
        <div className="container text" style={{ paddingTop: 30 }}>
          <h3 style={{ textAlign: "center" }}>Примерная программа двухдневного сплава</h3>
          <i style={{ fontSize: '18px', textAlign: "justify" }}>День 1</i>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>
            10:00 – прибытие в р.п. Пронск в Глемпинг берег, трансфер на место старта.<br />
            10:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
            11:00 - сплав на байдарках с остановками для фотографирования и купания<br />
            13:00 - обед на стоянке, отдых<br />
            14:00 - сплав на байдарках с остановками для фотографирования и купания<br />
            17:00 – прибытие в глемпинг, отдых<br />
            19:00 - ужин, душевные посиделки у костра
          </p>
          <i style={{ fontSize: '18px', textAlign: "justify" }}>День 2</i>
          <p style={{ fontSize: '18px', textAlign: "justify" }}>
            09:00 – подъем, завтрак<br />
            09:30 - прогулка до <a href="/blog/pronsk/#pokrovka">Покровского бугра</a><br />
            11:00 - сплав на байдарках с остановками для фотографирования и купания<br />
            11:30 - посещение <a href="/blog/pronsk/#juliana">местной фермы</a><br />
            12:30 - сплав на байдарках с остановками для фотографирования и купания<br />
            13:00 - обед в в глемпинге, конец путешествия
          </p>
        </div>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
                <iframe width='100%' height='500' src="https://www.youtube.com/embed/sQ2tOg3mrrs?si=SADGqVcuJLkjJrQI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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
  </Layout>
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