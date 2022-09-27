import '../table/ka-bootstrap.scss';

import { HeadFC } from 'gatsby';
import * as React from 'react';

import Slider from './home/Slider';
import Navigation from './Navigation';

const pageStyles = {
  color: "#232129",
  padding: "50px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout =({ children }) => {
  return (
    <>
      <Navigation />
        {children}
    </>
  )
}

export default Layout

export const Head: HeadFC = () => <title>В Пронске - Народный сайт Пронска и Пронского района</title>