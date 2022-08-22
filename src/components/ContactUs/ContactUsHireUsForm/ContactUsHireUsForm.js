import React, { useRef, useState } from 'react'
import styles from './ContactUsHireUsForm.module.css'
import { Col,  Row } from 'react-bootstrap'

import { ReactComponent as AttachmentIcon} from 'assets/icons/attachment.svg'
import { ReactComponent as TrueIcon} from 'assets/icons/true.svg'
import { NavLink } from 'react-router-dom'
function ContactUsHireUsForm({isVisible}) {
    const fileUploadRef = useRef(null)
    const [fileUploadedName,setFileUploadedName] =useState('No FIle Choosen')
    let openAttachmentFileUpload =()=>{
        fileUploadRef.current.click()
    }
    let changeuploadedFilename = ()=>{
        let file = fileUploadRef.current.files[0]
        if(!file){
            return;
        }
        setFileUploadedName(file.name)
    }
  return (
    <form className={`${styles['contact-us__hire-us-form']} ${!isVisible&& styles['contact-us__hire-us-form--hidden']}`}>
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
                            Email  <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                        <input type='email' id='contact-us__email' className={styles['contact-us__form-field-input']} placeholder='e.g. hello@layouti.com'/>
                    </Col>

                    <Col lg='12' className={styles['contact-us__form-field-cont']}>
                        <label htmlFor='contact-us__email' className={styles['contact-us__form-field-label']}>
                            I Need <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                        <div className={styles['contact-us__form-field-need-cont']}>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='checkbox' name='user-need' id='user-need-1' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-need-1' 
                                className={styles['contact-us__check-box-label']}>
                                    Dashboard design
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='checkbox' name='user-need' id='user-need-2' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-need-2' className={styles['contact-us__check-box-label']}>
                                    mobile design
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='checkbox' name='user-need' id='user-need-3' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-need-3' className={styles['contact-us__check-box-label']}>
                                    Website design
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='checkbox' name='user-need' id='user-need-4' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-need-4' className={styles['contact-us__check-box-label']}>
                                    Branding
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='checkbox' name='user-need' id='user-need-5' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-need-5' className={styles['contact-us__check-box-label']}>
                                    Copywirter
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='checkbox' name='user-need' id='user-need-6' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-need-6' className={styles['contact-us__check-box-label']}>
                                    App Develpoment
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='checkbox' name='user-need' id='user-need-7' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-need-7' className={styles['contact-us__check-box-label']}>
                                    Backend Develpoment
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='checkbox' name='user-need' id='user-need-8' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-need-8' className={styles['contact-us__check-box-label']}>
                                    FrontEnd Develpoment
                                </label>
                            </div>
                        </div>
                    </Col>

                    <Col lg='12' className={styles['contact-us__form-field-cont']}>
                        <label htmlFor='contact-us__project-details' className={styles['contact-us__form-field-label']}>
                            Project Details  <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                        <textarea id='contact-us__project-details' className={styles['contact-us__form-field-textarea']}
                        placeholder='e.g. Enter Your Project Details' rows='10'></textarea>
                    </Col>

                    <Col lg='12' className={styles['contact-us__form-field-cont']}>
                        <label htmlFor='contact-us__attachment' className={styles['contact-us__form-field-label']}>
                            Attachment  <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                        <input type='file' ref={fileUploadRef} id='contact-us__attachment'
                         className={styles['contact-us__form-field-input-file']} onChange={changeuploadedFilename}/>
                        <div className={`${styles['contact-us__form-field-input']} ${styles['contact-us__form-field-file--upload']}`}
                        onClick={openAttachmentFileUpload}>
                            <span className={styles['contact-us__file-upload-text']}>{fileUploadedName}</span>
                            <AttachmentIcon className={styles['contact-us__file-upload-icon']}/>
                        </div>
                        <p className={styles['contact-us__file-upload-note']}>Only PDF and Doc. with max. size of 10MB</p>
                    </Col>

                    <Col lg='12' className={styles['contact-us__form-field-cont']}>
                        <label htmlFor='contact-us__email' className={styles['contact-us__form-field-label']}>
                            Budget  <span className={styles['contact-us__form-field-required']}>*</span>
                        </label>
                        <div className={styles['contact-us__form-field-need-cont']}>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='radio' name='user-budget' id='user-budget-1' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-budget-1' className={styles['contact-us__check-box-label']}>
                                    Less Than $2K
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='radio' name='user-budget' id='user-budget-2' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-budget-2' className={styles['contact-us__check-box-label']}>
                                    $2k - $5k
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='radio' name='user-budget' id='user-budget-3' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-budget-3' className={styles['contact-us__check-box-label']}>
                                    $5K - $10k
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='radio' name='user-budget' id='user-budget-4' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-budget-4' className={styles['contact-us__check-box-label']}>
                                    $10K - $30k
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='radio' name='user-budget' id='user-budget-5' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-budget-5' className={styles['contact-us__check-box-label']}>
                                    More Than $30K
                                </label>
                            </div>
                            <div className={styles['contact-us__form-field-select-cont']}>
                                <input type='radio' name='user-budget' id='user-budget-6' className={styles['contact-us__check-box']}/>
                                <label htmlFor='user-budget-6' className={styles['contact-us__check-box-label']}>
                                    Help Me Estimate
                                </label>
                            </div>

                        </div>
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

export default ContactUsHireUsForm