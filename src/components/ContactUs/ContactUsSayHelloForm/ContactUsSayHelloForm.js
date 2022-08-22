import React from 'react'
import styles from './ContactUsSayHelloForm.module.css'
import { Col,  Row } from 'react-bootstrap'
import { ReactComponent as TrueIcon} from 'assets/icons/true.svg'
import { NavLink } from 'react-router-dom'
function ContactUsSayHelloForm({isVisible}) {
  return (
    <form className={`${styles['contact-us__say-hello-form']} ${!isVisible&& styles['contact-us__say-hello-form--hidden']}`}>
        <Row>
            <Col lg='8' md='12'>
                <Row>
                    <Col lg='6' className={styles['contact-us__form-field-cont']}>
                        <label htmlFor='contact-us__name' className={styles['contact-us__form-field-label']}>
                            Full Name <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                        <input type='text' id='contact-us__name' className={styles['contact-us__form-field-input']} placeholder='e.g. Yasser Nazzel'/>
                    </Col>

                    <Col lg='6' className={styles['contact-us__form-field-cont']}>
                        <label htmlFor='contact-us__email' className={styles['contact-us__form-field-label']}>
                            Email Address  <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                        <input type='email' id='contact-us__email' className={styles['contact-us__form-field-input']} placeholder='e.g. hello@layouti.com'/>
                    </Col>

                    <Col lg='12' className={styles['contact-us__form-field-cont']}>
                        <label htmlFor='contact-us__project-details' className={styles['contact-us__form-field-label']}>
                            Message  <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                        <textarea id='contact-us__project-details' className={styles['contact-us__form-field-textarea']}
                        placeholder='e.g. Enter Your Comments Here' rows='10'></textarea>
                    </Col>

                    <Col lg='12' className={`${styles['contact-us__form-field-cont']} ${styles['contact-us__form-field-privacy-cont']}`}>
                            <input type='checkbox' name='privacy-check' id='terms-conditions' className={styles['contact-us__terms-conditions-input']}/>
                        <label htmlFor='terms-conditions' className={styles['contact-us__terms-conditions-label']}>
                            <span className={styles['contact-us__terms-conditions-input-shown']}>
                                <TrueIcon className={styles['contact-us__terms-conditions-icon']}/>
                            </span>
                            I Accept You <NavLink to='/' className={styles['contact-us__form-field-privacy']}> Privacy Policy</NavLink>
                            <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                    </Col>

                    <div className={styles['contact-us__submit-form-cont']}>
                        <button type='submit' className={styles['contact-us__submit-form']}>
                            Send Request
                        </button>
                    </div>
                </Row>
            </Col>
        </Row>
    </form>
  )
}

export default ContactUsSayHelloForm