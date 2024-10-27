import { useState } from 'react';
import styles from './ContactsPage.module.css'
import { PatternFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';

export default function ContactsPage(props) {
  const navigate = useNavigate()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()

  function handleSubmitForm(event) {
    event.preventDefault(); 
    props.handleSubmitForm(name, phone, email)
    navigate('/payment')
  }

  function handleClickButtonBack() {
    navigate('/')
  }

  return(
    <div className={ styles.contactsPage }>
      <form className={ styles.form } onSubmit={handleSubmitForm} >
        <p className={ styles.inputLabel }>Имя*</p>
        <input type="text" className={ styles.input } required
        onChange={(e) => {setName(e.target.value)}} />
        <p className={ styles.inputLabel  }>Телефон*</p>
        <PatternFormat pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" 
        format="+7 (###) ###-##-##" 
        allowEmptyFormatting mask="_" 
        className={ styles.input } required
        onChange={(e) => {setPhone(e.target.value)}}/>
        <p className={ styles.inputLabel  }>Почта*</p>
        <input type="text" pattern="^\S+@\S+\.\S+$" 
        placeholder='user@example.com' 
        className={ styles.input } required
        onChange={(e) => {setEmail(e.target.value)}} />
        <button type='button' className={ styles.button } onClick={handleClickButtonBack}>Назад</button>
        <button type='submit' className={ styles.button } >Оплатить</button>
      </form>
    </div>
  )
}