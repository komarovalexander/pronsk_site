import {
  buttonMain,
  buttons,
  columnReverseMobile,
} from './splavy_detail.module.scss';

import React from 'react';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import whatsapp from '../../images/whatsapp.svg';

const ContactUs = () => (
  <div className={`${buttons} ${columnReverseMobile}`}>
    <div style={{ display: 'flex', gap: 15, fontSize: 18, alignItems: 'center' }}>Пишите:
      <a href="https://vk.me/pronskie_splavy" target='_blank' title='ВКонтакте'><img src={vk} alt='ВКонтакте' /></a>
      <a href="https://t.me/pronskie_splavy" target='_blank' title='Телеграм'><img src={telegram} alt='Телеграм' /></a>
      <a href="https://wa.me/+79521233539" target='_blank' title='Вотсапп'><img src={whatsapp} alt='Вотсапп' /></a>
    </div>
    <a className={buttonMain} href='tel:+79521233539'>Звоните +79521233539</a>
  </div>
);

export default ContactUs;
