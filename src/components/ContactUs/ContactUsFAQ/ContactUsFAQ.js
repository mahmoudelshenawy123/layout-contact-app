import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ContactUsFAQ.module.css'
function ContactUsFAQ() {
  return (
    <div className={styles['contact-us__FAQ']}>
        <Container>
            <Row>
                <Col lg='6'>
                    <h2 className={styles['contact-us__FAQ-heading']}>FAQ's</h2>
                </Col>
                <Col lg='6'>
                    <p className={styles['contact-us__FAQ-content']}>
                    Below you’ll find answers to commonly raised questions. If you’re a new or existing customer, feed your curiosity. Keep asking questions, because, with every answer you find, more questions will arise!
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactUsFAQ