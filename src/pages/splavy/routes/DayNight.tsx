import {
    button,
    feature,
    featureHeader,
    rowImage,
    rowText,
} from '../splavy_detail.module.scss';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { routesConfig } from '../../../config';

const link = '/splavy/day-night';
const DayNight = () => (
    <div className={feature}>
        <StaticImage className={rowImage} style={{ marginBottom: 15 }} width={660} src={'../../../images/Splav/dayNight/dayNight3.JPG'} alt={'Пронские сплавы - день-ночь'} />
        <a style={{ textDecoration: 'none' }} href={link}><h4 className={featureHeader}>{routesConfig.dayNight.title}</h4></a>
        <div className={rowText} style={{ maxWidth: 800 }}>Сплав на байдарках за один день, ночёвка в глэмпинге на берегу Прони, ужин у костра и завтрак на следующее утро — без второго дня на воде. <br /><br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: {routesConfig.dayNight.price}</div>
        <a className={button} href={link}>Подробнее</a>
    </div>
);

export default DayNight;
