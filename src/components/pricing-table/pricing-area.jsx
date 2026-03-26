import React from 'react';

function PricingTable({ title, delay, amount, duration, sm_text, item_off_1, item_off_2 }) {
    return (
        <div className="col-lg-4" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
            <div className="pricing-table">
                <div className="pricing-header">
                    <h6 className="title">{title}</h6>
                    <div className="price-wrap">
                        <span className="amount">${amount}</span>
                        <span className="duration">{duration}</span>
                    </div>
                    <p>{sm_text}</p>
                </div>

                <div className="pricing-body">
                    <ul className="list-item">
                        <li><i className="icon-20"></i>Courses included: 1</li>
                        <li><i className="icon-20"></i>Access to individual course</li>
                        <li><i className="icon-20"></i>Course learning checks</li>
                        <li className={`${item_off_1 ? 'item-off' : ''}`}><i className="icon-20"></i>Course discussions</li>
                        <li className={`${item_off_2 ? 'item-off' : ''}`}><i className="icon-20"></i>Offline learning</li>
                    </ul>
                </div>

                <div className="pricing-btn">
                    <a className="edu-btn btn-border btn-medium" href="#">Select plan<i className="icon-east"></i></a>
                </div>
            </div>
        </div>
    );
}

const PricingArea = () => {
    return (
        <div className="edu-section-gap">
            <div className="container">
                <div className="section-title section-center" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Pricing Table</span>
                    <h2 className="title">Choose the Plan That Fits You</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <div className="row g-5">
                    <PricingTable
                        delay='100'
                        title="Silver Plan"
                        amount="29.00"
                        duration="Per month"
                        item_off_1={true}
                        item_off_2={true}
                        sm_text="Ideal for beginners who want access to a single course and basic learning resources."
                    />

                    <PricingTable
                        delay='200'
                        title="Gold Plan"
                        amount="49.00"
                        duration="Per month"
                        item_off_2={true}
                        sm_text="Perfect for learners looking for multiple course access, quizzes, and more interactive content."
                    />

                    <PricingTable
                        delay='300'
                        title="Diamond Plan"
                        amount="79.00"
                        duration="Per month"
                        sm_text="Best for advanced learners with full access, discussions, and offline learning options."
                    />
                </div>
            </div>
        </div>
    );
}

export default PricingArea;