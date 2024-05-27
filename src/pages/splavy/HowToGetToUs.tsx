import {
    container,
    grayBack,
    row,
    rowHeader,
    rowText,
    tinyRow,
} from '../splavy.module.scss';

import React from 'react';

const HowToGetToUs = () => (
    <div className={grayBack}>
        <div className={container}>
            {/*<div className={`${rowSubHeader}`}>Почему выбирают нас</div>*/}
            <h3 className={`${rowHeader} headerFont`}>Как до нас добраться</h3>
            <div className={`${row} ${tinyRow}`}>
                <div className={rowText}>
                    Мы находимся в Рязанской области, Пронский район.<br />
                    Добраться до р.п. Пронск можно на общественном транспорте или собственном автомобиле, для вас будет бесплатная охраняемая парковка.<br />
                    Мы всего в 50 км от Рязани.
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A77d7e495cb017ecead7fa8df335a1c15454e29de12272bda8c806e292d3a9852&amp;source=constructor" width="100%" height="400"></iframe>
            </div>
        </div>
    </div>
);

export default HowToGetToUs;