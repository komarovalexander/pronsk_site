import * as React from 'react';

import { HeadFC } from 'gatsby';
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image/dist/src/components/static-image.server';
import {
  container,
} from './splavy.module.scss';

const pageStyles = {
  color: '#232129',
  padding: '50px 0',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const EnduroPage = () => {
  return (
    <Layout>
      <main
        style={pageStyles}
        className='content'
      >
        <div className={container}>
          <h3>Запись на турнир</h3>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSdNCOOk22OiKfga_3pqHjMlsaZshtlbSSP-T-dDGWXFPCAonQ/viewform?embedded=true'
            width='640'
            height='700'
          >
            Loading…
          </iframe>

          <h3>Участники</h3>
          <iframe
            src='https://docs.google.com/spreadsheets/d/16QWB_9lbt4JRQMCQ8gc1X2Zq9uK5LVUHG9Fa4INr2_A/edit?usp=sharing'
            width='1200'
            height='614'
          >
            Loading…
          </iframe>
          <img
            src='https://sun9-22.userapi.com/impg/ObW_EKcbZO-4TPKk7EzxA8EMIYJexD5Zi55kYQ/qcuEbUjhB6I.jpg?size=636x644&quality=95&sign=a58785622259e2363bf923c06623f73c&type=album'
            alt='В Пронске'
            style={{ marginLeft: 2 }}
          />
        </div>
      </main>
    </Layout>
  );
};

export default EnduroPage;

export const Head: HeadFC = () => (
  <>
    <title>Эндуро турнир - В Пронске</title>
    <meta
      name='google-site-verification'
      content='lzKUzw_xnhZqxcWF81efDm5H_FDsd_wTPr4mORqtDs0'
    />
  </>
);
