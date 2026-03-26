import React from 'react';

const contents = [
    {
        title: 'Nutrition Strategies',
        desc: 'Learn practical and personalized nutrition plans to fuel your body and achieve your health goals.',
        imgSrc: '/assets/images/svg-icons/h-8-shape-34.svg',
        color: 'color-primary-style'
    },
    {
        title: 'Workout Routines',
        desc: 'Follow structured exercises designed to improve strength, flexibility, and overall fitness.',
        imgSrc: '/assets/images/svg-icons/h-8-shape-35.svg',
        color: 'color-secondary-style'
    },
    {
        title: 'Individual Support',
        desc: 'Receive one-on-one guidance and coaching tailored to your personal goals and progress.',
        imgSrc: '/assets/images/svg-icons/h-8-shape-36.svg',
        color: 'color-extra06-style'
    }
];

const Service = () => {
    return (
        <div className="features-area-5 gap-bottom-equal">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Why Healthcoach</span>
                    <h2 className="title">Why People Need Healthier Lifestyle?</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
                    {contents.map((item, i) => {
                        const { title, desc, imgSrc, color } = item;
                        return (
                            <div className="col-lg-4" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800" key={i}>
                                <div className={`features-box ${color}`}>
                                    <div className="icon">
                                        <img src={imgSrc} alt="images svg" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">{title}</h5>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service;