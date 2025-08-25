import React from 'react';

const TeamArea = ({ team }) => {
    return (
        <div className="edu-team-details-area section-gap-equal">
            <div className="container">
                <div className="row row--40">
                    <div className="col-lg-4">
                        <div className="team-details-thumb">
                            <div className="thumbnail">
                                <img src={`/assets/images/team/team-02/${team.img}`} alt="team images" />
                            </div>

                            <ul className="social-share">
                                <li><a href="https://www.whatsapp.com/"><i className="icon-share-alt"></i></a></li>
                                {team?.social_links?.map((social, i) => (
                                    <li key={i}>
                                        <a href={social.link} target={social.target ? social.target : ''}>
                                            <i className={social.icon}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="team-details-content">
                            <div className="main-info">
                                <span className="subtitle">Instructor</span>
                                <h3 className="title">ANBUTHANE</h3>
                                <span className="designation">Managing Director</span>
                                <ul className="team-meta">
                                    <li><i className="icon-25"></i>20 Students</li>
                                    <li>
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(720 Rating)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bio-describe">
                                <h4 className="title">About Me</h4>
                                <p>Over 10 years of experience in the educational sector, I am passionate about empowering students with the skills they need to succeed in the real world. I believe that practical knowledge and a strong foundation are key to personal and professional growth.</p>
                                <p>In addition to my academic qualifications, I have worked with numerous students across various fields, helping them excel in their careers. I take pride in creating an interactive learning environment that nurtures creativity and critical thinking.</p>
                            </div>

                            <div className="contact-info">
                                <h4 className="title">Contact Me</h4>
                                <ul>
                                    <li><span>Address:</span>29/11A Old Bypass Road, Near SBI, Karur 1. </li>
                                    <li><span>Email:</span><a href="mailto:speaksure@gmail.com" target="_blank" rel="noreferrer">speaksure@gmail.com</a></li>
                                    <li><span>Phone:</span><a href="tel:+91-9789655455">+91-9789655455</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamArea;