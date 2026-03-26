import React from 'react';
import { instructors_data } from '../../data';
import Time from '../../utils/time';
import TeamOne from "../team-member/team-one";

const EventDetailsArea = ({event}) => {
  return (
        <section className="event-details-area edu-section-gap">
            <div className="container">
                <div className="event-details">
                    <div className="main-thumbnail">
                        <img src="/assets/images/event/event-21.jpg" alt="Event" />
                    </div>
                    <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="details-content">
                            <h3>About The Event</h3>
                            <p>This event brings together industry experts and enthusiasts for a day of insightful talks, networking, and hands-on workshops. Attendees will gain practical knowledge and actionable strategies to advance their skills and careers.</p>
                            <p>Expect interactive sessions, live demonstrations, and Q&A panels where you can engage directly with speakers. The event is designed for professionals, students, and anyone interested in learning from the best in the field.</p>
                            <ul>
                                <li>Engage with top industry professionals</li>
                                <li>Participate in interactive workshops and sessions</li>
                                <li>Network with peers and experts from around the world</li>
                            </ul>

                            <h3>Event Location</h3>
                            <p>The event will be held at the heart of New York City, offering easy access to public transportation, local accommodations, and dining options. Join us for a productive and memorable experience.</p>
                            <ul className="event-meta">
                                <li><i className="icon-40"></i>29/11 A Old Bypass Road, Near SBI, Karur 1.</li>
                                <li><i className="icon-71"></i>+91 97896 55455</li>
                            </ul>

                            <div className="gmap_canvas">
                                <iframe 
                                    id="gmap_canvas" 
                                    src="https://maps.google.com/maps?q=melbourne,%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                    title="Event Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                        <div className="col-lg-4">
                            <div className="course-sidebar-3">
                                <div className="edu-course-widget widget-course-summery">
                                    <div className="inner">
                                        <div className="content">
                                            <h4 className="widget-title">Event Info</h4>
                                            <ul className="course-item">
                                                <li>
                                                    <span className="label"><i className="icon-60"></i>Cost:</span>
                                                    <span className="value price">$70.00</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-70"></i>Total Slot:</span>
                                                    <span className="value">30</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-68"></i>Booked Slot:</span>
                                                    <span className="value">2</span>
                                                </li>
                                            </ul>
                                            <div className="read-more-btn">
                                                <a href="#" className="edu-btn">Book Now <i className="icon-4"></i></a>
                                            </div>
                                            <div className="countdown">
                                                <div className="countdown-section">
                                                    <div>
                                                        <div className="countdown-number day">{Time('2023-12-5 00:00:00').days}</div>
                                                        <div className="countdown-unit">Days</div>
                                                    </div>
                                                </div>
                                                <div className="countdown-section">
                                                    <div>
                                                        <div className="countdown-number hour">{Time('2023-12-5 00:00:00').hours}</div>
                                                        <div className="countdown-unit">Hrss</div>
                                                    </div>
                                                </div>
                                                <div className="countdown-section">
                                                    <div>
                                                        <div className="countdown-number minute">{Time('2023-12-5 00:00:00').minutes}</div>
                                                        <div className="countdown-unit">Mints</div>
                                                    </div>
                                                </div>
                                                <div className="countdown-section">
                                                    <div>
                                                        <div className="countdown-number second" suppressHydrationWarning>{Time('2023-12-5 00:00:00').seconds}</div>
                                                        <div className="countdown-unit">Sec</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="event-speaker">
                    <h3 className="heading-title">Event Speakers</h3>
                    <div className="row g-5">
                        {instructors_data.slice(0,4).map((instructor) => (
                            <div key={instructor.id} className="col-lg-3 col-sm-6 col-12" data-sal-delay={instructor.delay} data-sal="slide-up" data-sal-duration="800">
                                <TeamOne instructor={instructor} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsArea;