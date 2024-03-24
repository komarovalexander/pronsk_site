import React, { CSSProperties } from 'react';
import {
  additionalFeature,
  additionalFeatureHeader,
  block,
  button,
  buttonMain,
  buttonRoutes,
  buttons,
  container,
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
  row,
  rowHeader,
  rowImage,
  rowImageBigHeight,
  rowReversed,
  rowSubHeader,
  rowText,
  social,
  tinyRow,
  triangle,
  underlinedLink,
  video,
  videoContainer,
} from './splavy.module.scss';

import { HeadFC } from 'gatsby';
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image';
import bannerImage from '../images/Splav/index/banner.png';
import feedbackDoubleQuoteImage from '../images/Splav/index/15.svg';
import feedbackImage from '../images/Splav/index/14.png';
import logoImage from '../images/Splav/logo.png';
import odnoklassniki from '../images/odnoklassniki.svg';
import { scrollToId } from '../utils';
import vk from '../images/vk.svg';

const splavy = () => (
  <Layout>
    <div className={mainBanner} style={{ background: `url(${bannerImage})` }}>
      <div className={header} >
        <img src={logoImage} className={logo} alt="Пронские сплавы логотип" />
      </div>

      <div className={mainBannerText}>
        <div className={`${mainBannerText1} headerFont`}>Погрузитесь</div>
        <div className={`${mainBannerText2} h1Font`} >в мир<br className={mainBannerText2Br} /> водных<br /> приключений</div>
        <div className={`${mainBannerText3} d-flex justify-content-center headerText`}>
          <p className={mainBannerText3P}>Ищете идеальный способ сбежать от городской суеты и ощутить вдохновение природы? Добро пожаловать в мир наших захватывающих путешествий на байдарках по чистым рекам Пронского района Рязанской области! 🌿</p>
        </div>
        <div className={buttons}>
          <button className={buttonRoutes} onClick={() => {
            scrollToId('#routes');
          }}>Маршруты</button>
          <a className={buttonMain} href='tel:+79521233539'>Звоните +79521233539</a>
        </div>
      </div>
    </div>

    <div className={container}>
      {/*<div className={`${rowSubHeader}`}>Почему выбирают нас</div>*/}
      <div className={`${rowHeader} headerFont`}>Наша миссия</div>
      <div className={row}>
        <div><StaticImage className={rowImage} src={'../images/Splav/index/1.jpeg'} alt={'Наша миссия'} /></div>
        <div className={rowText}>
          Мы хотим чтобы люди с разным опытом путешествий видели красоту природы вокруг нас.<br /><br />
          Для новичков и для семей с детьми, и просто тех кто хочет отдохнуть на природе с комфортом - мы расчистили маршрут на реке Кердь которая впадает в Проню, с ночевкой в оборудованном глемпинге: с парковкой, душем, санузлом, всем необходимым оборудованием для отдыха, развлечений и различными вариантами размещения.
          <br /><br />
          Для опытных путешественников мы сами разрабатываем наши авторские маршруты по местам где редко бывает человек. <br /><br />
          Мы влюблены в Пронский район Рязанской области и хотим, чтобы вы увидели его нашими глазами. Мы знаем здесь каждый уголок, и готовы поделиться с вами его историей и красотой.   </div>

      </div>
    </div>

    <div className={container}>
      <div className={`${rowHeader} headerFont`}>Наши преимущества</div>
      <div className={`${row} ${rowReversed}`}>
        <div><StaticImage className={rowImage} src={'../images/Splav/index/3.jpeg'} alt={'Пронские сплавы - Наши преимущества'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>01</span>Для всей семьи</div>
            <div>Наши походы подходят для любого уровня подготовки. Пригласите семью и друзей. Для детей у нас большие скидки!</div>
          </div>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>02</span>Всё включено</div>
            <div>Начиная от трансфера и предоставления необходимого оборудования для похода, заканчивая вкусным питанием на маршруте. Ваш отдых в надежных руках - вам только нужно расслабиться и получать удовольствие. Наши байдарки, местного Рязанского производства - удобные надежные и безопасные</div>
          </div>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>03</span>Мы живем приключениями</div>
            <div>Наши гиды знают каждый поворот реки, они сделают все для вашего безопасного и захватывающего путешествия</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={`${row}`}>
        <div><StaticImage className={rowImage} src={'../images/Splav/index/2.jpeg'} alt={'Пронские сплавы - повар и инструктор'} /></div>
        <div className={rowText}>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>04</span>Разнообразные маршруты</div>
            <div>Хотите ли вы удалиться от цивилизации на несколько дней? Или хотите полностью комфортный отдых с душем и ночевкой в бунгало с двухспальной кроватью? - у нас есть маршрут для каждого</div>
          </div>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>05</span>Вкусное питание</div>
            <div>Наш походный повар готовит для вас вкусные блюда прямо на берегу, добавляя вкус к вашему приключению</div>
          </div>
          <div className={feature}>
            <div className={featureHeader}>
              <span className={featureNumber}>06</span>Ежедневные походы</div>
            <div>Предлагаем сплавы каждый день, в том числе и в будни</div>
          </div>
        </div>
      </div>
    </div>

    <div className={container}>
      <div className={videoContainer}>
        <iframe className={video} src="https://www.youtube.com/embed/sQ2tOg3mrrs?si=SADGqVcuJLkjJrQI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>
      </div>
    </div>

    <div className={linearBack}>
      <div className={container}>
        <div id="routes" className={`${rowHeader} headerFont`}>Наши маршруты</div>
        <div className={row} style={{ alignItems: 'start' }}>
          <div className={feature}>
            <StaticImage className={rowImage} style={{ marginBottom: 15 }} src={'../images/Splav/index/5.jpg'} alt={'Пронские сплавы - 1 день'} />
            <div className={featureHeader}>
              1 День</div>
            <div className={rowText}>Сплав с инструктором по реке Кердь (приблизительно 2-3 часа), с трансфером из Пронска. <br /><br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: 2000р с человека, детям до 14 лет скидка 1000р</div>
            <a className={button} href='/splavy/kerd'>Подробнее</a>
          </div>

          <div className={feature}>
            <StaticImage className={rowImage} style={{ marginBottom: 15 }} src={'../images/Splav/index/8.jpg'} alt={'Пронские сплавы - 2 дня'} />
            <div className={featureHeader}>2 Дня</div>
            <div className={rowText}>Сплав по реке Кердь с впаданием в Проню. Ночёвка на Проне в оборудованом глемпинге. Отдых в режиме всё включено: Питание, трансфер, инструкторы и собранные палатки и много другое. <br /> <br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: 7000р с человека, детям до 14 лет скидка 3000р</div>
            <a className={button} href="/splavy/pronya">Подробнее</a>
          </div>

          <div className={feature}>
            <StaticImage className={rowImage} style={{ marginBottom: 15 }} src={'../images/Splav/index/4.png'} alt={'Пронские сплавы - 3 дня'} />
            <div className={featureHeader}>3 Дня</div>
            <div className={rowText} >Автономный сплав по реке Проня на 3 дня в сопровождении инструктора, все необходимое оборудование мы предоставляем.<br /> <br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: 8500р. с человека, детям до 14 лет скидка 2000р</div>
            <a className={button} href="three_day">Подробнее</a>
          </div>
        </div>
      </div>
    </div>


    <div className={container}>
      <div className={`${rowHeader} headerFont`}>Дополнительные услуги</div>
      <div className={row} style={{ alignItems: 'start' }}>
        <div className={feature} style={{ position: 'relative' }}>
          <StaticImage className={`${rowImage} ${rowImageBigHeight}`} style={{ marginBottom: 15 }} src={'../images/Splav/index/6.jpg'} alt={'Пронские сплавы - прокат'} />

          <div className={additionalFeature}>
            <div className={additionalFeatureHeader}>
              Прокат с доставкой и трансфером
            </div>
            <a className={underlinedLink} href="/splavy/rent/">Узнать больше</a>
          </div>
        </div>

        <div className={feature} style={{ position: 'relative' }}>
          <StaticImage className={`${rowImage} ${rowImageBigHeight}`} style={{ marginBottom: 15 }} src={'../images/Splav/index/9.jpeg'} alt={'Пронские сплавы - организация корпоратива'} />

          <div className={additionalFeature}>
            <div className={additionalFeatureHeader}>
              Организация корпоратива
            </div>
            <a className={underlinedLink} href="/splavy/company/">Узнать больше</a>
          </div>
        </div>
      </div>
    </div>


    <div className={container}>
      <div className={`${rowHeader} headerFont`} style={{ marginBottom: 0 }}>Наши партнёры</div>
      <div className={row} style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <div className={feature}>
          <a href="https://pronyaglamping.ru/" target="_blank"><StaticImage className={partner} style={{ marginBottom: 15 }} src={'../images/Splav/index/10.png'} alt={'Пронские сплавы - глемпинг берег'} /></a>
        </div>

        <div className={feature}>
          <a href="https://kayakstart.ru/" target="_blank"><StaticImage className={partner} style={{ marginBottom: 15 }} src={'../images/Splav/index/11.png'} alt={'Пронские сплавы - байдарки старт'} /></a>
        </div>

        <div className={feature}>
          <a href="https://vk.com/pronsky_meat_shop" target="_blank"><StaticImage className={partner} style={{ marginBottom: 15 }} src={'../images/Splav/index/12.png'} alt={'Пронские сплавы - Пронский мясной цех'} /></a>
        </div>

        <div className={feature}>
          <a href="https://vk.com/equestrian_club_julian" target="_blank"><StaticImage className={partner} style={{ marginBottom: 15 }} src={'../images/Splav/index/13.png'} alt={'Пронские сплавы - Конно-спортивный клуб Юлианна'} /></a>
        </div>
      </div>
    </div>


    <div className={grayBack}>
      <div className={container}>
        {/*<div className={`${rowSubHeader}`}>Почему выбирают нас</div>*/}
        <div className={`${rowHeader} headerFont`}>Как до нас добраться</div>
        <div className={`${row} ${tinyRow}`}>
          <div className={rowText}>
            Мы находимся в Рязанской области, Пронский район.<br />
            Добраться до р.п. Пронск можно на общественном транспорте или собственном автомобиле, для вас будет бесплатная охраняемая парковка.<br />
            Мы всего в 50 км от Рязани.
          </div>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A77d7e495cb017ecead7fa8df335a1c15454e29de12272bda8c806e292d3a9852&amp;source=constructor" width="100%" height="400"></iframe>
        </div>
      </div>
    </div>
    <div>

      <div className={container} style={{ background: `url(${feedbackImage})`, backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
        <div className={`${row} ${feedback}`}>

          <div className={feedbackItem}>
            <div className={feedbackItemText}>
              <img src={feedbackDoubleQuoteImage} className={feedbackItemDoubleQuote} />
              <p>Август' 23 кто бы мог подумать... но да! Сплав на байдарках в хорошей компании и при хорошей организации - это живописно, трудно, но весело, очень эмоционально и даже вкусно. Всем рекомедуем Пронские сплавы</p>
              <div className={triangle}></div>
            </div>
            <div className={feedbackPerson}>
              <StaticImage width={56} height={56} src={'../images/Splav/index/17.jpg'} className={feedbackPersonImage} alt='Света Варзина' />

              <div style={{ position: 'relative' }}>
                <div className={feedbackPersonName}>Света Варзина</div>
                <div className={feedbackPersonDate}>9 авг 2023</div>
                <a href="https://vk.com/wall138077588_960" target='_blank' className={feedbackLink}>ссылка на отзыв</a>
              </div>
            </div>
          </div>

          <div className={feedbackItem}>
            <div className={feedbackItemText}>
              <img src={feedbackDoubleQuoteImage} className={feedbackItemDoubleQuote} />
              <p>Сплав 29.07.23 по рекам Пронского района Кердь & Проня. Прошли около 18 км. <br />
                Спасибо Роман Комаров, который контролировал наш процесс сплава ).<br />
                Рекомендую,всем!</p>

              <div className={triangle}></div>
            </div>
            <div className={feedbackPerson}>
              <StaticImage width={56} height={56} src={'../images/Splav/index/16.jpeg'} className={feedbackPersonImage} alt='Ольга Голубева' />
              <div style={{ position: 'relative' }}>
                <div className={feedbackPersonName}>Ольга Голубева</div>
                <div className={feedbackPersonDate}>2 авг 2023</div>
                <a href="https://vk.com/wall4302350_800" target='_blank' className={feedbackLink}>ссылка на отзыв</a>
              </div>
            </div>
          </div>

          <div className={feedbackItem}>
            <div className={feedbackItemText}>
              <img src={feedbackDoubleQuoteImage} className={feedbackItemDoubleQuote} />
              <p>Сплав по реке Кердь в Рязанской области вместе с Пронскими сплавами -это было просто здорово. Нам с Геной очень понравился этот вид активного отдыха, а если ещё и организаторы классные - отдых становится незабываемым!</p>
              <div className={triangle}></div>
            </div>
            <div className={feedbackPerson}>
              <StaticImage width={56} height={56} src={'../images/Splav/index/18.jpeg'} className={feedbackPersonImage} alt='' />
              <div style={{ position: 'relative' }}>
                <div className={feedbackPersonName}>Наталья Слепцова</div>
                <div className={feedbackPersonDate}>13 авг 2023</div>
                <a href="https://vk.com/wall299994005_145" target='_blank' className={feedbackLink}>ссылка на отзыв</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={footer} >
        <div><img src={logoImage} className={logo} alt="Пронские сплавы логотип" /></div>
        <div className={footerLinks} >
          <a href="#routes">Маршруты</a>
          <a href="/splavy/rent/">Аренда</a>
          <a href="/splavy/company/">Организация корпоратива</a>
        </div>
        <div className={social}>
          <a href="https://vk.com/pronskie_splavy" target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' /></a>
          <a href="https://ok.ru/group/70000002650473" target='_blank' title="Одноклассники"><img src={odnoklassniki} alt='Одноклассники' /></a>
        </div>
      </div>
    </div>
  </Layout >
);

export default splavy;

export const Head: HeadFC = () =>
  <>
    <title>Пронские сплавы на байдарках - Рязанская область</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vpronske.ru/splavy/" />
    <meta property="og:title" content="Пронские сплавы" />
    <meta property="og:description" content="Cплавы на байдарках - Пронск, Рязанская область" />
    <meta property="og:image" content="https://vpronske.ru/static/banner-9d3d031189a9504700fa5a4803d8fe90.png" />
  </>