import React, { useState } from 'react'
import styles from './ContactUsForm.module.css'
import { Container } from 'react-bootstrap'
import ContactUsHireUsForm from '../ContactUsHireUsForm/ContactUsHireUsForm'
import ContactUsSayHelloForm from '../ContactUsSayHelloForm/ContactUsSayHelloForm'

function ContactUsForm() {
  const [visibleForm ,setVisibleForm] =useState(1)
  let changeVisibleForm = (formNum)=>{
    setVisibleForm(formNum)
  }
  return (
    <div className={styles['contact-us__form']}>
      <Container>
        <div className={styles['contact-us__types-cont']}>
          <button className={`${styles['contact-us__types-button']} ${visibleForm===1 &&styles['contact-us__types-button--active']}`} 
          onClick={()=>{changeVisibleForm(1)}}>Hire Us</button>
          <button className={`${styles['contact-us__types-button']} ${visibleForm===2 &&styles['contact-us__types-button--active']}`}
          onClick={()=>{changeVisibleForm(2)}}>Say Hello</button>
        </div>
        <div className='position-relative'>
          <ContactUsHireUsForm isVisible={visibleForm===1}/>
          <ContactUsSayHelloForm isVisible={visibleForm===2}/>
        </div>
      </Container>
    </div>
  )
}

export default ContactUsForm