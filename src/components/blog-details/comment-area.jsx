import React from 'react';

const CommentArea = () => {
    return (
        <div className="comment-area">
            <h3 className="heading-title">Comments</h3>
            <div className="comment-list-wrapper">

                <div className="comment">
                    <div className="thumbnail">
                        <img src="/assets/images/blog/comment-01.jpg" alt="Comment Images" />
                    </div>
                    <div className="comment-content">
                        <h5 className="title">Haley Bennet</h5>
                        <span className="date">Oct 10, 2021</span>
                        <p>Really enjoyed this article! The insights on modern web design were clear and practical. Looking forward to more posts like this.</p>
                        <div className="reply-btn-wrapper">
                            <a className="reply-btn" href="#">Reply</a>
                        </div>
                    </div>
                </div>

                <div className="comment comment-reply">
                    <div className="thumbnail">
                        <img src="/assets/images/blog/comment-02.jpg" alt="Comment Images" />
                    </div>
                    <div className="comment-content">
                        <h5 className="title">Simon Baker</h5>
                        <span className="date">Oct 10, 2021</span>
                        <p>Thanks for sharing these tips! I especially liked the section about responsive layouts – it helped me improve my recent project.</p>
                        <div className="reply-btn-wrapper">
                            <a className="reply-btn" href="#">Reply</a>
                        </div>
                    </div>
                </div>

                <div className="comment">
                    <div className="thumbnail">
                        <img src="/assets/images/blog/comment-03.jpg" alt="Comment Images" />
                    </div>
                    <div className="comment-content">
                        <h5 className="title">Richard Gere</h5>
                        <span className="date">Oct 10, 2021</span>
                        <p>This was very informative! I especially appreciated the examples provided – they made complex concepts much easier to understand.</p>
                        <div className="reply-btn-wrapper">
                            <a className="reply-btn" href="#">Reply</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommentArea;