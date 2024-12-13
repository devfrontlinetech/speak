import Link from 'next/link';
import React from 'react';
import FooterSocial from './component/footer-social';

const widgets = [
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
            { link: 'contact-us', title: 'Contact Us' },
            { link: 'gallery-grid', title: 'Gallery' },
            { link: 'blog-standard', title: 'News & Articles' },
            { link: 'faq', title: "FAQ's" },
            { /* link: 'sign-in', title: 'Sign In/Registration' */ },
            { link: 'coming-soon', title: 'Coming Soon' }
        ]
    }
]

const FooterThree = () => {
    return (
        <footer className="edu-footer footer-kindergarten footer-style-6">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href="" legacyBehavior>
                                        <a>
                                            <img className="logo-dark" src="/assets/images/logo/logo.jpg" alt="Corporate Logo" />
                                       
                                        </a>
                                    </Link>
                                </div>
                                <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore magna aliqua enim.</p>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => 
                                                <li key={i}>
                                                    <Link href={`/${l.link}`} legacyBehavior><a>{l.title}</a></Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="edu-footer-widget">
                            <h6 className="widget-title">Contacts</h6>
                                <div className="inner">
                                    <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor dolore.</p>
                                    <div className="widget-information">
                                        <ul className="information-list">
                                            <li><span>Add:</span>29/11 A Old Bypass Road, Near SBI, karur 1.</li>
                                            <li><span>Call:</span><a href="tel:+091-9789655455">+091-9789655455</a></li>
                                            <li><span>Email:</span><a href="mailto:speaksure@gmail.com" target="_blank" rel="noreferrer">speaksure@gmail.com</a></li>
                                            
                                        </ul>
                                    </div>

                                    <ul className="social-share icon-transparent">
                                        <FooterSocial />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>
                                    Copyright {new Date().toDateString()} 
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

export default FooterThree;