import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const accordion_items = [
    {
        id: 'collapseOne', show: true, title: 'How can I contact a institute directly?',
        desc: 'If you have any questions or need more information about our spoken English courses, we’re here to help! Please fill out the form below or reach us through our contact details.'
    },
    {
        id: 'collapseTwo', show: false, title: 'Is there a demo class available before I commit to the full course?',
        desc: 'Yes, absolutely! We offer a free demo class so you can get a feel of the course before making a decision. The demo class covers some basic topics and gives you a chance to meet our instructors.'
    },
    {
        id: 'collapseThree', show: false, title: 'hanks a lot for the information! I’m looking forward to the demo class?',
        desc: 'You’re welcome! We look forward to having you in our class. If you have any other questions, feel free to reach out anytime. Have a great day!'
    }
];

const FaqArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-faq-area faq-style-2 bg-image">
            <div className="container">
                <div className="row g-5 row--45">
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                        <div className="edu-faq-content">
                            <div className="section-title section-left">
                                <span className="pre-title">FAQ’s</span>
                                <h2 className="title">Learn Your Best Education Culture with SpeakSure</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>If you have any questions or need more information about our spoken English courses, we’re here to help! Please fill out the form below or reach us through our contact details.</p>
                            </div>
                            <div className="faq-accordion" id="faq-accordion">
                                <div className="accordion">
                                    {accordion_items.map((item, i) => {
                                        const { desc, id, show, title } = item;
                                        return (
                                            <div key={i} className="accordion-item">
                                                <h5 className="accordion-header">
                                                    <button className={`accordion-button ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={show ? 'true' : 'false'}>
                                                        {title}
                                                    </button>
                                                </h5>
                                                <div id={id} className={`accordion-collapse collapse ${show ? 'show' : ''}`} data-bs-parent="#faq-accordion">
                                                    <div className="accordion-body">
                                                        <p>{desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="edu-faq-gallery">
                            <div className="row g-5">
                                <div className="col-6" data-sal-delay="50" data-sal="slide-down" data-sal-duration="1000">
                                    <div className="faq-thumbnail thumbnail-1">
                                        <img src="/assets/images/faq/faq-05.jpg" alt="Faq Images" />
                                    </div>
                                </div>
                                <div className="col-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                                    <div className="faq-thumbnail thumbnail-2">
                                        <img src="/assets/images/faq/faq-06.jpg" alt="Faq Images" />
                                    </div>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-06.png" alt="Shape Images" />
                                </motion.li>
                                <li className="shape-2">
                                    <img src="/assets/images/faq/shape-04.png" alt="Shape Images" />
                                </li>
                                <motion.li className="shape-3 scene"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-16.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-4 scene"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/banner/shape-03.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-5 scene"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-08.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-6 scene"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-09.png" alt="Shape Images" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqArea;
