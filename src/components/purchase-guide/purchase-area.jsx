import React from 'react';
import SidebarOne from '../common/sidebar/blog-sidebar-1';

const PurchaseArea = () => {
    return (
        <section className="privacy-policy-area purchase-guide-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="privacy-policy purchase-guide">

                            <div className="text-block">
                                <h3 className="title">Purchase Currency</h3>
                                <p>All course purchases are processed securely online. You can pay in your preferred currency, and our platform ensures safe transactions with instant confirmation.</p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Account Registration</h4>
                                <p>To purchase a course, you need to create an account by providing basic information as outlined below:</p>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <ul>
                                            <li>Name (required)</li>
                                            <li>Age (required)</li>
                                            <li>Date of birth (required)</li>
                                            <li>Passport/ID number (required)</li>
                                            <li>Current career/occupation (required)</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>Mobile phone number (required)</li>
                                            <li>Email address (required)</li>
                                            <li>Hobbies & interests (optional)</li>
                                            <li>Social media profiles (optional)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="text-block">
                                <h4 className="title">How to Purchase a Course?</h4>
                                <p>Once registered, select your desired course, choose a payment method, and complete the checkout process. You will receive an email confirmation with course access details immediately after payment.</p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Accepted Credit Cards</h4>
                                <p>We accept all major credit cards to make your purchase smooth and convenient:</p>
                                <ul>
                                    <li>Visa</li>
                                    <li>MasterCard</li>
                                    <li>American Express</li>
                                    <li>Discover</li>
                                </ul>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Why Buy Our Course?</h4>
                                <p>Our courses are designed to provide maximum value and a seamless learning experience:</p>
                                <ul>
                                    <li>Regularly updated content to stay current</li>
                                    <li>Secure and hassle-free payment process</li>
                                    <li>1-click checkout for fast access</li>
                                    <li>Easy-to-use dashboard with smart progress tracking</li>
                                </ul>
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

export default PurchaseArea;