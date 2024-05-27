import React, { CSSProperties } from 'react';
import {
    additionalFeature,
    additionalFeatureHeader,
    breadcrumb,
    breadcrumbItem,
    button,
    buttonMain,
    buttonRoutes,
    buttons,
    columnReverseMobile,
    container,
    darkBack,
    feature,
    featureHeader,
    featureNumber,
    feedback,
    feedbackItem,
    feedbackItemDoubleQuote,
    feedbackItemText,
    feedbackLink,
    feedbackPerson,
    feedbackPersonDate,
    feedbackPersonImage,
    feedbackPersonName,
    footer,
    footerLinks,
    grayBack,
    header,
    imageContainer,
    linearBack,
    logo,
    mainBanner,
    mainBannerText,
    mainBannerText1,
    mainBannerText2,
    mainBannerText2Br,
    mainBannerText3,
    mainBannerText3P,
    partner,
    partnerRow,
    row,
    rowHeader,
    rowImage,
    rowImageBigHeight,
    rowReversed,
    rowText,
    social,
    tinyRow,
    triangle,
    underlinedLink,
    video,
    videoContainer,
} from './splavy_detail.module.scss';

import ContactUs from './ContactUs';
import Glamping from './routes/Glamping';
import { HeadFC } from 'gatsby';
import HowToGetToUs from './HowToGetToUs';
import Layout from '../layout';
import OneDay from './routes/OneDay';
import SplavyFooter from './Footer';
import { StaticImage } from 'gatsby-plugin-image';
import ThreeDays from './routes/ThreeDays';
import TwoDays from './routes/TwoDays';

