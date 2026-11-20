import * as React from 'react';
import { HeadFC } from 'gatsby';

import AuthorPage from '../../components/AuthorPage';
import Seo from '../../components/Seo';

const RomanPage = () => (
  <AuthorPage
    slug='roman-komarov'
    name='Роман Комаров'
    role='Автор путеводителя по Пронску и Пронскому району'
    description='Рассказывает о достопримечательностях и интересных местах Пронского края на основе личных поездок и впечатлений.'
    vkUrl='https://vk.com/travelpersona'
  />
);

export default RomanPage;

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='Роман Комаров — автор путеводителя по Пронску'
    description='Путеводитель Романа Комарова по достопримечательностям Пронска и Пронского района: маршруты, фотографии и личные рекомендации.'
    pathname={location.pathname}
  />
);
