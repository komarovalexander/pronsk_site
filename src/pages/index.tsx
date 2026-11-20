import * as React from 'react';

import {
  buttonRoutes,
  buttons,
  container,
  darkBack,
  footer,
  footerLinks,
  logo,
  row,
  rowHeader,
  rowReversed,
  rowText,
  social,
} from './splavy.module.scss';
import {
  mainBanner,
  mainBannerImage,
  mainBannerText,
  mainBannerText1,
  mainBannerText2,
  mainBannerText3,
  mainBannerText3P,
  guideLink,
  rowImage,
  rowTextHeader,
} from './index.module.scss';

import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';
import gerbImage from '../images/герб.png';
import telegram from '../images/telegram.svg';
import vk from '../images/vk.svg';
import max from '../images/max.svg';

const IndexPage = () => {
  return (
    <Layout>
      <div className={mainBanner} >
        <StaticImage className={mainBannerImage} src={'https://sun9-7.userapi.com/impg/Dlsl9k0WQ1p62E4sLwfA1kh7fthIPOTBiSgPwA/VK2fvLBqZpY.jpg?size=2560x1707&quality=95&sign=4a3fbdf90ad21c77d72967c2159a09e0&type=album'} alt={'Пронские сплавы '} />
        <div style={{
          position: 'absolute', zIndex: 1, height: '100%', width: '100%',
          top: 0
        }}>

          <div className={mainBannerText}>
            <div className={`${mainBannerText1}`}>Добро пожаловать</div>
            <h1 className={`${mainBannerText2}`} style={{ margin: 0 }}>В Пронск</h1>
            <div className={`${mainBannerText3}`}>
              <p className={mainBannerText3P}>Город с красивейшей природой, богатой историей, и приветливыми людьми</p>
            </div>
          </div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row} ${rowReversed}`}>
          <div className={rowText}>
            <h2 className={rowTextHeader}>
              <a href='/blog/pronsk/'>Достопримечательности Пронска</a>
            </h2>
            <p>Собрали 15 интересных мест в городе и районе: музей, монастырь, храмы, Покровский бугор, пещеры и активный отдых.</p>
            <p><a className={guideLink} href='/blog/pronsk/'><strong>Открыть путеводитель с маршрутом, картой и фотографиями</strong></a></p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/musey.jpg'} alt={'Пронский краеведческий музей'} /></div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row}`}>
          <div className={rowText}>
            <h2 className={rowTextHeader}>
              <a href='/blog/#places'>Нетронутая история</a></h2>
            <p>Множества столетиями нетронутых Храмов можно найти в разных локациях района. Прошлое ближе чем кажется</p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/церковь.png'} style={{ objectPosition: 'left center' }} alt={'Церкви'} /></div>
        </div>
      </div>


      <div className={container}>
        <div className={`${row} ${rowReversed}`}>
          <div className={rowText}>
            <h2 className={rowTextHeader}>
              Никто не забыт</h2>
            <p>Память, прошедшая через года, показана в виде величественных монументов в каждом поселении</p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/памятник.jpg'} alt={'Памятники ВОВ - Пронск'} /></div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row}`}>
          <div className={rowText}>
            <h2 className={rowTextHeader}>
              Отдых на природе</h2>
            <p>Рыбалка, палатки, купание в чистых реках, посиделки у костра, <a href='/splavy'>сплавы на байдарках</a>, <a href='/enduro/'>эндуро «Косопузые»</a></p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/Рыбалка4.jpg'} style={{ objectFit: 'contain' }} alt={'Отдых на природе - Пронск'} /></div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row} ${rowReversed}`}>
          <div className={rowText}>
            <h2 className={rowTextHeader}>
              <a href='/blog/pronsk/#monastery'>Спасо-Преображенский Пронский монастырь</a>
            </h2>
            <p>Место силы земли Пронской, где всегда рады любым гостям</p>
          </div>
          <div><StaticImage className={rowImage} src={'https://sun9-51.userapi.com/impg/RmrEwjRBKqMwYd3868GGLyS_wUgZwgvHgf2O2w/XhJtnQCF5q8.jpg?size=1919x1080&quality=95&sign=b313febee77f290b6f37d2e70ff043c0&type=album'} alt={'Спасо-Преображенский Пронский монастырь'} /></div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row}`}>
          <div className={rowText}>
            <h2 className={rowTextHeader}>
              <a href='/blog/#local-people'>Лучшие артисты</a></h2>
            <p>Люди - главное достояние Пронского района</p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/артисты.jpeg'} style={{ objectFit: 'contain' }} alt={'Лучшие артисты - Пронск'} /></div>
        </div>
      </div>


      <div className={container}>
        <div className={`${row} ${rowReversed}`}>
          <div className={rowText}>
            <h2 className={rowTextHeader}>
              Почувствуйте Русскую душу
            </h2>
            <p>Народные коллективы и опытные наставники сохраняют и развивают Русскую культуру</p>
          </div>
          <div><StaticImage className={rowImage} src={'https://sun9-50.userapi.com/impg/o0tHUVpQZOJ4kPlQIcF-UOWzQWJ_AvE2J4qgjQ/jqdPo64UMl8.jpg?size=1919x1280&quality=95&sign=993eabd477a08f02798d8927c1ed2c74&type=album'} alt={'Русская душа - Пронск'} /></div>
        </div>
      </div>


      <div className={darkBack}>
        <div className={container} style={{
          paddingTop: 40,
          marginTop: 80,
          paddingBottom: 20
        }}>
          <div className={`${rowHeader} headerFont`} style={{ marginBottom: 0, color: 'white' }}>Пронск в сети</div>
          <div className={row} style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className={buttons}>
              <a className={buttonRoutes} href='https://vk.com/v_pronske' target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' />Мы ВКонтакте</a>
              <a className={buttonRoutes} href='https://max.ru/join/UPqeSztstQjJMD4Io3rBs_7uTYfkJwpWOmllqGSugKE' target='_blank' title="MAX"><img src={max} alt='MAX' />Чат в MAX</a>
              <a className={buttonRoutes} href='https://t.me/+VSRt1ZFWllcyMzUy' target='_blank' title="Телеграм"><img src={telegram} alt='Телеграм' />Чат в телеграм</a>
            </div>
          </div>
        </div>
      </div>

      <div className={footer} >
        <div><img src={gerbImage} className={logo} alt="Пронские сплавы логотип" /></div>
        <div className={footerLinks} >
          <a href="/splavy/">Пронские сплавы</a>
          <a href="/enduro/">Эндуро</a>
          <a href="/blog/">Блог</a>
          <a href="/authors/">Авторы и источники</a>
        </div>
        <div className={social}>
          <a href="https://vk.com/v_pronske" target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' /></a>
        </div>
      </div>



    </Layout >
  )
}

export default IndexPage

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='В Пронске — достопримечательности, история и отдых в Пронском районе'
    description='Народный сайт Пронска и Пронского района: достопримечательности, местная история, сплавы на байдарках, эндуро и полезная информация для гостей.'
    pathname={location.pathname}
  >
    <meta name='google-site-verification' content='lzKUzw_xnhZqxcWF81efDm5H_FDsd_wTPr4mORqtDs0' />
  </Seo>
);
