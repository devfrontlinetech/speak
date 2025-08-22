import React, { useState, useEffect, useRef } from "react";
// import { Link } from 'react-router-dom';
import { FaMicrophoneAlt, FaVolumeUp, FaSmile } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines,faMicrophoneLinesSlash,faRotateRight, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fullHeart,faHeartCrack as halfHeart,faHeart as emptyHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const questions = [
  {
    text: "Do you like pizza",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/girl-01.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Maybe."],
  },
  { 
    text: "Do you eat ice cream",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/girl-02.png",
    options: ["Yes, I do.", "No, I don't.", "Rarely.", "Never."],
  },
  {
    text: "Do you want to go out",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-gif.gif",
    options: ["Yes, I do.", "No, I don't.", "Maybe.", "Not sure."],
  },
  {
    text: "Do you want to play",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-02.gif",
    options: ["Yes, I do.", "No, I don't.", "Later.", "Not sure."],
  },
  {
    text: "Do you like coffee",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-03.gif",
    options: ["Yes, I do.", "No, I don't.", "Not really.", "Only sometimes."],
  },
  {
    text: "Do you have a toy",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-04.gif",
    options: ["Yes, I do.", "No, I don't.", "I had one.", "I lost it."],
  },
  {
    text: "Do you like this game",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/girl-01.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you like to read",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/girl-02.png",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you like chocolates",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-gif.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you want a gift",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-02.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you study English",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-gif.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you like swimming",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-03.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you like animals",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-04.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Rarely."],
  },
  {
    text: "Do you enjoy playing games",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/girl-01.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you go to school",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/girl-02.png",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not anymore."],
  },
  {
    text: "Do you clean your room",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-gif.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Rarely."],
  },
  {
    text: "Do you wear glasses",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-02.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you like dancing",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-03.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
  {
    text: "Do you write emails",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/boy-04.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Rarely."],
  },
  {
    text: "Do you like winter",
    answer: "Yes, I do. / No, I don't.",
    gif: "../assets/images/english-test/girl-01.gif",
    options: ["Yes, I do.", "No, I don't.", "Sometimes.", "Not really."],
  },
];

const introSteps = [
  { icon: <FaVolumeUp />, text: "Listen carefully to each question" },
  { icon: <FaMicrophoneAlt />, text: "Speak your answer clearly" },
  { icon: <FaSmile />, text: "Have fun while learning!" },
];

