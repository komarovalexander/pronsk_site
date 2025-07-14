import { button, feature, featureHeader, rowImage, rowText } from '../splavy_detail.module.scss';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { routesConfig } from '../../../config';

const link = '/splavy/company/';
const CompanyItem = () => (
  <div className={feature}>
    <StaticImage
      className={rowImage}
      style={{ marginBottom: 15 }}
      src={'../../../images/Splav/Prony/company.jpg'}
      alt={'Пронские сплавы - корпоративы'}
    />
    <a
      style={{ textDecoration: 'none' }}
      href={link}
    >
      <h4 className={featureHeader}>Организация корпоратива - сплав на байдарках</h4>
    </a>
    <div
      className={rowText}
      style={{ maxWidth: 800 }}
    >
      🌊 🚣‍♂️ Организуй незабываемый корпоративный сплав на байдарках с нами! <br />
      Хотите подарить своей команде незабываемый отдых и укрепить ее дух единства? Приглашаем вас на наши корпоративные сплавы на байдарках,
      где каждый участник получит заряд энергии, вдохновения и новых впечатлений!
    </div>
    <a
      className={button}
      href={link}
    >
      Подробнее
    </a>
  </div>
);

export default CompanyItem;
