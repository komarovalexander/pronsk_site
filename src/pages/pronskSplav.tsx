import Link from 'gatsby-link';
import { StaticImage } from 'gatsby-plugin-image';
import React, { CSSProperties } from 'react';
import { Carousel } from 'react-bootstrap';

import Layout from './layout';

const captionStyle: CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#00000059'
};

const pronskSplav = () => (
  <Layout>
    <div className="container text" style={{paddingTop: 50}}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div>
            <StaticImage  src="../images/Splav/Prony/CollageProny.png" className="rounded" alt="Пронские сплавы"/>
            <Carousel.Caption style={captionStyle}>
            <h1>ПРОНСКИЕ СПЛАВЫ</h1>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="container text" style={{paddingTop: 30}}>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Считаете, что водные походы под силу только профессионалам активного туризма? Мы покажем, что это совсем не так. 
      Сплав по спокойным и живописным водоёмам Пронского района идеально подходят тем, кто впервые берёт в руки весла.</p>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Если вы хотите на один-два дня вырваться из городского ритма и вдохновиться красотой природы. 
      Предлагаем путешествия (от 2 до 13 человек, групп нет - только ваш коллектив) на байдарках, как однодневные (без ночевки), так и многодневные, по живописным рекам Рязанской области. 
      Сплавляетесь самостоятельно, опыт не обязателен. Сплавы в любой день. Сезон с 28 апреля и до конца сентября. Заказывать можно с 1 февраля.</p>
      <i style={{fontSize: '18px', textAlign: "justify"}}>Бронирование мест по телефону 8(952)123-35-39.</i>
    </div>
  


    <div className="container text" style={{paddingTop: 30}}>
      <div className="row">
        <div className="col">
          <div className="card">
            <StaticImage width={1000}  src="../images/Splav/Kerd/1.png" className="card-img-top" alt="Кердь" style={{width: '100%', height: 'auto'}}/>
            <div className="card-body">
              <h5 className="card-title">1 День </h5>
              <p className="card-text">Цена 2000р., детям до 14 скидка 1000р.</p>
              <a href="/splavy/kerd1" className="btn btn-primary">Подробнее</a>
            </div>
          </div> 
        </div>
        <div className="col">
          <div className="card">
            <StaticImage width={1000}  src="../images/Splav/Prony/4-2.jpg" className="card-img-top" alt="Проня" style={{width: '100%', height: 'auto'}}/>
            <div className="card-body">
              <h5 className="card-title">2 Дня/1 Ночь</h5>
              <p className="card-text">Цена 4000р., детям до 14 скидка 2000р.</p>
              <a href="/splavy/prony" className="btn btn-primary">Подробнее</a>
            </div>
          </div> 
        </div>
      </div>
    </div>

    <div className="container text" style={{paddingTop: 30}}>
      <h3 style={{textAlign: 'center'}}>Целебность природы</h3>
      <p style={{fontSize: '18px', textAlign: "justify"}}>У всех нас индивидуальные опыт общения с природой и причины, по которым мы хотим проводить с ней больше времени. 
      Для одних — это отдушина: свой дом и сад, выращивание цветов и овощей, забота о земле. Для других — это романтика, хождение по сырой траве, купание в речке, шашлыки по выходным. 
      А для кого то — это единственный шанс побыть вместе с семьёй, наполниться изнутри здоровьем и спокойствием.</p>
      <p style={{fontSize: '18px', textAlign: "justify"}}>Многочисленные исследования доказали, что времяпрепровождение на природе помогает справиться с проблемами психического здоровья, такими как тревога, депрессия, чувство одиночества. 
      Депрессия, по другому синдром большого города, — это заболевание 21 века, сегодня в мире от него страдают около 300 миллионов человек.
      Природа помогает взять тайм-аут, повышает активность и уверенность в собственных силах, улучшает физическое и моральное здоровье человека, делая его оптимистичнее и крепче.</p>
    </div>

    <div className="container text" style={{paddingTop: 50, paddingBottom: 50}}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div>
          <iframe width='100%' height='500' src="https://www.youtube.com/embed/A9zsM14ONlI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </Layout>
);

export default pronskSplav;