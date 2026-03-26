import React from 'react';
import ChoseBox from './chose-box-item';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const WhyChose = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <section className="why-choose-area-2 section-gap-large">
            <div className="container edublink-animated-shape">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Why choose Speaksure</span>
                    <h2 className="title">The Best <span className="color-secondary">Beneficial</span> Side <br /> of Speaksure</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
                    <ChoseBox 
                        color="color-primary-style" 
                        icon="45" 
                        title="High Quality Courses" 
                        subtitle="Our courses are designed with real-world scenarios to help you build practical skills and confidence." 
                    />

                    <ChoseBox 
                        color="color-secondary-style" 
                        icon="46" 
                        title="Life Time Access" 
                        subtitle="Get lifetime access to all learning materials so you can learn anytime at your own pace." 
                    />

                    <ChoseBox 
                        color="color-extra08-style" 
                        icon="47" 
                        title="Expert Instructors" 
                        subtitle="Learn from industry experts who guide you step-by-step with proven teaching methods." 
                    />
                </div>
                <ul className="shape-group">
                    <li className="shape-5" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <span></span>
                    </li>
                </ul>
            </div>
            <ul className="shape-group">
                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <span></span>
                </motion.li>
                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/about/shape-13.png" alt="shape" />
                </motion.li>
                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <span></span>
                </motion.li>
                <motion.li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <img src="/assets/images/about/shape-40.png" alt="shape" />
                </motion.li>
            </ul>
        </section>
    )
}

export default WhyChose;