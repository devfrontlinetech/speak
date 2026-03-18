import Link from "next/link";


const VoiceTest = () => {
  const testLink = [
    { link: 'Practice 20 Questions with "Do" Sentences', path: "/module-one" },
    { link: 'Practice 20 Questions with "Are" Sentences', path: "/module-two" },
    { link: "More Modules Coming Soon...", path: "/module-three" },
  ];

  return (
    <div className="voice-container">
    

      <div className="test-right">
        <h1 className="right-head">SpeakTest</h1>

        <div className="test-box">
          {testLink.map((item, index) => (
            <Link key={index} to={item.path}>
              <h3 className="test-link">{item.link}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceTest;
