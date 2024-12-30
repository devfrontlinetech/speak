import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const tabs = {
    heading:[
        {active:true,target:'about-speaksure',title:'About SpeakSure'},
        {target:'about-mission',title:'Our Mission'},
        {target:'about-vision',title:'Our Vision'}
    ],
    content:[
        {show:true,id:'about-speaksure',desc:"we are dedicated to helping you achieve your goals with the Canadian English Language Proficiency Index Program (CELPIP).",
        feature_list:['Education award achived','Available online courses']},
        {id:'about-mission',desc:" We are committed to providing high-quality, results-driven training that prepares students for success, whether they are pursuing immigration, academic goals, or career advancement.",
        feature_list:['Education award achived','Available online courses']},
        {id:'about-vision',desc:"We envision a world where our students not only excel in their CELPIP scores but also gain the language skills and cultural confidence to thrive in Canada’s diverse and dynamic environment.",
        feature_list:['Education award achived','Available online courses']}
    ]
}


const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-3 language-about">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" data-sal-delay="100" data-sal="fade-in" data-sal-duration="800" src="/assets/images/about/celpip-02.jpg" alt="About Image" />
                            <div className="main-img-wrapper">
                                <div className="main-img-inner" data-sal-delay="100" data-sal="fade-in" data-sal-duration="800">
                                    <img className="main-img-2" src="/assets/images/about/celpip-01.png" alt="About Image" />
                                </div>
                            </div>

                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img className="rotateit" src="/assets/images/faq/shape-04.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
{/*                                 <span className="pre-title">About Us</span> */}
{/*                                 <h2 className="title">We Provide Best <span className="color-primary">Language</span> Courses For You</h2> */}
                                <h2 className="title">Get to Know Us</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                            </div>

                            <ul className="nav nav-tabs" role="tablist">
                                {
                                    tabs.heading.map((t,i) => (
                                        <li key={i} className="nav-item" role="presentation">
                                            <button className={`nav-link ${t.active?'active':''}`} data-bs-toggle="tab" data-bs-target={`#${t.target}`} type="button" role="tab" tabIndex={'-1'} aria-selected={t.active?"true":'false'}> {t.title}</button>
                                        </li>
                                    ))
                                } 
                            </ul>
                            
                            <div className="tab-content">
                                {
                                    tabs.content.map((item,i) => { 
                                        const {desc,feature_list,id,show} = item; 
                                        return (
                                            <div key={id} className={`tab-pane fade ${show?"show active":""}`} id={id} role="tabpanel">
                                                <p>{desc}</p>
                                                <ul className="features-list"> {feature_list.map((l,i) => <li key={i}>{l}</li>)} </ul>
                                            </div> 
                                        )
                                    })
                                }
                            </div>

                            <div className="about-btn sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
{/*                                 <a href="#" className="edu-btn">Learn more <i className="icon-4"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea;
