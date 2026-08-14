import React from 'react';
import { graphql, HeadFC, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import Layout from './layout';
import vk from '../images/vk.svg';
import telegram from '../images/telegram.svg';
import enduroLogo from '../images/enduro/logo.png';
import {
  breadcrumb,
  breadcrumbItem,
  button,
  buttonMain,
  buttonRoutes,
  buttons,
  classesGrid,
  columnReverseMobile,
  container,
  darkBack,
  feature,
  featureHeader,
  grayBack,
  header,
  logo,
  mainBanner,
  mainBannerText,
  mainBannerText1,
  mainBannerText3,
  mainBannerText3P,
  row,
  rowHeader,
  rowImage,
  rowReversed,
  rowText,
  videoContainer,
} from './splavy/splavy_detail.module.scss';

const REGISTRATION_URL = 'https://marshalone.ru/card/35828450-e604-448b-a977-26d377639e25';
const VK_GROUP_URL = 'https://vk.com/club197036793';
const VK_CHAT_URL = 'https://vk.me/join/AZQ1d85PpCJ0_fHAlDdI_FCW';
const TG_CHAT_URL = 'https://t.me/+A9vXnt3MvYY1MzI6';
const MAP_URL = 'https://yandex.ru/maps/?pt=39.578099,54.143658&z=14&l=map';
const RACE_POST_URL = 'https://vk.com/wall-197036793_497';

const EnduroGallery = () => {
  const data = useStaticQuery<{
    allFile: {
      nodes: Array<{
        name: string;
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        } | null;
      }>;
    };
  }>(graphql`
    query EnduroGallery {
      allFile(filter: { relativeDirectory: { eq: "enduro/new" } }, sort: { name: ASC }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(width: 600, aspectRatio: 1.5, placeholder: BLURRED, transformOptions: { fit: COVER })
          }
        }
      }
    }
  `);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 24,
        margin: '0 10px',
      }}
    >
      {data.allFile.nodes.map((node) => {
        const image = getImage(node.childImageSharp?.gatsbyImageData ?? null);

        return image ? (
          <GatsbyImage
            key={node.name}
            image={image}
            alt={`Гонка «Косопузые» — ${node.name}`}
            style={{ flex: '1 1 280px', maxWidth: 420, width: '100%', borderRadius: 10 }}
          />
        ) : null;
      })}
    </div>
  );
};

