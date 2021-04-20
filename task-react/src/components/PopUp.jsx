import React from 'react';
import s from './PopUp.module.css';

const PopUp = () => {

  let closePopUp = () => {
    document.querySelector('#popup').style.display = 'none';
  }

  return (
    <div id='popup' className={s.popup}>
        <span className={s.text}>Здравствуйте, </span>
        <p><input id='close' type='submit' value='Закрыть' className={s.close} onClick={closePopUp}/></p>
    </div>
  );
}

export default PopUp;