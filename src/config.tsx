import React, { ReactNode } from 'react';

type RouteConfigItem = {
    title: string;
    price: ReactNode;
    description: ReactNode;
};

export const foodConfig = {
    breakFast: 'мюсли с йогуртом, домашние яйца, бутерброды с колбасой, чай, кофе.',
    lunch: 'плов в казане, хлеб местный, овощи, чай с печеньем.',
    dinner: 'шашлыки (замаринованная нами свиная шейка), картошка запечённая в фольге, овощи, хлеб местный.',
    lunch2: 'суп из фрикаделек, хлеб местный, чай.',
    base: '* на территории глемпинга для наших групп есть чайник и термопот с кипяченой водой',
    note: '* если вы не едите свинину по вере, или вегетарианец, или имеете ещё какие-либо ограничения по питанию, просим заранее предупредить нас - мы скорректируем меню для вас'
}

export const routesConfig: {
    twoDays: RouteConfigItem;
    oneDay: RouteConfigItem;
} = {
    oneDay: {
        title: 'Кердь и Проня (1 день)',
        price: <>❗При раннем бронирование, до 1 апреля, действует скидка 500₽ с человека❗<br />
            Стоимость 1-дневного сплава утром и под закат (в будни и выходные):<br />
            апрель: - 2500₽ <br />
            май: взрослый - 3500₽, детский до 14 лет - 2500₽<br />
            июнь: взрослый - 4000₽, детский до 14 лет - 3000₽<br />
            июль-сентябрь: взрослый - 4500₽, детский до 14 лет - 3500₽<br />
            <div style={{fontSize: 12}}>* Для детей до 8 лет дополнительные скидки.</div></>,
        description: <>Однодневный сплав: реки Кердь и Проня с сопровождением и горячим вкусным обедом на природе.</>
    },
    twoDays: {
        title: '2 Дня, Кердь и Проня, ночевка в Глэмпинге',
        price: <>❗При раннем бронирование, до 1 апреля, действует скидка 500₽ с человека❗<br />
        Стоимость 1-дневного сплава утром и под закат (в будни и выходные):<br />
        май: взрослый - 6500₽, детский до 14 лет - 4500₽<br />
        июнь: взрослый - 7500₽, детский до 14 лет - 5500₽<br />
        июль-сентябрь: взрослый - 8500₽, детский до 14 лет - 6500₽<br />
        <div style={{fontSize: 12}}>* Для детей до 8 лет дополнительные скидки.</div></>,
        description: <>Сплав по реке Кердь с впаданием в Проню и финишем в древнем городе Пронске. Ночевка на территории глемпинга на природе, со всеми удобствами цивилизации. Горячее питание на протяжении всего путешествия включено в стоимость.</>
    },
};

export default routesConfig;