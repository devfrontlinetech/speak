import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ModuleOneArea from '../components/eng-module-1';

const ModuleOneMain = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Result'} />
            <ModuleOneArea />
        </Wrapper>
    )
}

export default ModuleOneMain; 