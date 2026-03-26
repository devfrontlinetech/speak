import React from 'react';
import SidebarOne from '../common/sidebar/blog-sidebar-1';

const ConditionArea = () => {
  return (
        <section className="privacy-policy-area terms-condition-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="privacy-policy terms-condition">

                            <div className="text-block">
                                <h3 className="title">Definitions of Basic Terms, Rights, and Restrictions</h3>
                                <p>This document outlines the key terms, user rights, and restrictions applicable to members accessing our online courses. By enrolling, you agree to comply with these conditions to ensure a safe and fair learning environment.</p>
                                <p>Our goal is to provide high-quality educational content while protecting our intellectual property and maintaining the integrity of our courses.</p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Basic Terms</h4>
                                <p>“Member” refers to any individual who registers and purchases access to one or more online courses. “Course” refers to the educational content, videos, materials, and related resources provided through our platform. Access is granted solely for personal educational purposes and is governed by these terms.</p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Rights & Restrictions</h4>
                                <p>Members are granted limited rights to access and use the courses, subject to the following conditions:</p>
                                <ul>
                                    <li>Members must be at least 18 years of age.</li>
                                    <li>Access is time-limited, non-exclusive, revocable, non-transferable, and non-sublicenseable.</li>
                                    <li>Courses will remain accessible for a minimum of one year from the date of purchase, or as long as maintained by the Company.</li>
                                    <li>Course videos are provided as streaming content and are not downloadable.</li>
                                    <li>The Company is not obligated to maintain courses indefinitely or in their current form; updates and changes may occur at the Company’s discretion.</li>
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

export default ConditionArea;