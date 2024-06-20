import React, { ReactNode } from 'react';

type RouteConfigItem = {
    title: string;
    price: ReactNode;
    description: ReactNode;
};

export const routesConfig: {
    twoDays: RouteConfigItem;
    oneDay: RouteConfigItem;
    threeDays: RouteConfigItem;
} = {
    oneDay: {
        title: 'Кердь и Проня (1 день)',
        price: <>3500₽ (май-июнь), 4000₽ (июль-август), <br /> детям до 14 лет 3000₽</>,
        description: <>Однодневный сплав: реки Кердь и Проня с сопровождением и горячим вкусным обедом на природе.</>
    },
    twoDays: {
        title: '2 Дня, Кердь и Проня, ночевка в Глемпинге',
        price: <>7000₽, детям до 14 лет 5000₽. Отдельно оплачивается <a href="/splavy/pronya/#nightPrice" style={{ color: 'inherit' }}>проживание в глемпинге</a></>,
        description: <>Сплав по реке Кердь с впаданием в Проню и финишем в древнем городе Пронске. <br />Отдых в режиме всё включено: Питание, трансфер, инструкторы, палатки и много другое. Ночевка на нашей оборудованной стоянке на реке Кердь.</>
    },
    threeDays: {
        title: 'Проня (3 Дня)',
        price: <>9500₽, детям до 14 лет 8500₽</>,
        description: <>Трехдневное путешествие по Проне на байдарках.
            <br />
            Отдых в режиме всё включено: Питание, трансфер, инструкторы, палатки и много другое.
            <br />
            Идеальный способ отдохнуть, познакомиться с новыми людьми и перезагрузиться на новые свершения.</>
    },
};

export default routesConfig;