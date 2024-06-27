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
        price: <>3500₽/4000₽ (будни/выходные), <br /> детям до 14 лет 3000₽</>,
        description: <>Однодневный сплав: реки Кердь и Проня с сопровождением и горячим вкусным обедом на природе.</>
    },
    twoDays: {
        title: '2 Дня, Кердь и Проня, ночевка в Глэмпинге',
        price: <>6500₽/7000₽ (будни/выходные), <span style={{ whiteSpace: 'nowrap' }}>детям до 14 лет 5000₽.</span> Отдельно оплачивается <a href="/splavy/pronya/#nightPrice" style={{ color: 'inherit' }}>проживание в глэмпинге</a></>,
        description: <>Сплав по реке Кердь с впаданием в Проню и финишем в древнем городе Пронске. Ночевка в глемпинге "Берег" на природе, со всеми удобствами.</>
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