import {
    button,
    feature,
    featureHeader,
    rowImage,
    rowText,
} from '../splavy_detail.module.scss';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const link = '/splavy/pronya';
const TwoDays = () => (
    <div className={feature}>
        <StaticImage className={rowImage} style={{ marginBottom: 15 }} width={660} src={'../../../images/Splav/index/4.png'} alt={'Пронские сплавы - 2 дня'} />
        <a style={{ textDecoration: 'none' }} href={link}><h4 className={featureHeader}>2 Дня, Кердь и Проня, ночевка в Глемпинге</h4></a>
        <div className={rowText} style={{ maxWidth: 800 }}>Сплав по реке Кердь с впаданием в Проню и финишем в древнем городе Пронске. Ночевка в оборудованном глемпинге на реке Проня с душем, электричеством, сан узлом и различными вариантами размещения. На природу со всеми благами цивилизации! Отдых в режиме всё включено: Питание, трансфер, инструкторы и много другое. <br /> <br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: 6000₽ (май-июнь), 7000₽ (июль-август), <br /> детям до 14 лет 4000₽</div>
        <a className={button} href={link}>Подробнее</a>
    </div>
);

export default TwoDays;
