import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ru'; // without this line it didn't work

import Link from 'gatsby-link';
import { StaticImage } from 'gatsby-plugin-image';
import moment from 'moment';
import React, { CSSProperties } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Carousel } from 'react-bootstrap';

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

const prony = () => (
  <Layout>
    <div className="container text" style={{paddingTop: 50}}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div>
            <StaticImage src="../images/Splav/Prony/CollageProny.png" className="rounded" alt="Пронские сплавы"/>
            <Carousel.Caption style={captionStyle}>
            <h1>2 Дня/1 Ночь</h1>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="container text" style={{paddingTop: 50}}>
      <h2 style={{textAlign: 'center'}}>Проня</h2>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Это не большая по ширине речка, извилистая и неглубокая, а скорость течения вполне умеренная. 
      Во время сплава вас будет окружать тишина, нарушаемая только пение птиц, полеты бабочек, приятная прохлада от реки и тень от деревьев. 
      В этом месте вы точно почувствуете уединение с природой и перезагрузитесь от городского ритма и суеты. 
      Данный маршрут (протяжённостью ≈ 18 км)  подходит всем желающим, включая новичков. 
      Взрослый могут взять с собой детей, которым исполнилось уже 6 лет. Байдарки у нас пластиковые очень надежные и устойчивые.</p>
      <i style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 2-дневного сплава 5000 р., для детей до 18 лет скидка 2000р. Входит:<br />
      - байдарки в собранном виде, спасжилеты, в т.ч. детские, костровое оборудование<br />
      - палатки, мягкие матрасы в палатку, спальники<br />
      - гермомешки, туристические коврики<br />
      - четырехразовое горячее питание<br />
      - подготовленное для отдыха и ночлега место<br />
      - трансфер к месту старта и обратно<br /></i>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону 8(952)123-35-39 (c 10:00 до 20:00).</b>
    </div>

    <div className="container text" style={{paddingTop: 50}}>
      <i style={{fontSize: '18px', textAlign: "justify"}}>* Бронирование производится по 50% предоплате, предварительно можете ознакомиться с графиком занятости путешествий.
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
  
    <div className="container text" style={{paddingTop: 50}}>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Примерная программа однодневного сплава:<br /></b>
      <i style={{fontSize: '18px', textAlign: "justify"}}>День 1</i>
      <p style={{fontSize: '18px', textAlign: "justify"}}>
      11:00 – прибытие в г.Пронск к нашему дому, трансфер на место старта. Добраться до города можно на общественном транспорте или на собственном автомобиле, припаркуем его у нашего дома (от Рязани до нас 30-40 минут езды)<br />
      11:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
      12:00 - сплав на байдарках с остановками для фотографирования и купания<br />
      14:00 - горячий обед на свободной стоянке, отдых<br />
      15:00 - сплав на байдарках с остановками для фотографирования и купания<br />
      18:00 – встречаем вас с готовым лагерем, игры на берегу, ужин, походная баня, душевные посиделки у костра
      </p>
      <i style={{fontSize: '18px', textAlign: "justify"}}>День 2</i>
      <p style={{fontSize: '18px', textAlign: "justify"}}>
      09:00 – подъем, завтрак<br />
      10:30 - сплав на байдарках с остановками для фотографирования и купания<br />
      13:00 - горячий обед на свободной стоянке, отдых<br />
      14:00 - сплав на байдарках<br />
      16:00 – финиширование у Пронского моста, обратный трансфер к дому 
      </p>
    </div>

    <div className="container text" style={{paddingTop: 50}}>
      <h3 style={{textAlign: 'center'}}>Что взять с собой в поход</h3>
      <i style={{fontSize: '18px', textAlign: 'justify'}}>Всё, что вам понадобится в походе с компанией "Пронские сплавы", - это личные вещи, которые поместятся в небольшой рюкзачок. Всё остальное мы вам предоставим!<br /></i>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Средства личной гигиены</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>полотенце, мыло, зубная паста и щётка, туалетная бумага и т.д.</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Спальник</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>мы бесплатно предоставляем спальники всем, у кого их не оказалось. Однако имейте в виду, что спальный мешок - это сугубо индивидуальная вещь.</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Питьевая вода</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>в удобной бутылке или нескольких маленьких, суммарно не менее 1,5 литров на человека</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Запасная одежда</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>теплый свитер, теплые носки, обувь в байдарку (сланцы, кроксы), обувь на стоянку (кроссовки, кеды), головной убор, солнце защитные очки, ветровка, шорты, спортивные штаны</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Крем от загара и средство от комаров </b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>пригодится вам если вы склонны к обгоранию кожи на солнце, от комаров мы развешиваем спирали, на месте ночлега, но еще одно средство лишним не будет </p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Аптечка</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>с индивидуальным набором лекарств (состав зависит от "слабостей" вашего организма), дежурная аптечка у нас имеется</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Термос с чаем, печеньки, бутерброды</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>на воде тратится много калорий, так что перекусить точно захочется, а отдохнуть на воде попивая чай это отдельное удовольствие</p>
    </div>

    <div className="container text" style={{paddingTop: 50, paddingBottom: 50}}>
      <Carousel>
        <Carousel.Item>
          <div>
          <iframe width='100%' height='700' src="https://www.youtube.com/embed/A9zsM14ONlI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Prony/13.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Prony/14.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Prony/14.png" className="rounded" alt="Проня"/>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </Layout>
);

export default prony;