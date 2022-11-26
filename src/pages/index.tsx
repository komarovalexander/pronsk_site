import '../table/ka-bootstrap.scss';

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
import Navigation from './Navigation';

const tablePropsInit: ITableProps = {
  columns: [
    { key: '1', title: 'Учреждение', dataType: DataType.String },
    { key: '2', title: 'Мероприятие', dataType: DataType.String },
    { key: '3', title: 'Дата', dataType: DataType.Date },
    { key: '4', title: 'Время', dataType: DataType.String },
    //{ key: '5', title: 'Column 4', dataType: DataType.String },
    { key: '6', title: 'Организатор', dataType: DataType.String },
  ],
  format: ({ column, value }) => {
    if (column.dataType === DataType.Date){
      return value &&  moment(value).format('DD.MM.YYYY') ;
    }
  },
  data: data.map((d: any) => ({...d, 3: moment(d['3'], 'DD.MM.YYYY')})).filter((d: any) => d['3'].isAfter(moment().subtract(1, 'days'))),
  rowKeyField: 'index',
  sortingMode: SortingMode.Single,
};

const pageStyles = {
  color: "#232129",
  padding: "50px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
/**
 * https://alldocs.app/convert-word-docx-to-pandoc-json
 * const tableData: any[] = [];
  data.blocks[2].c[4].forEach((row:any, index:any) => {
    const rowData: any[] = row.map((column:any) => column.map(c => c.c.reduce((acc: any, d: any) => {
      acc += d.t === 'Str' ? d.c : ' ';
      return acc;
    }, '')).join('\r\n'));
    rowData.index = index;
    tableData.push(rowData);
  });
  console.log(data.blocks[2].c[4], tableData)
   */
const IndexPage =() => {
  const [tableProps, changeTableProps] = React.useState(tablePropsInit);
  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };
console.log(data.map((d, index) => ({...d, index: index})));
  return (
    <>
      <Navigation />
      <Slider />
      <main style={pageStyles} className='content'>
        <Container style={{marginBottom: 50}}>
            <h3>Бесплатный прокат коньков</h3>
            <p>
              Коньки можно взять под роспись бесплатно в <a href="http://prdk.rzn.muzkult.ru/about">Пронском Районном Доме Культуры</a>.
            </p>
            <p>
               Просьба возвращать коньки сразу после катания. В случае если после катания ДК уже закрыт - просьба вернуть их сразу после открытия ДК.
            </p>
        </Container>
        <Container>
            <h3>Ближайщие мероприятия в Пронском районе (за декабрь)</h3>
            <Table
              {...tableProps}
              childComponents={bootstrapChildComponents}
              dispatch={dispatch}
            />
            <p>Информация о мероприятиях загружена со страницы <a href="http://prdk.rzn.muzkult.ru/egemesechnuplan">http://prdk.rzn.muzkult.ru/egemesechnuplan</a></p>
        </Container>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>В Пронске - Народный сайт Пронска и Пронского района</title>
