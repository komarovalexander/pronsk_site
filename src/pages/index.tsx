import '../table/ka-bootstrap.scss';
import 'moment/locale/ru'; // without this line it didn't work

import * as React from 'react';

import { DataType, SortingMode } from 'ka-table/enums';

import Container from 'react-bootstrap/esm/Container';
import { HeadFC } from 'gatsby';
import { ITableProps } from 'ka-table';
import Layout from './layout';
import Slider from './home/Slider';
import data from '../data/converted';
import moment from 'moment';

const pageStyles = {
  color: "#232129",
  padding: "50px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Layout>
      <Slider />
      <main style={pageStyles} className='content'>
        <Container style={{ marginBottom: 50 }}>
          <h3>Бесплатный прокат коньков</h3>
          <p>
            Коньки можно взять под роспись бесплатно в <a href="http://prdk.rzn.muzkult.ru/about">Пронском Районном Доме Культуры</a>.
          </p>

          <p>
            Просьба возвращать коньки сразу после катания. В случае если после катания ДК уже закрыт - можно вернуть их сразу после открытия ДК.
          </p>
        </Container>
        <Container>
          <h3>Ближайщие мероприятия в Пронском районе <a href="http://prdk.rzn.muzkult.ru/egemesechnuplan">http://prdk.rzn.muzkult.ru/egemesechnuplan</a></h3>
        </Container>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () =>
  <>
    <title>В Пронске - Полезный сайт о Пронске и Пронском районе</title>
    <meta name="google-site-verification" content="lzKUzw_xnhZqxcWF81efDm5H_FDsd_wTPr4mORqtDs0" />
  </>
