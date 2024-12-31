import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const tabs = {
    title:[
        {
            active:true,target:'about-edu',title:'About SpeakSure'
        },
        {
            target:'about-mission',title:'Our Mission'
        },
        {
            target:'about-vision',title:'Our Vision'
        }
    ],
    content:[
        {
            show:true,
            id:'about-edu',
            desc:"Speaksure Academy, your trusted destination for mastering English proficiency exams. Specializing in IELTS, PTE, and CELPIP, TOEFL we offer expert-led courses designed to boost your scores and enhance your language skills. With personalized coaching, comprehensive study materials, and proven strategies, we ensure you're well-prepared to excel in these globally recognized exams. Whether you're aiming for immigration, education, or career advancement, Speaksure Academy is dedicated to your success. Achieve your goals with tailored programs that cater to every student's unique needs, helping you reach fluency with confidence..",
            feature_list: [
                'Education award achived',
                'Available online courses'
            ]
        },
        {
            id:'about-mission',
            desc:" To empower students worldwide to achieve their highest potential on the TOEFL exam. Through personalized instruction, expert-led courses, and a comprehensive approach to language learning, we equip our students with the skills, confidence, and strategies needed to succeed.",
            feature_list:[
                'Industry Expert Instructor',
                'Up-to-Date Course Content'
            ]
        },
        {
            id:'about-vision',
            desc:"Be a global leader in TOEFL coaching, recognized for transforming students language proficiency and enabling them to thrive in academic and professional environments.",
            feature_list: [
                'Online Remote Learning',
                'Lifetime Access For Learning'
            ]
        }
    ]
}

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-3">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
                                <span className="pre-title">About Us</span>
                                <h2 className="title">We Provide Best <span className="color-primary">Education</span> Services For You</h2>
                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>
                            </div>
                            <ul className="nav nav-tabs" role="tablist"> 
                                {
                                    tabs.title.map((t,i) => (
                                        <li key={i} className="nav-item" role="presentation">
                                            <button className={`nav-link ${t.active?'active':''}`} data-bs-toggle="tab" data-bs-target={`#${t.target}`} type="button" role="tab" tabIndex={'-1'} aria-selected={t.active?"true":'false'}> {t.title}</button>
                                        </li>
                                    ))
                                } 
                            </ul>
                            <div className="tab-content"> 
                                {tabs.content.map((item,i) => { const {desc,feature_list,id,show} = item; 
                                    return (
                                        <div key={id} className={`tab-pane fade ${show?"show active":""}`} id={id} role="tabpanel">
                                            <p>{desc}</p>
                                            <ul className="features-list"> {feature_list.map((l,i) => <li key={i}>{l}</li>)} </ul>
                                        </div> 
                                    )})
                                } 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800" src="/assets/images/about/about-04.webp" alt="About Image" />
                            <img className="main-img-2" data-sal-delay="100" data-sal="slide-left" data-sal-duration="800" src="/assets/images/about/about-05.webp" alt="About Image" />
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-39.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-07.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-4" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-5">
                    <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape" />
                </li>
                <li className="shape-6">
                    <span></span>
                </li>
            </ul>
        </div>
    )
}

export default AboutArea;
