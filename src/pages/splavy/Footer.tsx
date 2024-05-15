import React, { CSSProperties } from 'react';
import {
    footer,
    footerLinks,
    logo,
    social,
} from './splavy_detail.module.scss';

import logoImage from '../../images/Splav/logo.png';
import odnoklassniki from '../../images/odnoklassniki.svg';
import { scrollToId } from '../../utils';
import vk from '../../images/vk.svg';

const SplavyFooter = ({ scrollToRoutes, style }: { scrollToRoutes?: boolean, style?: CSSProperties }) => (
    <div className={footer} style={style} >
        <div><img src={logoImage} className={logo} alt="Пронские сплавы логотип" /></div>
        <div className={footerLinks} >
            <a href="/splavy/#routes" onClick={scrollToRoutes ? (e) => {
                scrollToId('#routes');
                e.preventDefault();
            } : undefined}>Маршруты</a>
            <a href="/splavy/rent/">Аренда</a>
            <a href="/splavy/company/">Организация корпоратива</a>
        </div>
        <div className={social}>
            <a href="https://vk.com/pronskie_splavy" target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' /></a>
            <a href="https://ok.ru/group/70000002650473" target='_blank' title="Одноклассники"><img src={odnoklassniki} alt='Одноклассники' /></a>
        </div>
    </div >
);

export default SplavyFooter;