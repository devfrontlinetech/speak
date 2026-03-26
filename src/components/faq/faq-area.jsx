import React from 'react';
import SingleFaq from './single-faq';

function NavTab({ active = false, id, title }) {
    return (
        <li className="nav-item" role="presentation">
            <button className={`nav-link ${active ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target={`#${id}`}
            type="button" role="tab" aria-selected={active ? 'true' : 'false'}>{title}</button>
        </li>
    )
}

const FaqArea = () => {
    return (
        <section className="edu-section-gap faq-page-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="faq-page-nav">
                            <h3 className="title">Questions By This Category</h3>
                            <p>Click on a question to reveal the answer and get detailed guidance.</p>

                            <ul className="nav nav-tabs" role="tablist">
                                <NavTab active={true} id="gn-ques" title="General Questions" />
                                <NavTab id="rg-ques" title="Regular Questions" />
                                <NavTab id="ad-ques" title="Advanced Questions" />
                                <NavTab id="com-policy" title="Company Policies" />
                                <NavTab id="pay-option" title="Payment Options" />
                                <NavTab id="terms-condition" title="Terms & Conditions" />
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content faq-page-tab-content" id="faq-accordion">
                            {/* General Questions */}
                            <div className="tab-pane fade show active" id="gn-ques" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        <SingleFaq show={true} id="1" title="How can I contact a school directly?" desc="You can contact a school via their official website or through email/phone listed on their contact page." />

                                        <SingleFaq id="2" title="How do I find a school where I want to study?" desc="Use online search tools, school directories, and education portals to filter schools by location, program, or ratings." />

                                        <SingleFaq id="3" title="Where should I study abroad?" desc="Consider factors like course quality, costs, visa requirements, and career opportunities when choosing a study abroad destination." />

                                        <SingleFaq id="4" title="Where can I find information on private companies?" desc="Company websites, official reports, and business directories provide accurate information on private companies." />

                                        <SingleFaq id="5" title="How do I find a study abroad program?" desc="Search for programs through university websites, education fairs, online portals, and consultation agencies." />

                                        <SingleFaq id="6" title="Am I eligible for admission?" desc="Eligibility depends on program requirements, grades, language proficiency, and documentation. Always check individual program guidelines." />

                                        <SingleFaq id="7" title="What kind of support does Speaksure provide?" desc="Speaksure provides guidance on applications, study tips, and support for language and skill development." />
                                    </div>
                                </div>
                            </div>

                            {/* Regular Questions */}
                            <div className="tab-pane fade" id="rg-ques" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        <SingleFaq show={true} id="8" title="How long is my personal free trial?" desc="Your free trial lasts for 7 days, giving access to all learning materials and practice tests." />

                                        <SingleFaq id="9" title="How do I find a school where I want to study?" desc="Use detailed search filters by country, program, or course duration to locate the right school." />

                                        <SingleFaq id="10" title="Where should I study abroad?" desc="Research universities with strong reputations in your chosen field and consider student support services." />

                                        <SingleFaq id="11" title="Where can I find information on private companies?" desc="Consult official company websites, online business directories, and verified review platforms." />

                                        <SingleFaq id="12" title="How do I find a study abroad program?" desc="Check program rankings, read reviews, and contact study abroad offices for guidance." />

                                        <SingleFaq id="13" title="Am I eligible for admission?" desc="Eligibility is based on academic qualifications, language proficiency, and specific program criteria." />
                                    </div>
                                </div>
                            </div>

                            {/* Advanced Questions */}
                            <div className="tab-pane fade" id="ad-ques" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        <SingleFaq show={true} id="14" title="Where can I find information on private companies?" desc="Use business intelligence platforms, financial reports, and industry publications for in-depth company info." />

                                        <SingleFaq id="15" title="How do I find a study abroad program?" desc="Look for programs offered by accredited institutions and verify course content before applying." />

                                        <SingleFaq id="16" title="Am I eligible for admission?" desc="Check minimum GPA, prerequisite courses, and language tests required for your program." />

                                        <SingleFaq id="17" title="What kind of support does Speaksure provide?" desc="Speaksure offers mentorship, practice materials, and one-on-one consultations for students." />
                                    </div>
                                </div>
                            </div>

                            {/* Company Policies */}
                            <div className="tab-pane fade" id="com-policy" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        <SingleFaq show={true} id="18" title="How do I find a study abroad program?" desc="Company policy requires all program recommendations to follow official accreditation guidelines." />

                                        <SingleFaq id="19" title="Where can I find information on private companies?" desc="All company-related policies are available on the official internal portal or through HR." />

                                        <SingleFaq id="20" title="What kind of support does Speaksure provide?" desc="Support policies include scheduled consultations, email support, and live chat assistance." />

                                        <SingleFaq id="21" title="Am I eligible for admission?" desc="Eligibility is determined based on policy requirements, documentation, and program rules." />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div className="tab-pane fade" id="pay-option" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        <SingleFaq show={true} id="22" title="How do I find a school where I want to study?" desc="Payment options are available on the school's payment portal including credit cards and online wallets." />

                                        <SingleFaq id="23" title="Where should I study abroad?" desc="Ensure your payment method is accepted for tuition and program fees in your chosen country." />

                                        <SingleFaq id="24" title="Where can I find information on private companies?" desc="Refer to billing policies and payment terms listed by companies for detailed guidance." />

                                        <SingleFaq id="25" title="How do I find a study abroad program?" desc="Check program portals for tuition deadlines, accepted currencies, and installment options." />
                                    </div>
                                </div>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="tab-pane fade" id="terms-condition" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        <SingleFaq show={true} id="26" title="Where should I study abroad?" desc="All students must agree to the terms and conditions before enrolling in any program." />

                                        <SingleFaq id="27" title="How do I find a school where I want to study?" desc="Terms of use outline the rules for using school portals and accessing information." />

                                        <SingleFaq id="28" title="How do I find a study abroad program?" desc="Refer to official program guidelines to understand enrollment, deadlines, and policies." />
                                        
                                        <SingleFaq id="29" title="Where can I find information on private companies?" desc="Company information must be used in accordance with terms and privacy policies." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqArea;