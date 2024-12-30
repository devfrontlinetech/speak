import Link from "next/link";
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const HeroArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="hero-banner hero-style-2 bg-image">
            <div className="container">
                <div className="row row--45 align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">
                                Achieve Your Dream <span className="color-secondary">IELTS</span> Score with Expert Guidance
                            </h1>
                            
                            <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">
                                Prepare Anytime, Anywhere with Our Flexible IELTS Programs.
                            </p>
                            <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                <Link href="our-course" legacyBehavior>
                                    <a className="edu-btn">Find courses <i className="icon-4"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-gallery">
                            <div className="thumbnail thumbnail-1" data-sal-delay="500" data-sal="slide-up" data-sal-duration="1000">
                                <img src="/assets/images/banner/hero-ielts.webp" alt="Girl Image" />
                            </div>
                            <div className="thumbnail thumbnail-2" data-sal-delay="500" data-sal="slide-down" data-sal-duration="1000">
                                <img src="/assets/images/banner/hero-ielts-01.jpg" alt="Man Image" />
                            </div>
                            <div className="online-support" data-sal-delay="600" data-sal="slide-right" data-sal-duration="1000">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="icon-29"></i>
                                    </div>
                                    <div className="content">
                                        <span className="subtitle">Online Support</span>
                                        <h4 className="title">
                                            <a href="tel:+919789655455">+91 9789655455</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-13.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-1 scene shape-dark" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/dark-shape-13.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={ {
                                        x: mouseDirection(50).x,
                                        y: mouseDirection(50).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-12.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-3 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-09.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-3 scene shape-dark" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/dark-shape-09.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/cta/shape-04.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroArea;
