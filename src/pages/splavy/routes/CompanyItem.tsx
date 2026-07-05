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

const link = '/splavy/company/';
const CompanyItem = () => (
    <div className={feature}>
        <StaticImage className={rowImage} style={{ marginBottom: 15 }} width={660} src={'../../../images/Splav/index/9.jpeg'} alt={'Пронские сплавы - корпоратив'} />
        <a style={{ textDecoration: 'none' }} href={link}><h4 className={featureHeader}>{routesConfig.company.title}</h4></a>
        <div className={rowText} style={{ maxWidth: 800 }}>
            {routesConfig.company.description} <br /><br /> <b style={{ color: '#3D3D3D' }}>Цена</b>: {routesConfig.company.price}
        </div>
        <a className={button} href={link}>Подробнее</a>
    </div>
);

export default CompanyItem;
