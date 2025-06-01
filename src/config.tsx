import React, { ReactNode } from 'react';

type RouteConfigItem = {
    title: string;
    price: ReactNode;
    description: ReactNode;
};

export const foodConfig = {
    breakFast: 'мюсли с йогуртом, домашние яйца, бутерброды с колбасой, чай, кофе.',
    lunch: 'плов в казане, хлеб местный, овощи, чай с печеньем.',
    dinner: 'шашлыки (замаринованные нами), картошка запечённая в фольге, овощи, хлеб местный.',
    lunch2: 'суп из фрикаделек, хлеб местный, чай.',
    base: '* на территории глемпинга для наших групп есть чайник и термопот с кипяченой водой'
}

export const splavyVideoMain = <iframe src="https://vkvideo.ru/video_ext.php?oid=230237580&id=456239795&hd=3" width="1100" height="550" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>;
export const splavyBirdVideo = <iframe src="https://vkvideo.ru/video_ext.php?oid=-213925828&id=456239077&hd=3" width="1100" height="550" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>;
export const rizurVideo = <iframe src="https://vk.com/video_ext.php?oid=-34648558&id=456239277&hd=3" width="1100" height="550" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>;

export const routesConfig: {
    twoDays: RouteConfigItem;
    oneDay: RouteConfigItem;
} = {
    oneDay: {
        title: 'Кердь и Проня (1 день)',
        price: <>
            Стоимость 1-дневного сплава утром и под закат (в будни и выходные):<br />
            взрослый - 4500₽, детский до 14 лет - 3500₽<br />
            <div style={{fontSize: 12}}>* Для детей до 8 лет дополнительные скидки</div></>,
        description: <>Однодневный сплав: реки Кердь и Проня с сопровождением и горячим вкусным обедом на природе.</>
    },
    twoDays: {
        title: '2 Дня, Кердь и Проня, ночевка в Глэмпинге',
        price: <>
        Стоимость 2-дневного сплава (в будни и выходные):<br />
        взрослый - 8500₽, детский до 14 лет - 6500₽<br />
        <div style={{fontSize: 12}}>* Для детей до 8 лет дополнительные скидки</div></>,
        description: <>Сплав по реке Кердь с впаданием в Проню и финишем в древнем городе Пронске. Ночевка на территории глемпинга на природе, со всеми удобствами цивилизации. Горячее питание на протяжении всего путешествия включено в стоимость.</>
    },
};

export default routesConfig;