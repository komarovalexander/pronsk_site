import * as React from 'react';
import { HeadFC } from 'gatsby';

import AuthorPage from '../../components/AuthorPage';
import Seo from '../../components/Seo';

const AnastasiaPage = () => (
  <AuthorPage
    slug='anastasia-sarycheva'
    name='Анастасия Сарычева'
    role='Автор статей сайта «В Пронске»'
    description='Пишет об истории, русских путешественниках, исследователях и людях, чьи биографии связаны с Пронским краем и Рязанской областью.'
    vkUrl='https://vk.com/id94863460'
  />
);

export default AnastasiaPage;

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='Анастасия Сарычева — автор статей «В Пронске»'
    description='Статьи Анастасии Сарычевой об истории, путешественниках, исследователях и известных людях Пронского края.'
    pathname={location.pathname}
  />
);
