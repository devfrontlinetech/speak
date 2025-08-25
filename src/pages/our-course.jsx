import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CourseStyleFourMain from '../components/course-style-4';

const CourseStyleFour = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Our Courses'} />
            <CourseStyleFourMain />
        </Wrapper>
    )
}

export default CourseStyleFour;