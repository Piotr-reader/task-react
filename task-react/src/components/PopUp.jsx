import React from 'react';
import s from './PopUp.module.css';

const PopUp = () => {
  return (
    <div id='popup' className={s.popup}>
        <span className={s.text}>Здравствуйте, </span>
        <p><input id='close' type='submit' value='Закрыть' className={s.close}/></p>
    </div>
  );
}

export default PopUp;