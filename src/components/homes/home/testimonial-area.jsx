import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

const testimonial_data = [
    {
        img: '/assets/images/testimonial/testimonial-01.png',
        desc: 'Very precise and targeted training sessions for acing IELTS test.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Sakthivel K',
        title: 'Student'
    },
    {
        img: '/assets/images/testimonial/testimonial-02.png',
        desc: 'Best part is, they teach IELTS and many other exams . So, we can got lots of opportunity to speak.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Vishnu',
        title: 'Student'
    },
    {
        img: '/assets/images/testimonial/testimonial-03.png',
        desc: 'The best place do IELTS training. All you got to do is trust them follow all their advice sincerely.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Hema G',
        title: 'Student'
    },
    {
        img: '/assets/images/testimonial/testimonial-04.png',
        desc: 'I speak fluent English now, with the help of his trainers.suggest best academy',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Nithish R',
        title: 'Student'
    }
]

export default function TestimonialArea() {
    const [loop,setLoop] = useState(false);
    useEffect(() => setLoop(true) ,[])
    return (
        <div className="testimonial-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-lg-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Testimonials</span>
                                <h2 className="title">What Our Students Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>An excellent learning experience. The instructors were very knowledgeable and always available for questions.</p>
                                <a href="#" className="edu-btn btn-large">View All<i className="icon-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={loop}
                            className="home-one-testimonial-activator swiper "
                            modules={[Autoplay]}
                            pagination={false}
                            grabCursor={true}
                            speed={1500}
                            autoplay={{
                                delay: 3500
                            }}
                            breakpoints={{
                                577: {
                                slidesPerView: 2
                                }
                            }}
                        >
                            {testimonial_data.map((testi, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-grid">
                                        <div className="thumbnail">
                                            <img src={testi.img} alt="Testimonial" />
                                            <span className="qoute-icon"><i className="icon-26"></i></span>
                                        </div>
                                        <div className="content">
                                            <p>{testi.desc}</p>
                                            <div className="rating-icon">
                                                {testi.ratings}
                                            </div>
                                            <h5 className="title">{testi.name}</h5>
                                            <span className="subtitle">{testi.title}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
