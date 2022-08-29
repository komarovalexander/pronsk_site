import '../table/ka-bootstrap.scss';

import { HeadFC, Link } from 'gatsby';
import { ITableProps, kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import { bootstrapChildComponents } from '../table/bootstrap-child-components';
import Slider from './home/Slider';
import Navigation from './Navigation';

const dataArray = Array(6).fill(undefined).map(
  (_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }),
);

const tablePropsInit: ITableProps = {
  columns: [
    { key: 'column1', title: 'Column 1', dataType: DataType.String },
    { key: 'column2', title: 'Column 2', dataType: DataType.String },
    { key: 'column3', title: 'Column 3', dataType: DataType.String },
    { key: 'column4', title: 'Column 4', dataType: DataType.String },
  ],
  data: dataArray,
  editingMode: EditingMode.Cell,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
};

const pageStyles = {
  color: "#232129",
  padding: "50px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage =() => {
  const [tableProps, changeTableProps] = React.useState(tablePropsInit);
  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };

  return (
    <>
      <Navigation />
      <Slider />
      <main style={pageStyles} className='content'>
        <Container>
          <h3>Планируемые События</h3>
          <Table
            {...tableProps}
            childComponents={bootstrapChildComponents}
            dispatch={dispatch}
          />
          <Button>123</Button>
        </Container>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>В Пронске - Народный сайт Пронска и Пронского района</title>
