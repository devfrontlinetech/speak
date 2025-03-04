import React from 'react';

const SidebarOne = () => {
    return (
        <div className="edu-blog-sidebar">
            <div className="edu-blog-widget widget-search">
                <div className="inner">
                    <h4 className="widget-title">Search</h4>
                    <div className="content">
                        <form className="blog-search" action="#">
                            <button className="search-button"><i className="icon-2"></i></button>
                            <input type="text" placeholder="Search" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-tags">
                <div className="inner">
                    <h4 className="widget-title">Tags</h4>
                    <div className="content">
                        <div className="tag-list">
                            <a href="contact-us">Language</a>
                            <a href="contact-us">eLearn</a>
                            <a href="contact-us">Tips</a>
                            <a href="contact-us">Course</a>
                            <a href="contact-us">Motivation</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-categories">
                <div className="inner">
                    <h4 className="widget-title">Categories</h4>
                    <div className="content">
                        <ul className="category-list">
                            <li><a href="spoken-english">Spoken English <span>(3)</span></a></li>
                            <li><a href="competitive-exam">Competitive Exam <span>(7)</span></a></li>
                            <li><a href="language-training">Language Training<span>(2)</span></a></li>
                            <li><a href="contact-us">Interview Training<span>(1)</span></a></li>
                            <li><a href="contact-me">Visa Interview<span>(3)</span></a></li>
                            <li><a href="language-training">Soft Skills<span>(9)</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-action">
                <div className="inner">
                    <h4 className="title">Get Online Courses From <span>SpeakSure</span></h4>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>Nostrud exer ciation laboris aliqup</p>
                    <a href="contact-me" className="edu-btn btn-medium">Start Now <i className="icon-4"></i></a>
                </div>
            </div>
        </div>
    )
}

export default SidebarOne;
