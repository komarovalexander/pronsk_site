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

const kerd1 = () => (
  <Layout>
    <div className="container text" style={{paddingTop: 50}}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div>
            <StaticImage src="../images/Splav/Kerd/CollageKerd.png" className="rounded" alt="Пронские сплавы" style={{width: '100%', height: 'auto'}}/>
            <Carousel.Caption style={captionStyle}>
            <h1>1 День</h1>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="container text" style={{paddingTop: 50}}>
      <h2 style={{textAlign: 'center'}}>Кердь</h2>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Это не большая по ширине речка, извилистая и неглубокая, а скорость течения вполне умеренная. 
      Во время сплава вас будет окружать тишина, нарушаемая только пение птиц, полеты бабочек, приятная прохлада от реки и тень от деревьев. 
      В этом месте вы точно почувствуете уединение с природой и перезагрузитесь от городского ритма и суеты. 
      Данный маршрут (протяжённостью ≈ 18 км)  подходит всем желающим, включая новичков. 
      Взрослый могут взять с собой детей, которым исполнилось уже 6 лет. Байдарки у нас пластиковые очень надежные и устойчивые.</p>
      <i style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 1-дневного сплава 2000 р., для детей до 18 лет скидка 1000р. Входит:<br />
      - байдарки в собранном виде<br />
      - спасжилеты, в т.ч. детские<br />
      - гермомешки<br />
      - туристические коврики<br />
      - трансфер к месту старта и обратно<br /></i>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджер по телефону 8(952)123-35-39 (c 10:00 до 20:00).</b>
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
      <b style={{fontSize: '18px', textAlign: "justify"}}>Примерная программа однодневного сплава:</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>
      10:30 – прибытие в г.Пронск к нашему дому, трансфер на место старта. Добраться до города можно на общественном транспорте или на собственном автомобиле, припаркуем его у нашего дома<br />
      11:00 - 11:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
      11:30 - 17:00 - сплав на байдарках с остановками для фотографирования и купания<br />
      17:00 - финиширование у Пронского моста, обратный трансфер к дому
      </p>
    </div>

    <div className="container text" style={{paddingTop: 50}}>
      <h3 style={{textAlign: 'center'}}>Что взять с собой в поход</h3>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Питьевая вода</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>в удобной бутылке или нескольких маленьких</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Головной убор и солнце защитные очки</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>уберегут вас от солнечных лучей</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Крем</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>крем от загара пригодится вам если вы склонны к обгоранию кожи на солнце</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Бутерброды, фрукты, овощи</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>на воде тратится много калорий, так что перекусить точно захочется</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Обувь в байдарку</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>сланцы, кроксы</p>
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

export default kerd1;