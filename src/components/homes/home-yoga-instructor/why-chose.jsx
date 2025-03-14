import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
    {
        color:'color-secondary-style',
        icon:'icon-81',
        title:'Exclusive Program',
        text:'Designed for students who want a personalized and streamlined approach to their study visa journey.'
    },
    {
        color:'color-primary-style',
        icon:'icon-82',
        title:'Online Training',
        text:' Online Training platform provides flexible, accessible, and comprehensive study materials that cater to students across the globe. '
    },
    {
        color:'color-extra05-style',
        icon:'icon-83',
        title:'Individual Care',
        text:'We believe in providing Individual Care to every student, offering personalized support and one-on-one consultation throughout your study visa process.'
    }
];

const WhyChose = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
    return (
        <div className="why-choose-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-5 row--45">
                    <div className="col-lg-6">
                        <div className="why-choose-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Why Choose</span>
                                <h2 className="title">Why We're the Best Choice for Your Study Visa Needs</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>When it comes to studying abroad, choosing the right partner to guide you through the visa process is crucial. At SpeakSure Academy, we provide expert advice, personalized support, and a seamless process to ensure you succeed in obtaining your study visa.</p>
                            </div>
                            <div className="features-list" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                {features.map((item,i) => {
                                    const {color,icon,text,title} = item;
                                    return (
                                        <div key={i} className={`features-box ${color}`}>
                                            <div className="icon">
                                                <i className={icon}></i>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">{title}</h5>
                                                <p>{text}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="why-choose-gallery">
                            <div className="gallery-thumbnail">
                                <div className="thumbnail thumbnail-1">
                                    <img src="/assets/images/others/why-choose-01.webp" alt="Why Choose"/>
                                </div>
                                <motion.div className="thumbnail thumbnail-2" style={{ y }}>
                                    <img src="/assets/images/others/why-choose-02.webp" alt="Why Choose"/>
                                </motion.div>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img src="/assets/images/about/shape-14.png" alt="Shape Images"/>
                                </li>
                                <li className="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img src="/assets/images/about/shape-10.png" alt="Shape Images"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChose;
