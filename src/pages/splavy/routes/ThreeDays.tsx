import {
    button,
    feature,
    featureHeader,
    rowImage,
    rowText,
} from '../splavy_detail.module.scss';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { routesConfig } from '../../config';

const link = '/splavy/three_day';
const ThreeDays = () => (
    <div className={feature}>
        <StaticImage className={rowImage} style={{ marginBottom: 15 }} width={660} src={'../../../images/Splav/index/3days.jpg'} alt={'Пронские сплавы - 3 дня'} />
        <a style={{ textDecoration: 'none' }} href={link}><h4 className={featureHeader}>3 Дня, река Проня</h4></a>
        <div className={rowText} style={{ maxWidth: 800 }}>Автономный сплав по реке Проня на 3 дня в сопровождении инструктора, все необходимое оборудование мы предоставляем.<br /> <br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: {routesConfig.threeDays.price}</div>
        <a className={button} href={link}>Подробнее</a>
    </div>
);

export default ThreeDays;
