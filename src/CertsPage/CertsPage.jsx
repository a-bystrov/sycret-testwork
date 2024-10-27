import { useEffect, useState } from 'react'
import styles from './CertsPage.module.css'
import { useNavigate } from 'react-router-dom';

export default function CertsPage(props) {
  const [certs, setCerts] = useState([])
  const navigate = useNavigate()


  useEffect(()=>{
    fetch('https://sycret.ru/service/api/api?MethodName=OSGetGoodList&ismob=0&ApiKey=011ba11bdcad4fa396660c2ec447ef14')
    .then(response => response.json()).then(result => setCerts(result.data))
  }, [])

  function handleClickButtonExecute() {
    navigate('/contacts')
  }

  function handleChangeSelect(event) {
    props.setCurrentCert(event.target.value)
  }

  return(
    <div className={ styles.certsPage }>
      <select className={ styles.goodList} onChange={handleChangeSelect}>
        {certs.map((cert) => { 
          return <option value={cert.ID} key={cert.ID}>{cert.NAME}</option>})}
      </select>
      <button className={ styles.button } onClick={handleClickButtonExecute}>
        Оформить
      </button>
    </div>
  )
}
