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
  rowImage,
  rowTextHeader,
} from './index.module.scss';

import { HeadFC } from 'gatsby';
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image';
import gerbImage from '../images/герб.png';
import telegram from '../images/telegram.svg';
import vk from '../images/vk.svg';

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
            <div className={`${mainBannerText2}`} >В Пронск</div>
            <div className={`${mainBannerText3}`}>
              <p className={mainBannerText3P}>Город с красивейшей природой, богатой историей, и приветливыми людьми</p>
            </div>
          </div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row} ${rowReversed}`}>
          <div className={rowText}>
            <h4 className={rowTextHeader}>
              Пронский краеведческий музей</h4>
            <p>Картины. Старинная утварь. Интересные экскурсии. Постоянные и временные выставки.</p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/musey.jpg'} alt={'Пронский краеведческий музей'} /></div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row}`}>
          <div className={rowText}>
            <h4 className={rowTextHeader}>
              Нетронутая история</h4>
            <p>Множества столетиями нетронутых Храмов можно найти в разных локациях района. Прошлое ближе чем кажется</p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/церковь.png'} style={{ objectPosition: 'left center' }} alt={'Церкви'} /></div>
        </div>
      </div>


      <div className={container}>
        <div className={`${row} ${rowReversed}`}>
          <div className={rowText}>
            <h4 className={rowTextHeader}>
              Никто не забыт</h4>
            <p>Память, прошедшая через года, показана в виде величественных монументов в каждом поселении</p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/памятник.jpg'} alt={'Памятники ВОВ - Пронск'} /></div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row}`}>
          <div className={rowText}>
            <h4 className={rowTextHeader}>
              Отдых на природе</h4>
            <p>Рыбалка, палатки, купание в чистых реках, посиделки у костра, <a href='/splavy'>сплавы на байдарках</a></p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/Рыбалка4.jpg'} style={{ objectFit: 'contain' }} alt={'Отдых на природе - Пронск'} /></div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row} ${rowReversed}`}>
          <div className={rowText}>
            <h4 className={rowTextHeader}>
              Спасо-Преображенский Пронский монастырь
            </h4>
            <p>Место силы земли Пронской, где всегда рады любым гостям</p>
          </div>
          <div><StaticImage className={rowImage} src={'https://sun9-51.userapi.com/impg/RmrEwjRBKqMwYd3868GGLyS_wUgZwgvHgf2O2w/XhJtnQCF5q8.jpg?size=1919x1080&quality=95&sign=b313febee77f290b6f37d2e70ff043c0&type=album'} alt={'Спасо-Преображенский Пронский монастырь'} /></div>
        </div>
      </div>

      <div className={container}>
        <div className={`${row}`}>
          <div className={rowText}>
            <h4 className={rowTextHeader}>
              Лучшие артисты</h4>
            <p>Люди - главное достояние Пронского района</p>
          </div>
          <div><StaticImage className={rowImage} src={'../images/slider/артисты.jpeg'} style={{ objectFit: 'contain' }} alt={'Лучшие артисты - Пронск'} /></div>
        </div>
      </div>


      <div className={container}>
        <div className={`${row} ${rowReversed}`}>
          <div className={rowText}>
            <h4 className={rowTextHeader}>
              Почувствуйте Русскую душу
            </h4>
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
              <a className={buttonRoutes} href='https://t.me/v_pronske_chat' target='_blank' title="Телеграм"><img src={telegram} alt='Телеграм' />Чат в телеграм</a>
            </div>
          </div>
        </div>
      </div>

      <div className={footer} >
        <div><img src={gerbImage} className={logo} alt="Пронские сплавы логотип" /></div>
        <div className={footerLinks} >
          <a href="/splavy/">Пронские сплавы</a>
          <a href="/blog/">Блог</a>
        </div>
        <div className={social}>
          <a href="https://vk.com/v_pronske" target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' /></a>
        </div>
      </div>



    </Layout >
  )
}

export default IndexPage

export const Head: HeadFC = () =>
  <>
    <title>В Пронске - Полезный сайт о Пронске и Пронском районе</title>
    <meta name="google-site-verification" content="lzKUzw_xnhZqxcWF81efDm5H_FDsd_wTPr4mORqtDs0" />
  </>
