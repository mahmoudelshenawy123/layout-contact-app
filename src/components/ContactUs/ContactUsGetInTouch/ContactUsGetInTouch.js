import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ContactUsGetInTouch.module.css'
function ContactUsGetInTouch() {
  return (
    <div className={styles['contact-us__get-in-touch']}>
        <Container>
            <Row>
                <Col md='6'>
                    <div className={styles['contact-us__get-in-touch-cont']}>
                        <h3 className={styles['contact-us__get-in-touch-heading']}>Get In Touch</h3>
                        <p className={styles['contact-us__get-in-touch-desc']}>
                            We’d love to chat. Send us an e-mail directly or call us on the provided number.
                        </p>
                    </div>
                </Col>
                <Col md='6'>
                    <div className={styles['contact-us__get-in-touch-cont']}>
                        <h3 className={styles['contact-us__get-in-touch-second-heading']}>Contact Info</h3>
                        <p className={styles['contact-us__get-in-touch-desc']}>Email: hello@layouti.com</p>
                        <p className={styles['contact-us__get-in-touch-desc']}>Mobile: +971 522 372 878</p>
                        <p className={styles['contact-us__get-in-touch-desc']}>WhatsApp: +962 79 875 2197</p>
                    </div>
                    <div className={styles['contact-us__get-in-touch-cont']}>
                        <h3 className={styles['contact-us__get-in-touch-second-heading']}>Our Address</h3>
                        <p className={styles['contact-us__get-in-touch-desc']}>Dubai – UAE</p>
                        <p className={styles['contact-us__get-in-touch-desc']}>Amman – Jordan</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactUsGetInTouch