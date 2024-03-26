import '../table/ka-bootstrap.scss';
import './styles.scss';

import * as React from 'react';

import { HeadFC } from 'gatsby';
import Navigation from './Navigation';

const pageStyles = {
  color: '#232129',
  padding: '50px 0',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const Layout = ({ children }) => {
  React.useEffect(() => {
    appendMetrika();
  }, []);
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;

const appendMetrika = () => {
  const result = document.createElement('script');
  result.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(91393419, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true
  });`;
  document.body.appendChild(result);
};
export const Head: HeadFC = () => <title>В Пронске - Народный сайт Пронска и Пронского района</title>;
