import SEO from '../components/seo';
import { Wrapper } from '../layout';
import EnglishTestMain from '../components/english-test';

const EnglishTest = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'English Test'} />
            <EnglishTestMain />
        </Wrapper>
    )
}

export default EnglishTest;