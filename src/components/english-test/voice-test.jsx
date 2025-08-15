import Link from "next/link";




const VoiceTest = () => {
  const testLink = [
    { link: 'Practice 20 Questions with "Do" Sentences', path: "/module-1" },
    { link: 'Practice 20 Questions with "Are" Sentences', path: "/module-2" },
    { link: "More Modules Coming Soon...", path: "/module-3" },
  ];

  return (
    <div className="voice-container">
      <div className="test-right">
        <h1 className="right-head">SpeakTest</h1>

        <div className="test-box">
          {testLink.map((item, index) => (
            <Link key={index} href={item.path}>  
              <h3 className="test-link">{item.link}</h3>
            </Link>
          ))}   
        </div>
      </div>
    </div>
  );
};

export default VoiceTest;
