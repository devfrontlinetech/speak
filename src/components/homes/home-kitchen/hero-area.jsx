import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const HeroArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="hero-banner hero-style-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Achieve Your Desired  <span className="color-secondary"> PTE </span>Score with Expert Guidance!</h1>
                            <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Get ready for the PTE Academic and General exams with personalized lessons, expert instructors, and flexible learning options designed to boost your score.</p>
                            <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                <Link href="/our-course" legacyBehavior>
                                    <a className="edu-btn">Find courses <i className="icon-4"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                                <img src="/assets/images/banner/pte-01.jpg" alt="Couple Image" />
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img src="/assets/images/about/shape-26.png" alt="Shape" />
                                </li>
                                <li className="shape-2" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img src="/assets/images/about/shape-15.png" alt="Shape" />
                                </li>
                                <li className="shape-3" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </li>
                                <li className="shape-4" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <motion.li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <img src="/assets/images/others/shape-05.png" alt="Shape" />
                </motion.li>

                <motion.li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseDirection(50).x,
                        y: mouseDirection(50).y
                    } }
                >
                    <img src="/assets/images/others/shape-04.png" alt="Shape" />
                </motion.li>

                <motion.li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/others/shape-03.png" alt="Shape" />
                </motion.li>

                <motion.li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/others/shape-02.png" alt="Shape" />
                </motion.li>
                
                <motion.li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <img src="/assets/images/others/shape-01.png" alt="Shape" />
                </motion.li>
            </ul>
        </div>
    )
};

export default HeroArea;
