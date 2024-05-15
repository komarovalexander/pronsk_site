import {
    button,
    feature,
    featureHeader,
    rowImage,
    rowText,
} from '../splavy_detail.module.scss';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Glamping = () => (
    <div className={feature}>
        <StaticImage className={rowImage} style={{ marginBottom: 15 }} width={660} src={'../../../images/Splav/index/4.png'} alt={'Пронские сплавы - 3 дня'} />
        <h4 className={featureHeader}>Сплав с ночёвкой в Глемпинге Берег на Проне</h4>
        <div className={rowText} style={{ maxWidth: 800 }}>На природу со всеми благами цивилизации! <br /> Сплав с инструктором до Глемпинга по рекам Кердь и Проня. Разные варианты размещения: от палаток с удобными спальным оборудованием или шатров с кроватями, до бунгало с двухспальной кроватью, диваном и отдельным душем.<br /> <br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: от 8000₽, <br /> детям до 14 лет 6000₽</div>
        <a className={button} href="/splavy/three_day">Подробнее</a>
    </div>
);

export default Glamping;
