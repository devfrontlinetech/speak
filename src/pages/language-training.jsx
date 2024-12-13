import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CourseStyleThreeMain from '../components/course-style-3';

const CourseStyleThree = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Language training'} />
            <CourseStyleThreeMain />
        </Wrapper>
    )
}

export default CourseStyleThree;