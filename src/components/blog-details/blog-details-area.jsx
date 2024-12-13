import React from 'react';
import BlogSidebar from '../blog/blog-sidebar';
import BlogCommentForm from '../forms/blog-comment-form';
import CommentArea from './comment-area'; 

const BlogDetailsArea = ({blog}) => {
    return (
        <div className="blog-details-area section-gap-equal">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="blog-details-content">
                            <div className="entry-content">
                                <span className="category">Student</span>
                                <h3 className="title">{blog?.title}</h3>
                                <ul className="blog-meta">
                                    <li><i className="icon-27"></i>{blog?.date}</li>
                                    <li><i className="icon-28"></i>Com {blog?.comment}</li>
                                </ul>
                                <div className="thumbnail">
                                    <img src="/assets/images/blog/blog-large-1.jpg" alt="Blog Image" />
                                </div>
                            </div>

                            <p>Learning to speak English confidently is essential in today’s globalized world. Whether you are learning English for work, travel, or personal growth, improving your speaking skills is a key aspect of language proficiency. Here are some tips to help you improve your spoken English:</p>


                            <p>The most important factor in improving your spoken English is regular practice. Even if it’s just 15-30 minutes a day, practicing speaking is essential. Try to find a language exchange partner, or use language apps that connect you with native speakers.</p>

                            <ul>
                                <li>Join Speaking Clubs or Groups</li>
                                <li>Be Patient and Stay Consistent</li>
                                <li>Practice Speaking Every Day.</li>
                            </ul>

                            <blockquote>
                                <p>English is easiest language to speak badly.</p>
                                <h5 className="author">George Bernard Shaw</h5>
                            </blockquote>

                            <h3 className="title">The Complete Guideness</h3>
                            <p>Language learning is a marathon, not a sprint. Be patient with yourself and stay consistent. The more time and effort you put into improving your speaking skills, the faster you’ll notice progress.</p>


                            <div className="features-image">
                                <div className="row g-md-5">
                                    <div className="col-6">
                                        <div className="thumb">
                                            <img src="/assets/images/blog/features-1.jpg" alt="Features Images" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="thumb">
                                            <img src="/assets/images/blog/features-2.jpg" alt="Features Images" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                                <p>Improving your spoken English takes time and dedication, but with these strategies, you’ll see improvement. Stay motivated and practice regularly, and soon enough, you’ll be speaking English with confidence!</p>

                                <p>If you're serious about improving your spoken English, consider enrolling in a class with a professional instructor. A qualified teacher can provide structured lessons, helpful feedback, and more focused practice opportunities to help you improve faster.</p>

                            <h3 className="title">Intrinsic Motivation</h3>
                          <p>Making mistakes is a natural part of the language learning process. Don’t be afraid to make errors when speaking. The more you speak, the more you’ll learn. So, embrace mistakes and keep practicing!</p>
                            
                            <ul>
                                <li>Expand Your Vocabulary</li>
                                <li>Mimic Native Speakers</li>
                                <li>Think in English.</li>
                            </ul>

                            <div className="blog-share-area">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="blog-tags">
                                            <h6 className="title">Tags:</h6>
                                            <div className="tag-list">
                                                <a href="#">Language</a>
                                                <a href="#">eLearn</a>
                                                <a href="#">Tips</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="blog-share">
                                            <h6 className="title">Share on:</h6>
                                            <ul className="social-share icon-transparent">
                                                <li>
                                                    <a href="https://www.facebook.com/frontlinetechin/"><i className="icon-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/FrontlineTechin"><i className="icon-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/frontlinetechnologies_"><i className="icon-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-author">
                            <div className="thumbnail">
                                <img src="/assets/images/blog/author-01.jpg" alt="Author Images" />
                            </div>
                            <div className="author-content">
                                <h5 className="title">RR Anbuthane</h5>
                                <p>Welcome to Speaksure Academy, your trusted destination for mastering English proficiency exams.</p>
                                <ul className="social-share icon-transparent">
                                    <li>
                                        <a href=" https://www.facebook.com/frontlinetechin/"><i className="icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/FrontlineTechin"><i className="icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/frontline-technologies"><i className="icon-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="blog-pagination">
                            <div className="row g-5">
                                <div className="col-lg-6">
                                    <div className="blog-pagination-list prev-post">
                                        <a href="#">
                                            <i className="icon-west"></i>
                                            <span>Instructional Design and Adult Learners</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="blog-pagination-list next-post">
                                        <a href="#">
                                            <span>Qualification for Students Satisfaction Rate</span>
                                            <i className="icon-east"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Start Comment Area  */}
                     {/* <CommentArea />
                        {/*  End Comment Area  */}
                        <div className="comment-form-area">
                            <h3 className="heading-title">Leave Your Comment Here</h3>
                            {/* form start */}
                            <BlogCommentForm /> 
                            {/* form end */}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        {/* sidebar start */}
                        <BlogSidebar />
                        {/* sidebar end */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsArea;