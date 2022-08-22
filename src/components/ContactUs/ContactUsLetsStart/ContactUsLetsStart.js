import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ContactUsLetsStart.module.css'
function ContactUsLetsStart() {
  return (
    <div className={styles['contact-us__lets-start']}>
        <Container>
            <Row>
                <Col lg='6'>
                    <h2 className={styles['contact-us__lets-start-heading']}>Let's start something completely different together</h2>
                </Col>
                <Col lg='6'>
                    <p className={styles['contact-us__lets-start-content']}>
                    Have a project for us? Or a general question? Contact us! kindly fill us this simple form at 
                    <span className={styles['contact-us__lets-start-mail']}>hello@layouti.com</span> and we’ll reach out.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactUsLetsStart