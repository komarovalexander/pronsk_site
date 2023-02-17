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

const kerd1 = () => (
  <Layout>
    <div className="container text" style={{paddingTop: 30}}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div>
            <StaticImage src="../images/Splav/Kerd/CollageKerd.png" className="rounded" alt="Пронские сплавы?"/>
            <Carousel.Caption style={captionStyle}>
            <h1>Кердь-Проня (Дневной сплав)</h1>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="container text" style={{paddingTop: 30, paddingBottom: 30, backgroundColor: '#eef0f2'}}>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Кердь - это не большая по ширине речка, извилистая и неглубокая, а скорость течения на ней вполне умеренная. 
      Во время сплава вас будет окружать пение птиц, шелест листьев, журчание ручья, приятная прохлада от реки и тень от деревьев. 
      Вокруг много живности, рядом летают бабочки, плавают утки, пасутся коровки.
      В этом месте вы точно почувствуете уединение с природой и отдохнете от городского ритма и суеты. 
      Данный маршрут (протяжённостью ≈ 18 км)  подходит всем желающим, включая новичков. 
      Взрослый могут взять с собой детей, которым исполнилось уже 6 лет. Байдарки у нас пластиковые очень надежные и устойчивые.</p>
      <i style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 1-дневного сплава 2000 р.(от 2-х человек), для детей до 18 лет скидка 1000р. Входит:<br />
      - байдарки в собранном виде<br/>
      - спасжилеты, в т.ч. детские<br/>
      - гермомешки<br/>
      - туристические коврики<br/>
      - трансфер к месту старта и обратно<br/></i>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону 8(952)123-35-39 (c 10:00 до 20:00).</b>
    </div>

    <div className="container text" style={{paddingBottom: 30}}>
      <h3 style={{textAlign: 'center'}}>График занятости путешествий</h3>
      <i style={{fontSize: '18px', textAlign: "justify"}}>* Бронирование производится по 30% предоплате.
      В случае отказа за 3 дня до мероприятия, предоплата возвращается в полном объеме.</i>
      <Calendar
        localizer={localizer}
        culture={'ru'}
        startAccessor="start"
        onSelectEvent={(e) => {
console.log(e);
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
      10:30 – прибытие в г.Пронск к нашему дому, трансфер на место старта.<br />
      11:00 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
      11:30 - сплав на байдарках с остановками для фотографирования и купания<br />
      17:00 - финиширование у Пронского моста, обратный трансфер к дому
      </p>
    </div>

    <div className="container text" style={{paddingTop: 30, paddingBottom: 30, backgroundColor: '#eef0f2'}}>
      <h3 style={{textAlign: 'center'}}>Что взять с собой в поход</h3>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Питьевая вода</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>в удобной бутылке или нескольких маленьких</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Головной убор и солнце защитные очки</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>уберегут вас от солнечных лучей</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Крем от загара</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>пригодится вам если вы склонны к обгоранию кожи на солнце</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Термос с чаем, печеньки, бутерброды, фрукты, овощи</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>на воде тратится много калорий, так что перекусить точно захочется, а отдохнуть на воде попивая чай это отдельное удовольствие</p>
      <b style={{fontSize: '18px', textAlign: "justify"}}>Запасная одежда</b>
      <p style={{fontSize: '18px', textAlign: "justify"}}>обувь в байдарку (сланцы, кроксы), обувь на стоянки (кроссовки, кеды), головной убор, солнце защитные очки</p>
    </div>

    <div className="container text" style={{paddingBottom: 30}}>
      <Carousel>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/1.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/2.png" className="rounded" alt="Пороня"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/3.png" className="rounded" alt="Проня"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/4.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/5.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/6.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/7.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Kerd/8.png" className="rounded" alt="Кердь"/>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="container text" style={{paddingTop: 50, paddingBottom: 50}}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div>
          <iframe width='100%' height='730' src="https://www.youtube.com/embed/JOSEilZ7slQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </Layout>
);

export default kerd1;