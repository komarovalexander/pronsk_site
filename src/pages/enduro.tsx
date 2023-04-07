import '../table/ka-bootstrap.scss';
import 'moment/locale/ru'; // without this line it didn't work

import * as React from 'react';

import Container from 'react-bootstrap/esm/Container';
import { HeadFC } from 'gatsby';
import Layout from './layout';

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
        <Container style={{ marginBottom: 50 }}>
          <h3>Запись на турнир</h3>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSdNCOOk22OiKfga_3pqHjMlsaZshtlbSSP-T-dDGWXFPCAonQ/viewform?embedded=true'
            width='640'
            height='614'
          >
            Loading…
          </iframe>

          <h3>Участники</h3>
          <iframe
            src='https://docs.google.com/spreadsheets/d/16QWB_9lbt4JRQMCQ8gc1X2Zq9uK5LVUHG9Fa4INr2_A/edit?resourcekey#gid=1361209605'
            width='1200'
            height='614'
          >
            Loading…
          </iframe>
        </Container>
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
