import React from 'react';
import SidebarOne from '../common/sidebar/blog-sidebar-1';

const PolicyArea = () => {
    return (
        <section className="privacy-policy-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="privacy-policy">

                            <div className="text-block">
                                <h3 className="title">Definitions of Privacy Policy</h3>
                                <p>Our Privacy Policy explains how we collect, use, and protect your personal information when you use our website or services. We are committed to maintaining your trust and safeguarding your data in accordance with applicable laws and regulations.</p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">General Information</h4>
                                <p>We collect only the information necessary to provide our services and improve user experience. This includes details you provide directly, as well as information collected automatically during your interaction with our website.</p>
                                <p>All collected data is used responsibly and will never be shared with unauthorized third parties without your consent, except as required by law.</p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Availability of Website</h4>
                                <p>Our website may collect certain technical information to ensure optimal performance and security. This includes:</p>
                                <ul>
                                    <li>Internet Protocol (IP) addresses</li>
                                    <li>Browser type and version, Internet Service Provider (ISP)</li>
                                    <li>Date and time of visits, referring/exit pages</li>
                                    <li>Click patterns and interaction metrics</li>
                                </ul>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Privacy Practices</h4>
                                <p>We use the collected data to enhance our services, personalize content, and communicate important updates to users. Sensitive personal data is encrypted and stored securely.</p>
                                <p>Our team takes appropriate technical and organizational measures to prevent unauthorized access, disclosure, alteration, or destruction of personal data.</p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Third-Party Policies</h4>
                                <p>We may use third-party services for analytics, payment processing, and other functions. These third parties are bound by strict confidentiality agreements and privacy obligations.</p>
                                <ul>
                                    <li>The Company retains all rights to its logos, names, content, and intellectual property; no rights are transferred to users.</li>
                                    <li>Online courses and related materials are protected by copyright, trademark, patent, and other applicable intellectual property laws.</li>
                                    <li>Users are granted limited, non-exclusive access to courses solely for personal educational purposes.</li>
                                </ul>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Online Privacy</h4>
                                <p>We employ cookies and other tracking technologies to improve user experience and monitor website performance. Users can manage cookie preferences through their browser settings. No personal data is shared with advertisers without explicit consent.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <SidebarOne />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PolicyArea;