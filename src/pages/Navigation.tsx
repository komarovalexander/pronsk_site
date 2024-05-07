import * as React from 'react';

import { container, header, links, linksMenu, menuButton } from './Navigation.module.scss';

import gerbImage from '../images/герб.png';
import menuImage from '../images/menu.svg';

const Navigation = () => {
  const [menuShown, setMenuShown] = React.useState(false);
  const activeItem = location.pathname.split('/')?.[1];
  return (
    <div className={`${container} ${header}`}>
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
        </div>
      </a>
      <div className={links}>
        <a className={activeItem === '' ? 'active' : undefined} href="/">Главная</a>
        <a className={activeItem === 'splavy' ? 'active' : undefined} href="/splavy/">Пронские сплавы</a>
        <a className={activeItem === 'blog' ? 'active' : undefined} href="/blog/">Блог</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 30, padding: 20 }} className={linksMenu}>
        <button className={menuButton} onClick={() => { setMenuShown(!menuShown); }}>
          <img src={menuImage} alt="Меню" height={30} width={30} />
        </button>

        <div className='linksMenuList' style={menuShown ? {} : { display: 'none' }}>
          <a className={activeItem === '' ? 'active' : undefined} href="/">Главная</a>
          <a className={activeItem === 'splavy' ? 'active' : undefined} href="/splavy/">Пронские сплавы</a>
          <a className={activeItem === 'blog' ? 'active' : undefined} href="/blog/">Блог</a>
        </div>
      </div>
    </div >
  );
}

export default Navigation;