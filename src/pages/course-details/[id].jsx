import { useRouter } from 'next/router';
import React from 'react';
import SEO from '../../components/seo';
import { course_data } from '../../data';
import { Wrapper } from '../../layout';
import CourseDetailsMain from '../../components/course-details';

const DynamicCourseDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const course = course_data.find(item => String(item.id) === String(id))
    return (
        <Wrapper>
            <SEO pageTitle={'English Program'} />
            <CourseDetailsMain course={course} />
        </Wrapper>
    )
}

export default DynamicCourseDetails;

export async function getStaticPaths() {
    const paths = course_data.map((course) => {
        return {
            params:{
                id:`${course.id}`
            }
        }
    })
    return {
      paths,
      fallback: false,
    }
  }

export async function getServerSideProps(context) {
    return {
        props: {}
    }
}
