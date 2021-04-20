import React from 'react';
import s from './Form.module.css';

const Form = () => {
  return (
    <div className={s.wrapper}>

        <form className={s.form} action='#' >

            <label for='name' className={s.label}>Ваше имя:</label>
            <p><input id='name' className={s.input} type='text' name='name' placeholder='Name' required/></p>

            <label for='surname' className={s.label}>Ваша фамилия:</label>
            <p><input id='surname' className={s.input} type='text' name='surname' placeholder='Surname' required/></p>

            <p><input id='submit' type='submit' value='Готово' className={s.submit}/></p>

        </form>

    </div>
  );
}

export default Form;
