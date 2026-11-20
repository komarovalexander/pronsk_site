import * as React from 'react';
import { HeadFC, Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import {
  breadcrumb,
  breadcrumbItem,
  container,
} from '../splavy/splavy_detail.module.scss';

const authors = [
  {
    slug: 'alexander-komarov',
    name: 'Александр Комаров',
    role: 'Автор фоторепортажей и материалов о локальных проектах, фотограф и участник развития сайта.',
  },
  {
    slug: 'anastasia-sarycheva',
    name: 'Анастасия Сарычева',
    role: 'Автор статей об истории, путешественниках и известных людях Пронского края.',
  },
  {
    slug: 'roman-komarov',
    name: 'Роман Комаров',
    role: 'Автор путеводителя по достопримечательностям Пронска и Пронского района.',
  },
];

const AuthorsPage = () => (
  <Layout>
    <div className={container} style={{ paddingTop: 20 }}>
      <nav aria-label='Хлебные крошки'>
        <ol className={breadcrumb}>
          <li className={breadcrumbItem}><Link to='/'>Главная</Link></li>
          <li className={breadcrumbItem}>/</li>
          <li className={breadcrumbItem} aria-current='page'>Авторы и редакция</li>
        </ol>
      </nav>
      <h1>Авторы и работа над материалами</h1>
      <p>На сайте публикуются статьи о Пронске и Пронском районе, местной истории, путешествиях и известных людях.</p>

      <section>
        <h2>Наши авторы</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {authors.map((author) => (
            <li key={author.slug} style={{ marginBottom: 24 }}>
              <h3 style={{ marginBottom: 8 }}><Link to={`/authors/${author.slug}/`}>{author.name}</Link></h3>
              <p style={{ margin: 0 }}>{author.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Как мы работаем с содержанием</h2>
        <p>В публикациях указываем автора, а для справочных и биографических материалов добавляем источники и дополнительное чтение. Для статей, которые были пересмотрены после публикации, показываем дату обновления.</p>
        <p>Локальные фоторепортажи и рассказы о проектах основаны на личном опыте авторов. Внешние источники не заменяют редакторскую проверку: если вы заметили неточность, напишите нам в сообщество <a href='https://vk.com/v_pronske' target='_blank' rel='noreferrer'>«В Пронске» ВКонтакте</a>, чтобы мы могли проверить и уточнить материал.</p>
      </section>
    </div>
  </Layout>
);

export default AuthorsPage;

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='Авторы и редакция сайта «В Пронске»'
    description='Авторы сайта о Пронске и Пронском районе, подход к источникам, проверке фактов и обновлению опубликованных материалов.'
    pathname={location.pathname}
  />
);
