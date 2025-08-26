import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ModuleThreeArea from '../components/eng-module-3';

const ModuleThreeMain = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Result'} />
            <ModuleThreeArea />
        </Wrapper>
    )
}

export default ModuleThreeMain;