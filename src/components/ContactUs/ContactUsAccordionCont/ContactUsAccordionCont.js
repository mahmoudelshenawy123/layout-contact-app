import React, { useState } from 'react'
import {  Container } from 'react-bootstrap'
import styles from './ContactUsAccordionCont.module.css'
import ContactUsAccordion from '../ContactUsAccordion/ContactUsAccordion'
function ContactUsAccordionCont() {
    const [visibleForm ,setVisibleForm] =useState(1)
    let changeVisibleForm = (formNum)=>{
      setVisibleForm(formNum)
    }
  return (
    <section className={styles['contact-us__accordion']}>
        <Container>
                
                <div className={styles['contact-us__accordion-buttons-cont']}>
                    <button className={`${styles['contact-us__accordion-button']} ${visibleForm===1 &&styles['contact-us__accordion-button--active']}`} 
                    onClick={()=>{changeVisibleForm(1)}}>Common Questions</button>
                    <button className={`${styles['contact-us__accordion-button']} ${visibleForm===2 &&styles['contact-us__accordion-button--active']}`}
                    onClick={()=>{changeVisibleForm(2)}}>Branding</button>
                    <button className={`${styles['contact-us__accordion-button']} ${visibleForm===3 &&styles['contact-us__accordion-button--active']}`}
                    onClick={()=>{changeVisibleForm(3)}}>Mobile App</button>
                    <button className={`${styles['contact-us__accordion-button']} ${visibleForm===4 &&styles['contact-us__accordion-button--active']}`}
                    onClick={()=>{changeVisibleForm(4)}}>Website Design</button>
                </div>
                <ContactUsAccordion isVisible={visibleForm===1} />
                <ContactUsAccordion isVisible={visibleForm===2} />
                <ContactUsAccordion isVisible={visibleForm===3} />
                <ContactUsAccordion isVisible={visibleForm===4} />
        </Container>
    </section>
  )
}

export default ContactUsAccordionCont