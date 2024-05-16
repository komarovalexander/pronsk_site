import {
    button,
    feature,
    featureHeader,
    rowImage,
    rowText,
} from '../splavy_detail.module.scss';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const link = '/splavy/kerd';
const OneDay = () => (
    <div className={feature}>
        <StaticImage className={rowImage} style={{ marginBottom: 15 }} src={'../../../images/Splav/index/5.jpg'} alt={'Пронские сплавы - 1 день'} />
        <a style={{ textDecoration: 'none' }} href={link}>
            <h4 className={featureHeader}>
                1 День</h4>
        </a>
        <div className={rowText} style={{ maxWidth: 800 }}>Сплав с инструктором по рекам Кердь и Проня, с полноценным обедом и трансфером из Пронска. <br /><br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: 3500₽ (май-июнь), 4500₽ (июль-август) <br /> детям до 14 лет 2000₽</div>
        <a className={button} href={link}>Подробнее</a>
    </div >
);

export default OneDay;
