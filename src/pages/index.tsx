import '../table/ka-bootstrap.scss';
import 'moment/locale/ru'; // without this line it didn't work

import * as React from 'react';

import {
  mainBanner,
  mainBannerImage,
  mainBannerText,
  mainBannerText1,
  mainBannerText2,
  mainBannerText3,
  mainBannerText3P
} from './index.module.scss';

import { HeadFC } from 'gatsby';
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout>
      <div className={mainBanner} >
        <StaticImage className={mainBannerImage} src={'https://sun9-7.userapi.com/impg/Dlsl9k0WQ1p62E4sLwfA1kh7fthIPOTBiSgPwA/VK2fvLBqZpY.jpg?size=2560x1707&quality=95&sign=4a3fbdf90ad21c77d72967c2159a09e0&type=album'} alt={'Пронские сплавы '} />
        <div style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }}>

          <div className={mainBannerText}>
            <div className={`${mainBannerText1}`}>Добро пожаловать</div>
            <div className={`${mainBannerText2}`} >В Пронск</div>
            <div className={`${mainBannerText3} d-flex justify-content-center`}>
              <p className={mainBannerText3P}>Город с красивейшей природой, богатой историей, и приветливыми людьми</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () =>
  <>
    <title>В Пронске - Полезный сайт о Пронске и Пронском районе</title>
    <meta name="google-site-verification" content="lzKUzw_xnhZqxcWF81efDm5H_FDsd_wTPr4mORqtDs0" />
  </>
