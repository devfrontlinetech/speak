import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CourseStyleOneMain from '../components/course-style-1';

const CourseStyleOne = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Spoken English'} />
            <CourseStyleOneMain />
        </Wrapper>
    )
}

export default CourseStyleOne;