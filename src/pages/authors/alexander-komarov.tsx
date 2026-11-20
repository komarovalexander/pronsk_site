import * as React from 'react';
import { HeadFC } from 'gatsby';

import AuthorPage from '../../components/AuthorPage';
import Seo from '../../components/Seo';

const AlexanderPage = () => (
  <AuthorPage
    slug='alexander-komarov'
    name='Александр Комаров'
    role='Автор и фотограф сайта «В Пронске»'
    description='Готовит фоторепортажи и материалы о локальных проектах, документирует интересные места и события Пронского района, участвует в развитии сайта.'
    vkUrl='https://vk.com/a_s_komarov'
  />
);

export default AlexanderPage;

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='Александр Комаров — автор и фотограф «В Пронске»'
    description='Фоторепортажи и статьи Александра Комарова о Пронске, локальных проектах, природе и интересных местах Пронского района.'
    pathname={location.pathname}
  />
);
