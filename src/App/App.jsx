import { useState } from 'react'
import CertsPage from '../CertsPage/CertsPage'
import ContactsPage from '../ContactsPage.jsx/ContactsPage'
import PaymentPage from '../PaymentPage/PaymentPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  const [currentCertId, setCurrentCert] = useState()

  function handleSubmitForm(name, phone, email) {
    const formattedPhone = phone.slice(2).replace(/\D/g, "")
    fetch(`https://sycret.ru/service/api/api?MethodName=OSSale&ApiKey=011ba11bdcad4fa396660c2ec447ef14&Id=${currentCertId}&ClientName=${name}&Phone=${formattedPhone}&Email=${email}`)
  }

  return(
    <Router basename='/sycret-testwork'>
        <Routes>
          <Route exact path='/' element={ <CertsPage setCurrentCert = {setCurrentCert}/> } />
          <Route path='/contacts' element={ <ContactsPage handleSubmitForm={handleSubmitForm}/> } />
          <Route path='/payment' element={ <PaymentPage /> } /> 
        </Routes>
    </Router>
  )
}