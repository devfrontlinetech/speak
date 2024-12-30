import React from 'react';
import { CertificateTwo, HybridDistanceProgramsTwo, SkilledLecturersTwo, UserTwo } from '../../../svg';

const CategoryArea = () => {
    return (
        <div className="features-area-1 gap-top-equal">
            <div className="container">
                <div className="row g-5">
                    <FeatureBox delay={'50'} color={'color-primary-style'} icon={<SkilledLecturersTwo />}
                    title={<><span>Skilled </span>Lecturers</>} text={''} />

                    <FeatureBox delay={'100'} color={'color-secondary-style'} icon={<HybridDistanceProgramsTwo />}
                    title={<><span>Distance</span> Programs</>} text={''} />

                    <FeatureBox delay={'150'} color={'color-extra08-style'} icon={<CertificateTwo />}
                    title={<><span>Online</span>Certifications</>} text={''} />
                    
                    <FeatureBox delay={'150'} color={'color-extra05-style'} icon={<UserTwo />}
                    title={<><span>200</span>Members</>} text={''} />
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;

const FeatureBox = ({ delay, icon, color, title, text }) => {
    return (
        <div className="col-lg-3" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
            <div className={`features-box ${color} edublink-svg-animate`}>
                <div className="icon">
                    {icon}
                </div>
                <div className="content">
                    <h5 className="title">{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