const GlampingPage = () => (
    <Layout>
        <div className={container} style={{ paddingTop: 0 }}>
            <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
                <ol className={breadcrumb}>
                    <li className={breadcrumbItem}><a href="/splavy/">Пронские сплавы</a></li>
                    <li className={breadcrumbItem}>/</li>
                    <li className={breadcrumbItem} aria-current="page">Сплав с ночёвкой в Глемпинге Берег на Проне
                    </li>
                </ol>
            </nav>
        </div>

        <div className={mainBanner} >
            <StaticImage style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }} src={'../../images/Splav/index/4.png'} alt={'Пронские сплавы - Проня 3 дня'} />
            <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', backgroundColor: 'rgba(3, 4, 2, 0.6)', }}>
                <div className={container}>
                    <div className={mainBannerText} style={{ marginTop: 10 }}>
                        <div className={`${mainBannerText1} headerFont`}><h1>Сплав с ночевкой в Глемпинге</h1></div>
                        <div className={`${mainBannerText3} headerText`}>
                            <div>
                                <p className={mainBannerText3P}>
                                    На природу со всеми благами цивилизации! <br /> Сплав с инструктором до Глемпинга по рекам Кердь и Проня. Разные варианты размещения: от шатров с кроватями, до бунгало с двухспальной кроватью, диваном и отдельным душем.</p>
                            </div>
                        </div>
                        <div className={`${mainBannerText3} headerText`}>
                            <div>
                                Цена: от 8000₽ <br /> детям до 14 лет 5000₽.
                                <br />
                                <div style={{ fontSize: 12 }}>*Бронирование производится по 50% предоплате. <br /> **В случае отказа более чем за 7 дней до мероприятия, предоплата возвращается в полном объеме</div>
                            </div>
                        </div>
                        <ContactUs />
                    </div>
                </div>
            </div>
        </div>


        <div className={container} style={{
            paddingTop: 40,
            paddingBottom: 20
        }}>
            <h3 className={`${rowHeader} headerFont`}>🚣‍♂️ Примерная программа слава</h3>
            <div className={`${row} ${rowReversed}`}>
                <div><StaticImage className={rowImage} width={800} src={'../../images/Splav/glamp/glemp1.jpeg'} alt={'Пронские сплавы - Глемпинг - 1 день'} /></div>
                <div className={rowText}>
                    <i style={{ fontSize: '18px', textAlign: "justify" }}>День 1</i>
                    <p style={{ fontSize: '18px', textAlign: "justify" }}>
                        10:00 – встреча в р.п. Пронск на стоянке глемпинга "Берег", трансфер на место старта.<br />
                        11:00 - инструктаж, получение снаряжение, загрузка байдарок, старт<br />
                        11:30 - сплав на байдарках<br />
                        13:00 - обед на стоянке, отдых<br />
                        14:00 - сплав на байдарках<br />
                        17:00 – прибытие на месте ночлега, отдых<br />
                        19:00 - ужин, душевные посиделки у костра
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className={`${row}`}>
                <div><StaticImage className={rowImage} src={'../../images/Splav/glamp/glemp3.jpeg'} height={600} width={800} alt={'Пронские сплавы - Глемпинг - 2 день'} /></div>
                <div className={rowText}>
                    <i style={{ fontSize: '18px', textAlign: "justify" }}>День 2</i>
                    <p style={{ fontSize: '18px', textAlign: "justify" }}>
                        09:00 – подъем, завтрак<br />
                        до 12:00 – свободное время, отдых и купание в Проне<br />
                    </p>
                </div>
            </div>
        </div>



        <div className={grayBack}>
            <div className={container}>
                <h3 className={`${rowHeader} headerFont`}>В цену входит</h3>

                <div className={row}>
                    <div>
                        <b style={{ fontSize: '18px', textAlign: "justify" }}>🚣‍♂️ Оборудование для сплава</b>
                        <p style={{ fontSize: '18px', textAlign: "justify" }}>Байдарки в собранном виде, гермомешки, спасжилеты, в т.ч. детские, дождевики</p>
                        <b style={{ fontSize: '18px', textAlign: "justify" }}>⛺️ Шатры в глемпинге</b>
                        <p style={{ fontSize: '18px', textAlign: "justify" }}>Удобные шатры для ночевки на природе с электричеством и кроватями. Также есть возможность снять сафари-тент</p>
                        <b style={{ fontSize: '18px', textAlign: "justify" }}>🍲 Трехразовое горячее питание</b>
                        <p style={{ fontSize: '18px', textAlign: "justify" }}>Обед, ужин, завтрак, обед. Все 2 дня наш опытный повар готовит для вас лучшие походные блюда, добавляя вкус к вашему приключению.</p>
                        <b style={{ fontSize: '18px', textAlign: "justify" }}>🚍 Трансфер</b>
                        <p style={{ fontSize: '18px', textAlign: "justify" }}>Трансфер от Пронска к месту старта и обратно</p>
                    </div>
                </div>
            </div>


            <div className={container}>
                <div className="container text">
                    <h3 className={`${rowHeader} headerFont`}>Что взять с собой</h3>
                    <div className={row}>
                        <div>
                            <b style={{ fontSize: '18px', textAlign: "justify" }}>🚿 Средства личной гигиены</b>
                            <p style={{ fontSize: '18px', textAlign: "justify" }}>полотенце, мыло, зубная паста и щётка, туалетная бумага и т.д.</p>
                            <b style={{ fontSize: '18px', textAlign: "justify" }}>💧 Питьевая вода</b>
                            <p style={{ fontSize: '18px', textAlign: "justify" }}>в удобной бутылке или нескольких маленьких, суммарно не менее 1,5 литров на человека</p>
                            <b style={{ fontSize: '18px', textAlign: "justify" }}>👕 Запасная одежда</b>
                            <p style={{ fontSize: '18px', textAlign: "justify" }}>теплый свитер, теплые носки, обувь в байдарку (сланцы, кроксы), обувь на стоянку (кроссовки, кеды), головной убор, солнцезащитные очки, ветровка, шорты, спортивные штаны</p>
                            <b style={{ fontSize: '18px', textAlign: "justify" }}>☀️ Крем от загара</b>
                            <p style={{ fontSize: '18px', textAlign: "justify" }}>пригодится вам, если вы склонны к обгоранию кожи на солнце</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className={container}>
            <h3 className={`${rowHeader} headerFont`}>Кому идеально подходит маршрут?</h3>
            <div className={row}>
                <div>
                    <b style={{ fontSize: '18px', textAlign: "justify" }}>👨‍👩‍👧‍👦 Семейным</b>
                    <p style={{ fontSize: '18px', textAlign: "justify" }}>Байдарки безопасные и очень устойчивые. На речке Проня хорошее течение есть перекаты но нет опасных порогов - это значит что путешествие будет безопасным и не скучным. 3 дня сплава  (2 ночи в палатке) - идеальное количество дней для время проведения с семьей на природе</p>
                    <b style={{ fontSize: '18px', textAlign: "justify" }}>🤟 Компаниям друзей</b>
                    <p style={{ fontSize: '18px', textAlign: "justify" }}>Вместе побыть на природе, расслабиться и не думать о мелочах, наслаждаясь общением друг с другом</p>
                    <b style={{ fontSize: '18px', textAlign: "justify" }}>🛶 Ищущим новых интересных знакомств и впечатлений</b>
                    <p style={{ fontSize: '18px', textAlign: "justify" }}>Это же интересно оказываться в нестандартной для себя ситуации и знакомить с новыми людьми, не правда ли?</p>
                    <b style={{ fontSize: '18px', textAlign: "justify" }}>🐟 Рыболовам</b>
                    <p style={{ fontSize: '18px', textAlign: "justify" }}>На остановках можно рыбачить, вечером и на рассвете клёв хороший</p>
                    <b style={{ fontSize: '18px', textAlign: "justify" }}>👨‍💼 Коллегам</b>
                    <p style={{ fontSize: '18px', textAlign: "justify" }}>Провести время совместно проходя маршрут, пообщаться в максимально неформальной обстановке, за два дня сплава многое можно обсудить</p>
                    <b style={{ fontSize: '18px', textAlign: "justify" }}>🙂 На самом деле всем кто любит приключения</b>
                    <p style={{ fontSize: '18px', textAlign: "justify" }}>Откройте красоту Пронского района, Рязанской области вместе с нами</p>
                </div>
            </div>
        </div>

        <HowToGetToUs />

        <div className={container}>
            <h3 id="routes" className={`${rowHeader} headerFont`}>Также может быть интересно</h3>
            <div className={row} style={{ alignItems: 'start' }}>
                <TwoDays />
                <OneDay />
                <ThreeDays />
            </div>
        </div>
        <SplavyFooter style={{ marginTop: 80 }} />
    </Layout>
);

export default GlampingPage;

export const Head: HeadFC = () =>
    <>
        <title>Сплав с ночёвкой в Глемпинге Берег на Проне - Пронск, Рязанская область</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vpronske.ru/splavy/glamping/" />
        <meta property="og:title" content="Проня (2 Дня/1 Ночь)" />
        <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
        <meta property="og:image" content="https://vpronske.ru/splavy/three_day/CollageProny1.png" />
    </>