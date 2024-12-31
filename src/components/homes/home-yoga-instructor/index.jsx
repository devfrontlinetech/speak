import React from 'react';
import { Footer, Header } from '../../../layout';
import AboutArea from './about-area';
import CounterArea from './counter-area';
import CourseArea from './course-area';
import HeroArea from './hero-area';
import InstagramArea from './instagram-area';
import TeamArea from './team-area';
import TestimonialArea from './testimonial-area';
import VideoArea from './video-area';
import WhyChose from './why-chose';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                 <Header no_top_bar={true}/>
                 <HeroArea/>
                <AboutArea/>
{/*                 <CourseArea/> */}
                <CounterArea/>
                <WhyChose/>
{/*                 <TeamArea/> */}
{/*                 <VideoArea/> */}
                <TestimonialArea/>
{/*                 <InstagramArea/> */}
                <Footer/>
            </div>
        </div>
    )
}

export default index;
