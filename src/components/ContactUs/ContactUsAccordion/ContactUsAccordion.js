import React from 'react'
import { Accordion} from 'react-bootstrap'
import styles from './ContactUsAccordion.module.css'
import {ReactComponent as MinusIcon } from 'assets/icons/minus.svg'
function ContactUsAccordion({isVisible}) {
  return (
    <div className={`${styles['contact-us__accordion-cont']} ${!isVisible&& styles['contact-us__accordion-cont--hidden']}`}>
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0" className={styles['contact-us__accordion-item']}>
                <Accordion.Header className={styles['contact-us__accordion-header']}>
                    <span className={styles['contact-us__accordion-title']}>Is layouti still worth investing in 2021?</span>
                    <div className={styles['contact-us__accordion-icon-cont']}>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                    </div>
                </Accordion.Header>
                <Accordion.Body className={styles['contact-us__accordion-body']}>
                    That’s what we want to know, as well. If you find out, let us know!
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1" className={styles['contact-us__accordion-item']}>
                <Accordion.Header className={styles['contact-us__accordion-header']}>
                    <span className={styles['contact-us__accordion-title']}>
                        What is the difference between agency and a freelancer?
                    </span>
                    <div className={styles['contact-us__accordion-icon-cont']}>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                    </div>
                </Accordion.Header>
                <Accordion.Body className={styles['contact-us__accordion-body']}>
                We have a professional cooperative team covering all various services. Our team works together to get the best of their perspectives. To be fast, we divide a project into smaller tasks, being quite strict about communicating 24 hours a day.
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2" className={styles['contact-us__accordion-item']}>
                <Accordion.Header className={styles['contact-us__accordion-header']}>
                    <span className={styles['contact-us__accordion-title']}>
                        What makes your agency unique?
                    </span>
                    <div className={styles['contact-us__accordion-icon-cont']}>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                    </div>
                </Accordion.Header>
                <Accordion.Body className={styles['contact-us__accordion-body']}>
                    Being realistic makes us different. We firmly believe in our abilities and promises as we care about expressing your opinion honestly. Actually, we trust our customers to part of our team.
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="3" className={styles['contact-us__accordion-item']}>
                <Accordion.Header className={styles['contact-us__accordion-header']}>
                    <span className={styles['contact-us__accordion-title']}>
                        Who does manage communication in my project?
                    </span>
                    <div className={styles['contact-us__accordion-icon-cont']}>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                    </div>
                </Accordion.Header>
                <Accordion.Body className={styles['contact-us__accordion-body']}>
                We have a public relationship crew that helps make sure the right messages are sent, received, and understood by the right people. By the way, they guide you to the right manager of your project. They will follow with you in the project preparation, guiding you with the right manager in each step.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className={styles['contact-us__accordion-item']}>
                <Accordion.Header className={styles['contact-us__accordion-header']}>
                    <span className={styles['contact-us__accordion-title']}>
                        What is the timeline of a project?
                    </span>
                    <div className={styles['contact-us__accordion-icon-cont']}>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                    </div>
                </Accordion.Header>
                <Accordion.Body className={styles['contact-us__accordion-body']}>
                    We estimate the project hours according to the agreement in the first meet. Because of the difficulty of estimating the exact time, we work on a regular divisional plan to implement any project. Besides, we have a weekly validity to check out the process to fulfill your satisfaction. We take into accounts any delays that will arise on the clients’ side.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className={styles['contact-us__accordion-item']}>
                <Accordion.Header className={styles['contact-us__accordion-header']}>
                    <span className={styles['contact-us__accordion-title']}>
                        How do you price a service?
                    </span>
                    <div className={styles['contact-us__accordion-icon-cont']}>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                    </div>
                </Accordion.Header>
                <Accordion.Body className={styles['contact-us__accordion-body']}>
                    Firstly, we hold face to face call aiming to understand your need and negotiate freely with you. Your details and desired implementations usually sit the price of your service. We avoid hidden fees and overprices with step-by-step check-out for the project. In the case of larger projects, we install the price. Before starting a project, a deposit is required.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6" className={styles['contact-us__accordion-item']}>
                <Accordion.Header className={styles['contact-us__accordion-header']}>
                    <span className={styles['contact-us__accordion-title']}>
                        How exactly and how often will we communicate?
                    </span>
                    <div className={styles['contact-us__accordion-icon-cont']}>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                        <MinusIcon className={styles['contact-us__accordion-minus-icon']}/>
                    </div>
                </Accordion.Header>
                <Accordion.Body className={styles['contact-us__accordion-body']}>
                Transparent communication is the most important part of us. We recommend having regular meetings to discuss the process and receive and questions. We use the best communications software to organize work and keep in touch with our clients. We stick to Trello, Slack, Zoom, and Teams, but we are flexible.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default ContactUsAccordion