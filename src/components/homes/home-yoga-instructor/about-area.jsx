import Link from 'next/link';
import React from 'react';

const lists = [
    'Award achived', 
    'Available online courses', 
    'Online Certification'
];

const AboutArea = () => {
    return (
        <div className="edu-section-gap edu-about-area about-style-5">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title pre-textsecondary">Our Commitment</span>
                    <h2 className="title">Helping You Achieve Your Study <span className="color-primary">Abroad</span> Goals</h2>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/about/about-08.webp" data-sal-delay="150" data-sal="fade" data-sal-duration="800" alt="About Image" />
                            <ul className="shape-group">
                                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img className="rotateit" src="/assets/images/about/shape-09.png" alt="Shape" />
                                </li>
                                <li className="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img src="/assets/images/about/shape-10.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <p> We are passionate about helping students turn their dreams of studying abroad into reality. With years of expertise in navigating the complexities of study visa applications, we are here to provide you with the personalized support and expert guidance you need to succeed.</p>
                            <p> We aim to create a seamless experience, ensuring that every step of your journey is handled with care and expertise.</p>
                            <ul className="features-list">
                                {lists.map((l, i) => <li key={i}>{l}</li>)}
                            </ul>
                            <Link href="/contact-us" legacyBehavior>
                                <a className="edu-btn">Get Start Today <i className="icon-4"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img className="d-block-shape-light" src="/assets/images/about/shape-20.png" alt="Shape" />
                    <img className="d-none-shape-dark" src="/assets/images/about/dark-shape-20.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default AboutArea;
