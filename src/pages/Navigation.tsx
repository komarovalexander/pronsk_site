import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { links } from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 20 }}>
        <StaticImage src="../images/герб.png" alt="В Пронске" width={50} style={{ marginLeft: 2 }} />
        <div style={{
          fontWeight: 'bold',
          fontSize: 32,
          fontFamily: 'molodo'
        }}>В Пронске</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 30, padding: 20 }} className={links}>
        <a href="/">Главная</a>
        <a href="/splavy/">Пронские сплавы</a>
        <a href="/blog/">Блог</a>
      </div>
    </div >
  );
}

export default Navigation;