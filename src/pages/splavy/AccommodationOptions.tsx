import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  container,
  feature,
  featureHeader,
  row,
  rowHeader,
  rowImage,
  rowText,
} from './splavy_detail.module.scss';

const AccommodationOptions = () => (
  <div className={container}>
    <h3 id='night' className={`${rowHeader} headerFont`}>
      Варианты ночёвки
    </h3>
    <div className={row}>
      <div>
        <p>
          Одна из особенностей нашего сплава — это то, что мы ночуем на территории Глэмпинга. У нас не только можно ночевать в комфортных
          палатках, которые включены в стоимость сплава, но и также можно снять отдельные домики и сафари-тенты. Любой уровень комфорта
          доступен на сплаве!
        </p>
        <p>
          Если вы приезжаете издалека — то вы можете приехать за день до сплава, переночевать в удобном для вас варианте размещения, и с
          утра отправиться на сплав.
        </p>
        <p>В зависимости от пожеланий к условиям ночёвки, можно выбрать различные варианты размещения:</p>
      </div>
    </div>
    <div className={row} style={{ alignItems: 'start', paddingBottom: 50 }}>
      <div className={feature}>
        <StaticImage
          className={rowImage}
          style={{ marginBottom: 15, maxWidth: '660px !important' }}
          src={'../../images/Splav/glamp/tent.jpg'}
          alt='Пронские сплавы - проживание'
        />
        <h4 className={featureHeader}>Палатка</h4>
        <p>включена в стоимость сплава</p>
        <div className={rowText} style={{ maxWidth: 800 }}>
          Вся инфраструктура глэмпинга — электричество, душ, туалет доступна тем, кто проживает в палатках. <br />
          Мы предоставляем палатку на 2–4 человека, мягкие коврики в палатку, спальники. <br />
          Можно со своим оборудованием — во время сплава место в глэмпинге будет для вас бесплатно. <br />
        </div>
      </div>
      <div className={feature}>
        <StaticImage
          className={rowImage}
          style={{ marginBottom: 15 }}
          width={660}
          src={'../../images/Splav/glamp/shater.JPG'}
          alt='Пронские сплавы - проживание'
        />
        <h4 className={featureHeader}>Сафари-тент, общий душ и туалет</h4>
        <p>пн-чт 6000₽/сутки, пт-вс 7000₽/сутки</p>
        <div className={rowText} style={{ maxWidth: 800 }}>
          Просторный сафари-тент оборудован помостом и электричеством. В сафари: две кровати с матрасами, одеялами, подушками, полотенцами;
          стеллаж для одежды, тумбочки, стол со стульями. Душевые кабинки и санузел в специальном блоке на территории. Размещение для 2
          человек.
        </div>
      </div>
    </div>
    <div className={row} style={{ alignItems: 'start' }}>
      <div className={feature}>
        <iframe
          src='https://vk.com/video_ext.php?oid=-213925828&id=456239141&hd=2'
          width='660'
          height={440}
          style={{ maxWidth: '100%' }}
          allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
          frameBorder='0'
          allowFullScreen
          title='Сафари-тент с душем и туалетом в номере'
        />
        <h4 className={featureHeader}>Сафари-тент, душ и туалет в номере</h4>
        <p>пн-чт 8000₽/сутки, пт-вс 8500₽/сутки</p>
        <div className={rowText} style={{ maxWidth: 800 }}>
          Уютный сафари-тент на берегу реки. Великолепные закаты с вашей террасы! В тенте санузел с душевой, мини-кухня со всем необходимым,
          белоснежное постельное белье, мангал у каждого домика. На территории пляж, пирс, волейбольная площадка, кафе. Размещение до 3
          человек.
        </div>
      </div>
      <div className={feature}>
        <iframe
          src='https://vk.com/video_ext.php?oid=-213925828&id=456239140&hd=2'
          width='660'
          height={440}
          style={{ maxWidth: '100%' }}
          allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
          frameBorder='0'
          allowFullScreen
          title='Сканди дом'
        />
        <h4 className={featureHeader}>Сканди дом</h4>
        <p>от 10 000₽/сутки</p>
        <div className={rowText} style={{ maxWidth: 800 }}>
          Приватная закрытая территория, где расположены два одинаковых дома и беседка. Трехкомнатный дом со всеми удобствами на берегу реки.
          Шикарный вид на реку из окна вашего домика! На закате можно посидеть с чашечкой чая на своей террасе. Приготовить вкусные блюда на
          мангале. В доме кондиционер, санузел с душевой, кухня-столовая со всем необходимым, Wi-Fi на всей территории, парковка. Красивый
          эксклюзивный ландшафт с травкой, прудиком. Свой выход к реке и пирс. Дома расположены в 3 минутах на авто от Глэмпинга. Размещение
          до 6 человек.
        </div>
      </div>
    </div>
  </div>
);

export default AccommodationOptions;
