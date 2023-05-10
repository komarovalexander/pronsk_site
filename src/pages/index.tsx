import '../table/ka-bootstrap.scss';
import 'moment/locale/ru'; // without this line it didn't work

import { HeadFC } from 'gatsby';
import { ITableProps } from 'ka-table';
import { DataType, SortingMode } from 'ka-table/enums';
import moment from 'moment';
import * as React from 'react';
import Container from 'react-bootstrap/esm/Container';

import data from '../data/converted';
import Slider from './home/Slider';
import Layout from './layout';

const pageStyles = {
  color: "#232129",
  padding: "50px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage =() => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Layout>
      <Slider />
      <main style={pageStyles} className='content'>
        <Container style={{marginBottom: 50}}>
            <h3>Бесплатный прокат коньков</h3>
            <p>
              Коньки можно взять под роспись бесплатно в <a href="http://prdk.rzn.muzkult.ru/about">Пронском Районном Доме Культуры</a>.
            </p>

            <p>
              На данный момент доступны размеры коньков от 27 до 43, некоторые регулируемые по размеру.{'  '}
              {!expanded && <a href="#" onClick={() => setExpanded(true)}>Подробнее о размерах</a>}
            </p>
            {expanded && <>
             <h5>Доступные размеры:</h5>
             <p>Женские 27-30<br />
                Женский 28<br />
                Женские 29-32<br />
                Женские 32-35<br />
                Женские 38-41<br />
                Универсальные 26-31<br />
                Универсальные 27-30<br />
                Универсальные 32-34<br />
                Универсальные 33-36<br />
                Универсальные 34-37<br />
                Универсальные 34,5<br />
                Универсальные 35-38<br />
                Универсальные 38<br />
                Универсальные 39<br />
                Универсальные 40<br />
                Мужские 41<br />
                Мужские 39-42<br />
                Мужские 43</p>
              <p>*через тире - размер регулируется</p>
              </>}
             <h5>Также доступны:</h5>
             <p>Клюшки взрослые - 4шт. <br />
                Клюшки детские - 2шт <br />
                Шайбы 2шт (1 маленькая)</p>
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
