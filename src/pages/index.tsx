import '../table/ka-bootstrap.scss';
import 'moment/locale/ru'; // without this line it didn't work

import { HeadFC } from 'gatsby';
import { ITableProps, kaReducer, Table } from 'ka-table';
import { DataType, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import moment from 'moment';
import * as React from 'react';
import Container from 'react-bootstrap/esm/Container';

import data from '../data/converted';
import { bootstrapChildComponents } from '../table/bootstrap-child-components';
import Slider from './home/Slider';
import Layout from './layout';

const tablePropsInit: ITableProps = {
  columns: [
    { key: '1', title: 'Учреждение', dataType: DataType.String, colGroup: { width: 200 } },
    { key: '2', title: 'Мероприятие', dataType: DataType.String, colGroup: { width: 200 } },
    { key: '3', title: 'Дата', dataType: DataType.Date, colGroup: { width: 150 } },
    { key: '4', title: 'Время', dataType: DataType.String, colGroup: { width: 120 } },
    //{ key: '5', title: 'Column 4', dataType: DataType.String },
    { key: '6', title: 'Организатор', dataType: DataType.String, colGroup: { width: 200 } },
  ],
  format: ({ column, value }) => {
    if (column.dataType === DataType.Date){
      return value &&  moment(value).format('DD.MM.YYYY') ;
    }
  },
  data: data.map((d: any, index) => ({...d, index, 3: moment(d['3'], 'DD.MM.YYYY')})).filter((d: any) => d['3'].isAfter(moment().subtract(1, 'days'))),
  rowKeyField: 'index',
  sortingMode: SortingMode.Single,
};

const pageStyles = {
  color: "#232129",
  padding: "50px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
/**
 * https://alldocs.app/convert-word-docx-to-pandoc-json */
 /* const tableData: any[] = [];
  console.log(data);
  data.blocks[3].c[4].forEach((row:any, index:any) => {
    const rowData: any = row.map((column:any) => column.map(c => c.c.reduce((acc: any, d: any) => {
      acc += d.t === 'Str' ? d.c : ' ';
      return acc;
    }, '')).join('\r\n'));
    rowData.index = index;
    tableData.push(rowData);
  });
  console.log(data.blocks[2].c[4], tableData) */

const IndexPage =() => {
  const [tableProps, changeTableProps] = React.useState(tablePropsInit);
  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };
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
