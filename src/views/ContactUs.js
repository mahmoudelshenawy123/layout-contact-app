import React from 'react'
import ContactUsHeader from 'components/ContactUs/ContactUsHeader/ContactUsHeader'
import ContactUsLetsStart from 'components/ContactUs/ContactUsLetsStart/ContactUsLetsStart'
import ContactUsForm from 'components/ContactUs/ContactUsForm/ContactUsForm'
import ContactUsGetInTouch from 'components/ContactUs/ContactUsGetInTouch/ContactUsGetInTouch'
import ContactUsFAQ from 'components/ContactUs/ContactUsFAQ/ContactUsFAQ'
import ContactUsAccordionCont from 'components/ContactUs/ContactUsAccordionCont/ContactUsAccordionCont'

function ContactUs() {
  return (
    <>
        <ContactUsHeader/>
        <ContactUsLetsStart/>
        <ContactUsForm/>
        <ContactUsGetInTouch/>
        <ContactUsFAQ/>
        <ContactUsAccordionCont/>
        <ContactUsHeader/>
    </>
  )
}

export default ContactUs