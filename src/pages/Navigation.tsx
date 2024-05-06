import * as React from 'react';

import { container, links } from './Navigation.module.scss';

import gerbImage from '../images/герб.png';

const Navigation = () => {
  const activeItem = location.pathname.split('/')?.[1];
  return (
    <div className={container} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <a href="/" style={{
        textDecoration: 'none',
        color: '#4D3E37'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 20 }}>
          <img src={gerbImage} alt="В Пронске" height={90} width={55} style={{ marginLeft: 2 }} />
          <div style={{
            fontWeight: 'bold',
            fontSize: 32,
            fontFamily: 'molodo',
          }}>В Пронске</div>
        </div> </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 30, padding: 20 }} className={links}>
        <a className={activeItem === '' ? 'active' : undefined} href="/">Главная</a>
        <a className={activeItem === 'splavy' ? 'active' : undefined} href="/splavy/">Пронские сплавы</a>
        <a className={activeItem === 'blog' ? 'active' : undefined} href="/blog/">Блог</a>
      </div>
    </div >
  );
}

export default Navigation;