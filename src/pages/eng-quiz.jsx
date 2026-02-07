import SEO from "../components/seo";
import { Wrapper } from "../layout";
import EngQuiz from "../components/eng-quiz";

const EngQuizPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Landing Demo"} />
      <EngQuiz />
    </Wrapper>
  );
};

export default EngQuizPage;
