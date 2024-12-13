import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import FooterSocial from './component/footer-social';

const footer_contents = {
    desc: 'Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.',
    add: '29/11 A Old Bypass Road, Near SBI, Karur 1.',
    call: '+091-9789655455',
    email: 'speaksure@gmail.com',
    widgets: [
        {
            col: '3',
            class: 'explore-widget',
            widget_title: 'Online Platform',
            footer_links: [
                { link: 'about-1', title: 'About' },
                { link: 'our-course', title: 'Courses' },
                { link: 'team-1', title: 'Instructor' },
                { link: 'event-grid', title: 'Events' },
                { link: 'team-details', title: 'Instructor Profile' },
                { link: 'purchase-guide', title: 'Purchase Guide' }
            ]
        },
        {
            col: '2',
            class: 'quick-link-widget',
            widget_title: 'Links',
            footer_links: [
                { link: 'contact-me', title: 'Contact' },
                { link: 'gallery-grid', title: 'Gallery' },
                { link: 'blog-standard', title: 'News & Articles' },
                { link: 'faq', title: "FAQ's" },
                { /* link: 'sign-in', title: 'Sign In/Registration' */ },
                { link: 'coming-soon', title: 'Coming Soon' }
            ]
        }
    ]
}

const { add, call, desc, email, widgets } = footer_contents;

const FooterTwo = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <footer className="edu-footer footer-light footer-for-yoga footer-style-5">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Address</h4>
                                <div className="inner">
                                    <p className="description">{desc}</p>
                                    <div className="widget-information">
                                        <ul className="information-list">
                                            <li><span>Add:</span>{add}</li>
                                            <li><span>Call:</span><a href="tel:+091-9789655455">{call}</a></li>
                                            <li><span>Email:</span><a href="mailto:speaksure@gmail.com"
                                            target="_blank" rel="noreferrer">{email}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i}>
                                           {/* <Link href={`${l.link}`} legacyBehavior><a>{l.title}</a></Link>*/}
                                            </li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Contacts</h4>
                                <div className="inner">
                                    <p className="description">Enter your email address to register to our newsletter subscription</p>
                                    <div className="input-group footer-subscription-form">
                                        <input type="email" className="form-control" placeholder="Your email" />
                                        <button className="edu-btn btn-medium" type="button">Subscribe <i className="icon-4"></i></button>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="shape-group shape-group-2">
                    <motion.li className="shape-1 scene"
                        animate={ {
                            x: mouseDirection(30).x,
                            y: mouseDirection(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-06.png" alt="shape" />
                    </motion.li>
                    <motion.li className="shape-2 scene"
                        animate={ {
                            x: mouseReverse(30).x,
                            y: mouseReverse(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-07.png" alt="shape" />
                    </motion.li>
                    <li className="shape-3">
                        <img src="/assets/images/about/shape-10.png" alt="shape" />
                    </li>
                    <motion.li className="shape-4 scene"
                        animate={ {
                            x: mouseReverse(30).x,
                            y: mouseReverse(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-08.png" alt="shape" />
                    </motion.li>
                    <motion.li className="shape-5 scene"
                        animate={ {
                            x: mouseDirection(30).x,
                            y: mouseDirection(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-09.png" alt="shape" />
                    </motion.li>
                </ul>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>Copyright {new Date().getFullYear()} 
                                    <a href="https://speaksure.in/" rel="noreferrer" target="_blank">Speaksure</a> Designed By <a href="https://frontlinetech.in/" target="_blank" rel="noreferrer">Speaksure</a>. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo;