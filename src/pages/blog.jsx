import SEO from '../components/seo';
import { Wrapper } from '../layout';
import BlogMain from '../components/blog-details';

const Blog = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Blog'} />
            <BlogMain />
        </Wrapper>
    )
}

export default Blog;