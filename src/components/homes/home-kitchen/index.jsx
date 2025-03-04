import React from 'react';
import { Footer, Header } from '../../../layout';
import AboutArea from './about-area';
import AdBanner from './ad-banner';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CategoryArea from './category-area';
import CounterArea from './counter-area';
import CoursesArea from './courses-area';
import FaqArea from './faq-area';
import HeroArea from './hero-area';
import InstagramArea from './instagrams';
import TeamArea from './team-area';
import TestimonialArea from './testimonial-area';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <HeroArea/>
                <CategoryArea/>
                <AboutArea/>
{/*                 <BrandArea/> */}
{/*                 <CoursesArea/> */}
                <TestimonialArea/>
                <CounterArea/>
 {/*                <TeamArea/>   */}
                <FaqArea/>
                <AdBanner/>
{/*                 <BlogArea/> */}
{/*                 <InstagramArea/> */}
                <Footer dark_bg={true} />
            </div>
        </div>
    )
}

export default index;