const ModuleOne = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spokenWord, setSpokenWord] = useState("");
  const [showIntro, setShowIntro] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showSheet, setShowSheet] = useState(false);
  const [showHeartPopup, setShowHeartPopup] = useState(false);
  const [showFailHeartPopup, setShowFailHeartPopup] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [hasShownHeartWarning, setHasShownHeartWarning] = useState(false);
  const [hasShownFailPopup, setHasShownFailPopup] = useState(false);
  const [gifMood, setGifMood] = useState("normal");
  const [timeLeft, setTimeLeft] = useState(20);
  const [sheetViewed, setSheetViewed] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const coinSound = "/assets/audio/coin.mp3";
  const wrongSound = "/assets/audio/wrong.mp3";

  // GOOD:
  //   playSound(match ? coinSound : wrongSound);

  const timerRef = useRef(null);
  const recognitionRef = useRef(null);
  const audioContextRef = useRef(null);

  const currentQuestion = questions[currentIndex];

  // ✅ Calculate total score based on match
  const correctCount = userAnswers.filter((item) =>
    questions
      .find((q) => q.text === item.question)
      ?.options.some((opt) =>
        opt
          .toLowerCase()
          .split(/\s+/)
          .some((word) => item.spokenAnswer.toLowerCase().includes(word))
      )
  ).length;

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () =>
          window.speechSynthesis.getVoices();
      }
    };
    loadVoices();
  }, []);

  useEffect(() => {
    if (!showIntro) speakQuestion(currentQuestion.text);
    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, [currentQuestion, showIntro]);

  useEffect(() => {
    setTimeLeft(20);
    if (timerRef.current) clearInterval(timerRef.current);

    // ✅ Only start the timer if not in intro and sheet hasn't been viewed
    if (!showIntro && !sheetViewed) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleNextQuestion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentQuestion, showIntro, sheetViewed]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!showIntro && !showSheet) {
        e.preventDefault();
        e.returnValue = ""; // Shows native browser confirmation popup
      }
    };

    // const handlePopState = (e) => {
    //   if (!showIntro && !showSheet) {
    //     const confirmed = window.confirm(
    //       "⚠️ Your test will be erased if you go back. Do you want to leave?"
    //     );
    //     if (!confirmed) {
    //       window.history.pushState(null, "", window.location.pathname);
    //     }
    //   }
    // };

    window.addEventListener("beforeunload", handleBeforeUnload);
    // window.addEventListener("popstate", handlePopState);
    window.history.pushState(null, "", window.location.pathname); // Prevent default back

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // window.removeEventListener("popstate", handlePopState);
    };
  }, [showIntro, showSheet]);

  const speakQuestion = (text) => {
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) =>
        voice.lang === "en-US" && voice.name.toLowerCase().includes("zira")
    );
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    if (femaleVoice) utterance.voice = femaleVoice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    utterance.onend = () => {
      if (isMicOn) startListening();
    };
    setTimeout(() => {
      if (!window.speechSynthesis.speaking && isMicOn) startListening();
    }, 1000);
  };

  const playSound = async (src) => {
    const sound = new Audio(src);
    try {
      await sound.play();
    } catch (err) {
      if (audioContextRef.current) await audioContextRef.current.resume();
      try {
        await sound.play();
      } catch (e) {
        console.error("Sound failed:", e);   
      }
    }
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech Recognition not supported.");
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = true;
    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript
        .toLowerCase()
        .trim();
      if (!transcript) return;
      setSpokenWord(transcript);
      const match = currentQuestion.options.some((opt) =>
        opt
          .toLowerCase()
          .split(/\s+/)
          .some((word) => transcript.includes(word))
      );
      playSound(match ? coinSound : wrongSound);
      setGifMood(match ? "happy" : "sad");
      setTimeout(() => setGifMood("normal"), 2000);
    };
    recognition.onerror = (e) => console.error("Speech error:", e);
    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    recognitionRef.current = null;
  };

  const toggleMic = () => {
    const next = !isMicOn;
    setIsMicOn(next);
    next ? startListening() : stopListening();
  };

  const handleNextQuestion = () => {
    const answerObj = {
      question: currentQuestion.text,
      correctAnswer: currentQuestion.answer,
      spokenAnswer: spokenWord || "___",
    };

    setUserAnswers((prev) => [...prev, answerObj]);

    const matched = currentQuestion.options.some((opt) =>
      opt
        .toLowerCase()
        .split(/\s+/)
        .some((word) => spokenWord.toLowerCase().includes(word))
    );

    let newMistakes = mistakes;

    if (!matched) {
      playSound(wrongSound);

      setGifMood("sad");
      newMistakes = mistakes + 1;
      setMistakes(newMistakes);

      if (!showIntro) {
        if (newMistakes >= 10 && !hasShownFailPopup) {
          setShowFailHeartPopup(true);
          setHasShownFailPopup(true);
          return;
        }

        if (!hasShownHeartWarning && newMistakes === 1) {
          setShowHeartPopup(true);
          setHasShownHeartWarning(true);
          return;
        }
      }
    } else {
      setGifMood("happy");
    }

    setSpokenWord("");

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // ✅ Show completion popup instead of alert
      setShowCompletionPopup(true);
    }
  };

  const handleKeepGoing = () => {
    setShowHeartPopup(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleKeepStart = () => {
    setShowFailHeartPopup(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleNextTest = () => {
    router.push("/module-2"); // navigates to next test
  };

  return (
    <div className="body-box">
      <div className="moduleone-container">
        <div className="module-right">
          {showIntro ? (
            <div className="intro-message">
              <div className="flex-div">
                <img
                  src="../assets/images/english-test/ohh.gif"
                  alt="Cartoon Boy"
                  className="cartoon-image"
                />
                <div className="instruction-list">
                  {introSteps.map((step, index) => (
                    <div key={index} className="instruction-item">
                      <span className="instruction-icon">{step.icon}</span>
                      <span className="instruction-text">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="start-btn"
                onClick={() => {
                  setShowIntro(false);
                  setShowHeartPopup(false);
                  setShowFailHeartPopup(false);
                  setHasShownFailPopup(false);
                  setHasShownHeartWarning(false);
                }}
              >
                Start Test
              </button>
            </div>
          ) : (
            <>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${
                        ((currentIndex + 1) / questions.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="common-box">
                <div className="heart-container">
                  <div className="heart-bar">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const heartLossIndex = i * 2;
                      const isEmpty = mistakes >= heartLossIndex + 2;
                      const isHalf = mistakes === heartLossIndex + 1;
                      return (
                        <span key={i} className="heart-icon">
                          {isEmpty ? (
                            <FontAwesomeIcon
                              icon={emptyHeart}
                              className="empty-heart"
                            />
                          ) : isHalf ? (
                            <FontAwesomeIcon
                              icon={halfHeart}
                              className="half-heart"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={fullHeart}
                              className="full-heart"
                            />
                          )}
                          <br />
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="heart-container">
                  <div className="timer-clock compass-timer">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                      {/* Outer Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#ccc"
                        strokeWidth="5"
                        fill="none"
                      />

                      {/* Background Arc following the needle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="44"
                        stroke={`rgb(${Math.min(
                          255,
                          255 - (timeLeft / 20) * 255
                        )}, ${Math.min(255, (timeLeft / 20) * 255)}, 0)`}
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={((20 - timeLeft) / 20) * 282.6}
                        transform="rotate(-90 50 50)"
                        style={{
                          transition:
                            "stroke-dashoffset 1s linear, stroke 1s linear",
                        }}
                      />

                      {/* Rotating Needle */}
                      <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="5"
                        stroke={`rgb(${Math.min(
                          255,
                          255 - (timeLeft / 20) * 255
                        )}, ${Math.min(255, (timeLeft / 20) * 255)}, 0)`}
                        strokeWidth="4"
                        strokeLinecap="round"
                        transform={`rotate(${
                          ((20 - timeLeft) / 20) * 360
                        } 50 50)`}
                        style={{
                          transition: "transform 1s linear, stroke 1s linear",
                        }}
                      />

                      {/* Center Dot */}
                      <circle cx="50" cy="50" r="3" fill="#333" />

                      {/* Countdown Text */}
                      {/* <text x="50%" y="90" textAnchor="middle" fontSize="14" fill="#333">
                      {timeLeft}s </text> */}
                    </svg>
                  </div>
                  {/* timerclock */}

                  <div className="mic-button-group">
                    <button onClick={toggleMic} className="mic-toggle-button">
                      <FontAwesomeIcon
                        icon={
                          isMicOn ? faMicrophoneLines : faMicrophoneLinesSlash
                        }
                        size="lg"
                        color={isMicOn ? "#007858" : "#cc0000"}
                      />
                    </button>
                    <button
                      onClick={() => speakQuestion(currentQuestion.text)}
                      className="reply-btn"
                    >
                      <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                  </div>
                </div>{" "}
                {/* heartcontainer */}
              </div>
              {/* </div> */}

              <div className="module-box">
                <div className="img-ques-div">
                  {currentQuestion.gif && (
                    <img
                      src={currentQuestion.gif}
                      alt="question gif"
                      className="question-gif"
                    />
                  )}
                  <div className="question-text">
                    <p className="q-text">
                      {currentQuestion.text}{" "}
                      <span className="answer-blank">
                        {spokenWord || "___"}
                      </span>
                      ?
                    </p>
                  </div>
                </div>

                <div className="module-lefts">
                  {!showIntro && (
                    <div className="gif-display">
                      <img
                        src={
                          gifMood === "happy"
                            ? "/assets/images/english-test/happy.gif"
                            : gifMood === "sad"
                            ? "/assets/images/english-test/sad.gif"
                            : "/assets/images/english-test/normal.gif"
                        }
                        alt="Mood GIF"
                        className="mood-gif"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="quiz-right">
                  <div className="options">
                    {currentQuestion.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className="option"
                        onClick={() => setSpokenWord(opt)}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                  <button
                    className="continue-btn"
                    onClick={handleNextQuestion}
                    disabled={
                      currentIndex === questions.length - 1 && showSheet
                    }
                    style={{
                      opacity:
                        currentIndex === questions.length - 1 && showSheet
                          ? 0.5
                          : 1,
                      cursor:
                        currentIndex === questions.length - 1 && showSheet
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHandPointRight}
                      className="right-icon"
                    />{" "}
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {showSheet && (
          <div className="modal-overlay" onClick={() => setShowSheet(false)}>
            <div className="sheet-modal" onClick={(e) => e.stopPropagation()}>
              <h2 className="sheet-text">Your Answer Sheet</h2>
              <h3 className="score-text">
                Score: {correctCount} / {questions.length}
              </h3>
              <div className="sheet-scroll">
                <table className="answer-table">
                  <thead>
                    <tr>
                      <th>S/No</th>
                      <th>Question</th>
                      <th>Your Answer</th>
                      <th>Expect Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userAnswers.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.question}</td>
                        <td>{item.spokenAnswer}</td>
                        <td>{item.correctAnswer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="close-btn" onClick={() => setShowSheet(false)}>
                Close
              </button>

              <button className="nxt-test-btn" onClick={handleNextTest}>
                Next Test
              </button>
            </div>
          </div>
        )}

        {!showIntro && showHeartPopup && (
          <div className="popup-overlay">
            <div className="popup-message">
              <h3 className="heart-text">Keep your heart's carefully!</h3>
              <div className="hearts">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="heart">
                    <FontAwesomeIcon
                      icon={fullHeart}
                      style={{ color: "red" }}
                    />
                  </span>
                ))}
              </div>
              <h2>
                Each Mistake Costs{" "}
                <FontAwesomeIcon icon={fullHeart} style={{ color: "red" }} />
              </h2>
              {/* <img
                src="../assets/images/english-test/sad.gif"
                alt="Popup"
                className="pop-img"
              /> */}
              <button className="keep-going-btn" onClick={handleKeepGoing}>
                Keep Going
              </button>
            </div>
          </div>
        )}

        {!showIntro && showCompletionPopup && (
          <div className="popup-overlay-success">
            <div className="popup-message-success">
              <h2 className="success-text">
                🎉 You have successfully completed the Module 1 test!
              </h2>
              <p className="instruction-text">
                Click the button below to check your answer sheet.
              </p>
              <button
                className="start-btn"
                onClick={() => {
                  setShowCompletionPopup(false);
                  setShowSheet(true);
                  setSheetViewed(true);
                }}
              >
                Check Your Sheet
              </button>
            </div>
          </div>
        )}

        {!showIntro && showFailHeartPopup && (
          <div className="popup-lost-overlay">
            <div className="img-lost-div">
              <img
                src="../assets/images/english-test/sad.gif"
                alt="Pop"
                className="pop-img-hrt"
              />
            </div>
            <div className="popup-lost-message">
              <h3 className="lost-text">Oh! No!, You lost all your hearts</h3>
              <h3 className="keep-text">Don't Worry</h3>
              <button className="keep-lost-btn" onClick={handleKeepStart}>
                Keep Going
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleOne;
