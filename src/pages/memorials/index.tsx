import '../../table/ka-bootstrap.scss';
import 'moment/locale/ru'; // without this line it didn't work

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Table } from 'ka-table';
import * as React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';

import { bootstrapChildComponents } from '../../table/bootstrap-child-components';
import Layout from '../layout';

const pageStyles = {
  color: "#232129",
  padding: "50px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage =() => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Layout>
      <Container style={{marginBottom: 50}}>
        <Row style={{padding: '40px 0'}}>
          <Col>
            <h1>Памятники Пронского района</h1>
            <p>Данный список далеко не полный и пока пополняется, полный список памятников и их описание доступны в <a href="https://vk.com/id564883860">Пронская-Детская Библиотека</a></p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () =>
<>
<title>В Пронске - Полезный сайт о Пронске и Пронском районе</title>
<meta name="google-site-verification" content="lzKUzw_xnhZqxcWF81efDm5H_FDsd_wTPr4mORqtDs0" />
</>