const EnduroPage = () => (
  <Layout>

    <div className={mainBanner}>
      <StaticImage
        style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%' }}
        src={'../images/enduro/new/DSCF6863.JPG'}
        alt={'Участники эндуро-гонки Косопузые перед стартом'}
      />
      <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', backgroundColor: 'rgba(3, 4, 2, 0.65)' }}>
        <div className={container}>
          <div className={mainBannerText} style={{ marginTop: 0 }}>
            <div className={header}>
              <img src={enduroLogo} className={logo} alt='Enduro Пронск «Косопузые»' style={{ height: 200, opacity: 0.75 }} />
            </div>
            <div className={`${mainBannerText1} headerFont`}>
              <h1 style={{ margin: 0 }}>Enduro Пронск «Косопузые»</h1>
            </div>
            <div className={`${mainBannerText3} headerText`}>
              <p className={mainBannerText3P}>
                Команда эндуро из Пронска: тренировки в лесу, друзья на трассе и гонки для тех, кто не тормозит перед корнем.
              </p>
            </div>
            <div className={`${buttons} ${columnReverseMobile}`}>
              <a className={buttonMain} href='#race'>
                Гонка 5–6 сентября
              </a>
              <div style={{ display: 'flex', gap: 15, fontSize: 18, alignItems: 'center' }}>
                Наш чат:
                <a href={VK_CHAT_URL} target='_blank' rel='noreferrer' title='ВКонтакте'>
                  <img src={vk} alt='ВКонтакте' />
                </a>
                <a href={TG_CHAT_URL} target='_blank' rel='noreferrer' title='Telegram'>
                  <img src={telegram} alt='Telegram' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={container} id='race'>
      <h3 className={`${rowHeader} headerFont`} style={{ marginBottom: 20 }}>Эндуро-Гонка «Косопузые», Пронск, лес Шарки </h3>

      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <a
          className={button}
          href={REGISTRATION_URL}
          target='_blank'
          rel='noreferrer'
        >
          Регистрация на гонку
        </a>
      </div>
      <div style={{ marginTop: 0 }}>
        <div className={`${row} ${rowReversed}`}>
          <div>
            <StaticImage
              className={rowImage}
              width={500}
              src={'../images/enduro/анонс.jpg'}
              alt={'Гонка Косопузые — прохождение лесного препятствия'}
            /></div>
          <div style={{ flex: 1, marginBottom: 20 }}>
            <div className={rowText} style={{ maxWidth: 'none' }}>
              <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', gap: 20 }}>
                <div className={feature}>
                  <h4 className={featureHeader}>
                    Дата</h4>
                  <div>5–6 сентября 2026</div>
                </div>
                <div className={feature}>
                  <h4 className={featureHeader}>
                    Место</h4>
                  <div>Пронск, лес Шарки</div>
                </div>
                <div className={feature}>
                  <h4 className={featureHeader}>
                    Координаты</h4>
                  <div>39.578099, 54.143658</div>
                </div>

              </div>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abcbb3c5addae7dc5e5af8c2b645e2b5954bd645f355e0741bda9282cf0933bb7&amp;source=constructor" style={{
                height: "697px", width: "100%"
              }} frameBorder="0"></iframe>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={grayBack} style={{ paddingBottom: 60 }}>
      <div className={container} style={{ paddingTop: 70, paddingBottom: 0 }}>
        <div className={videoContainer}>
          <iframe
            src='https://vk.com/video_ext.php?oid=-197036793&id=456239329&autoplay=1'
            width='1100'
            height='550'
            allow='autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
            frameBorder='0'
            allowFullScreen
            title='Видео Enduro Пронск «Косопузые»'
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontSize: 18, textAlign: 'justify', paddingTop: 20, paddingBottom: 0 }}>
            Это не приглашение на пикник — это вызов. Здесь проверяют
            не только технику, но и тебя: насколько готов идти до конца, когда трасса ломает планы.
          </p>
        </div>
      </div>
    </div>


    <div className={container} style={{ paddingTop: 50, paddingBottom: 40 }}>
      <h3 className={`${rowHeader} headerFont`}>Классы</h3>
      <div className={classesGrid}>
        <div className={feature}>
          <StaticImage
            src='../images/enduro/class-silver.png'
            alt='Класс Серебро'
            style={{ width: '100%', height: 360 }}
            imgStyle={{ objectFit: 'contain' }}
          />
          <div>
            <h4 className={featureHeader}>Серебро</h4>
            <p className={rowText}>Для опытных райдеров, готовых к серьёзной трассе.</p>
          </div>
        </div>
        <div className={feature}>
          <StaticImage
            src='../images/enduro/class-gold.png'
            alt='Класс Золото'
            style={{ width: '100%', height: 420 }}
            imgStyle={{ objectFit: 'contain' }}
          />
          <div>
            <h4 className={featureHeader}>Золото</h4>
            <p className={rowText}>Для тех, кто готов выжимать максимум.</p>
          </div>
        </div>
        <div className={feature}>
          <StaticImage
            src='../images/enduro/class-bronze.png'
            alt='Класс Бронза'
            style={{ width: '100%', height: 320 }}
            imgStyle={{ objectFit: 'contain' }}
          />
          <div>
            <h4 className={featureHeader}>Бронза</h4>
            <p className={rowText}>Для первых уверенных шагов на эндуро-трассе.</p>
          </div>
        </div>
      </div>
    </div>

    {/*<div className={grayBack}>
      <div className={container} style={{ paddingTop: 40, paddingBottom: 20 }}>
        <h3 className={`${rowHeader} headerFont`}>Условия участия</h3>
        <div className={row}>
          <div style={{ maxWidth: 800, margin: '0 auto', fontSize: 18 }}>
            <ul>
              <li>Страховка жизни не менее 100 000 ₽</li>
              <li>Медицинская справка о допуске к соревнованиям</li>
            </ul>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 18, marginTop: 10 }}>Только для смелых и отвязных.</p>
      </div>
    </div>*/}
    <div className={grayBack}>
      <div className={container} style={{ paddingTop: 20, paddingBottom: 40 }}>
        <h3 className={`${rowHeader} headerFont`}>Галерея</h3>
        <EnduroGallery />
      </div>
    </div>

    {/*<div className={grayBack}>
      <div className={container} style={{ paddingTop: 40, paddingBottom: 20 }}>
        <h3 className={`${rowHeader} headerFont`}>Кто такие «Косопузые»</h3>
        <div className={`${row} ${rowReversed}`}>
          <div>
            <StaticImage
              className={rowImage}
              width={800}
              src={'../images/enduro/new/DSCF7077.JPG'}
              alt={'Участник гонки Косопузые в пронском лесу'}
            />
          </div>
          <div className={rowText} style={{ maxWidth: 560 }}>
            <p style={{ fontSize: 18, textAlign: 'justify' }}>
              <a href={VK_GROUP_URL} target='_blank' rel='noreferrer'>
                Enduro Пронск «Косопузые»
              </a>{' '}
              — местная команда и сообщество владельцев эндуро и кроссовых мотоциклов. Ребята прокладывают трассы через лес и овраги в
              районе Шарков, устраивают тренировки и собирают гонщиков со всей России.
            </p>
            <p style={{ fontSize: 18, textAlign: 'justify' }}>
              Эндуро здесь — не прогулка. Это характер: подняться после падения, пройти корень и уклон и доехать до финиша.
            </p>

            <p style={{ color: '#6d6d6d' }}>
              При поддержке: BRZ · No Limits · Пронский берег · Твой скутер · От мысли к детали · Пронские сплавы · В защите · Снято на душу ·
              ICITY · Здесь квадрики
            </p>
          </div>
        </div>

      </div>
    </div>*/}
    <div className={darkBack}>
      <div className={container} style={{ paddingTop: 40, paddingBottom: 20 }}>
        <div className={row} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div className={buttons}>
            <a className={buttonRoutes} href={VK_GROUP_URL} target='_blank' rel='noreferrer' title='ВКонтакте'>
              <img src={vk} alt='ВКонтакте' />
              Мы ВКонтакте
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default EnduroPage;

export const Head: HeadFC = () => (
  <>
    <title>Эндуро Пронск «Косопузые» — гонка 5–6 сентября 2026</title>
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://vpronske.ru/enduro/' />
    <meta property='og:title' content='Эндуро Пронск «Косопузые» — гонка 5–6 сентября' />
    <meta
      property='og:description'
      content='Команда эндуро из Пронска и гонка «Косопузые» в лесу Шарки 5–6 сентября. Регистрация, классы бронза / серебро / золото.'
    />
    <meta name='description' content='Enduro Пронск Косопузые: тренировки и гонка 5–6 сентября в лесу Шарки' />
  </>
);
