import '../../table/ka-bootstrap.scss';
import 'moment/locale/ru'; // without this line it didn't work

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Table } from 'ka-table';
import { DataType, SortingMode } from 'ka-table/enums';
import moment from 'moment';
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

const Page =() => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Layout><Row style={{padding: '40px 0'}}>
    <Col>
      <div className="container text">
        <Carousel interval={null}>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/1.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/2.jpg" className="rounded" alt="Пороня"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/3.jpg" className="rounded" alt="Проня"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/4.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/5.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/6.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/7.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/8.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/9.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/10.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/11.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/12.jpg" className="rounded" alt="Пороня"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/13.jpg" className="rounded" alt="Проня"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/14.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/15.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/16.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/17.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/18.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/19.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/20.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/20-1.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/21.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/22.jpg" className="rounded" alt="Пороня"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/23.jpg" className="rounded" alt="Проня"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/24.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/25.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/26.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/27.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/28.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/29.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/30.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/31.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/32.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/33.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/34.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/35.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/36.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/37.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/38.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <StaticImage  src="../../images/memorials/vechny/39.jpg" className="rounded" alt="Кердь"/>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Col>
  </Row>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () =>
<>
<title>В Пронске - Полезный сайт о Пронске и Пронском районе</title>
<meta name="google-site-verification" content="lzKUzw_xnhZqxcWF81efDm5H_FDsd_wTPr4mORqtDs0" />
</>
