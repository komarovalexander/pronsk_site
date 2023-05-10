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

const pronya = () =>  (
  <Layout>
    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div>
                <StaticImage src="../../images/Splav/Prony/CollageProny1.png" className="rounded" alt="Пронские сплавы"/>
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
          <h3 style={{textAlign: "center"}}>Отдых на природе с комфортом - это про нас</h3>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Все передвижения проходят на байдарках, не отягощенных грузом, так как все нужные вещи для лагеря мы берем на себя и подготавливаем его во время нашего сплава.
          Это значительно сэкономит и время, и силы участников. На лёгких байдарках передвигаться значительно веселее и комфортнее.
          Приготовление еды мы также берем на себя и предоставляем горячее питание. В наших палатках очень уютно и мягко спать за счет домашнего матраса.
          Мы попытались создать все условия, чтобы вы могли наслаждаться в полной мере сплавом и природой. 
          Блягодаря сотрудничеству с перкрасным <a href='https://pronyaglamping.ru/'>Глемпинг-парком БЕРЕГ</a> вам будет доступна вся инфраструктура глемпинга (туалет, душ, интернет, пляж и т.д.)</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>Кердь - это не большая по ширине речка, извилистая и неглубокая, а скорость течения на ней вполне умеренная.
          Во время сплава вас будет окружать пение птиц, шелест листьев, журчание ручья, приятная прохлада от реки и тень от деревьев.
          Вокруг много живности, рядом летают бабочки, плавают утки, пасутся коровки.<br />
          Проня - широкая речка со спокойным течением,  отличается умиротворением, тишиной и спокойствием.
          Здесь в нетронутом уголке среднерусской природы встречают рассветы, слушают пени птиц, рыбачат и отдыхают от городской суеты.
          Здесь нет шумных компаний и большой публики, места, здесь отдаленные для «купальщиков и любителей шашлыков».</p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>В Проне водятся разнообразные рыбы, мидии и раки, т.к. условия для размножения и обитания в ней подходящие. Они оптимальны для всех типов, даже хищных.
          Места тут красивые, для отдыха, для души. Луга, поля, холмы, перелески – вот, что находится по разные стороны от берегов Прони.
          Если стоять на одном берегу, то открывается необъятный обзор на долины и равнины, можно долго смотреть на красивые пейзажи.
          Отдых на реке заряжает энергией и дарит массу приятных ощущений. Данный маршрут (протяжённостью ≈ 31 км) подходит всем желающим, включая новичков.
          Байдарки у нас пластиковые очень надежные и устойчивые.</p>
          <i style={{fontSize: '18px', textAlign: "justify"}}>Стоимость 2-дневного сплава 5000 р. с человека, для детей до 14 лет скидка 2000р. Входит:<br />
          - байдарки в собранном виде, спасжилеты, в т.ч. детские, костровое оборудование<br />
          - палатки, мягкие матрасы в палатку<br />
          - спальники<br />
          - гермомешки<br />
          - трехразовое горячее питание<br />
          - подготовленное для отдыха и ночлега место<br />
          - трансфер к месту старта и обратно<br /></i>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Для бронирования и по всем возникающим вопросам звоните или пишите в мессенджеры по телефону <a href="tel:+79521233539">8(952)123-35-39</a> (<a href="https://vk.com/pronskie_splavy">Мы ВКонтакте</a>).<br /></b>
          <i style={{fontSize: '18px', textAlign: "justify"}}>*Бронирование производится по 50% предоплате.
          В случае отказа за 3 дня до мероприятия или в связи с погодными условиями, предоплата возвращается в полном объеме.</i>
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
        <div className="container text" style={{paddingTop: 30}}>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Примерная программа однодневного сплава:<br /></b>
          <i style={{fontSize: '18px', textAlign: "justify"}}>День 1</i>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          12:00 – прибытие в р.п. Пронск к нашему дому, трансфер на место старта.<br />
          12:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
          13:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          15:00 - горячий обед на свободной стоянке, отдых<br />
          16:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          19:00 – встречаем вас с готовым лагерем, игры на берегу, ужин, душевные посиделки у костра
          </p>
          <i style={{fontSize: '18px', textAlign: "justify"}}>День 2</i>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          09:00 – подъем, завтрак<br />
          10:30 - сплав на байдарках с остановками для фотографирования и купания<br />
          14:00 - финиширование у Пронского моста, обратный трансфер к дому<br />
          </p>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          Все передвижения проходят на байдарках, не отягощенных грузом, так как все нужные вещи для лагеря мы берем на себя и подготавливаем его во время вашего сплава.
          Это значительно сэкономит и время, и силы участников. На лёгких байдарках передвигаться значительно веселее и комфортнее.</p>
        </div>
      </Col>
    </Row> */}

    <Row style={{padding: '40px 0'}}>
      <Col>
        <div className="container text" style={{paddingTop: 30}}>
          <h3 style={{textAlign: "center"}}>Примерная программа однодневного сплава</h3>
          <i style={{fontSize: '18px', textAlign: "justify"}}>День 1</i>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          10:00 – прибытие в р.п. Пронск к нашему дому, трансфер на место старта.<br />
          10:30 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
          11:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          13:00 - обед на стоянке, отдых<br />
          14:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          17:00 – прибытие в глемпинг, прогулка по городу, фотосессия с Пакровского бугра<br /> 
          19:00 - приготовление шашлыков, душевные посиделки у костра
          </p>
          <i style={{fontSize: '18px', textAlign: "justify"}}>День 2</i>
          <p style={{fontSize: '18px', textAlign: "justify"}}>
          08:00 – подъем, завтрак<br />
          10:00 - сплав на байдарках с остановками для фотографирования и купания<br />
          14:00 - финиширование в селе Погореловка, обратный трансфер к дому<br />
          <i style={{fontSize: '18px', textAlign: "justify"}}>По желанию подбирается удобное вам время для сплава.</i>
          </p>
        </div>
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
          <h3 style={{textAlign: 'center'}}>Что взять с собой в поход</h3>
          <i style={{fontSize: '18px', textAlign: 'justify'}}>Всё, что вам понадобится в походе - это личные вещи, которые поместятся в небольшой рюкзачок. Всё остальное мы вам предоставим!<br /></i>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Средства личной гигиены</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>полотенце, мыло, зубная паста и щётка, туалетная бумага и т.д.</p>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Питьевая вода</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>в удобной бутылке или нескольких маленьких, суммарно не менее 1,5 литров на человека</p>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Запасная одежда</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>теплый свитер, теплые носки, обувь в байдарку (сланцы, кроксы), обувь на стоянку (кроссовки, кеды), головной убор, солнцезащитные очки, ветровка, шорты, спортивные штаны</p>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Крем от загара и средство от комаров </b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>пригодится вам, если вы склонны к обгоранию кожи на солнце</p>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Термос с чаем, печеньки, бутерброды</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>на воде тратится много калорий, так что перекусить точно захочется, а отдохнуть на воде попивая чай это отдельное удовольствие</p>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Ваши любимые соусы, овощи</b>
          <p style={{fontSize: '18px', textAlign: "justify"}}>чтобы шашлык стал еще вкуснее</p>
          <b style={{fontSize: '18px', textAlign: "justify"}}>Кружки, ложки, тарелки</b>
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