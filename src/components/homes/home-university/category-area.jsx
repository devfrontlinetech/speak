import React from 'react';
import { BookLibrary, ScholarshipFacility, SkilledLecturers } from '../../../svg';

const categories = [
    {
        icon: <ScholarshipFacility/>,
        title: 'Scholarship Facility',
        text: 'We provide scholarships to help talented students pursue their education without financial constraints.',
        color: 'color-primary-style'
    },
    {
        icon: <SkilledLecturers/>,
        title: 'Skilled Lecturers',
        text: 'Our experienced faculty deliver engaging lectures and practical insights to enhance your learning experience.',
        color: 'color-secondary-style'
    },
    {
        icon: <BookLibrary/>,
        title: 'Book Library & Store',
        text: 'Access a vast collection of books and learning materials, both physical and digital, to support your studies.',
        color: 'color-extra02-style'
    }
];

const CategoryArea = () => {
    return (
        <div className="features-area-3">
            <div className="container">
                <div className="features-grid-wrap">
                    {categories.map((c,i) => (
                        <div key={i} className={`features-box features-style-3 ${c.color} edublink-svg-animate`}>
                            <div className="icon">
                                {c.icon}
                            </div>
                            <div className="content">
                                <h4 className="title">{c.title}</h4>
{/*                                 <p>{c.text}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;
