import React, { useState, useEffect, useMemo } from 'react';

const ClimbingQuiz = ({ topic, knowledgeLevel, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // Quiz data organized by topic and difficulty
  const quizData = {
    'rope-soloing': {
      beginner: [
        {
          question: "What is the primary purpose of a backup knot in a rope soloing system?",
          answers: [
            "To arrest your fall if the belay device fails",
            "To mark progress on the route",
            "To add weight to the rope",
            "To create a comfortable handle"
          ],
          correctIndex: 0,
          explanation: "Backup knots are tied in the brake strand of the rope and clipped to your harness. If your belay device fails or slips, these knots will jam against it and stop your fall."
        },
        {
          question: "When lead rope soloing, why is the first piece of protection often called the 'Jesus piece'?",
          answers: [
            "Because it prevents a potentially catastrophic factor 2 fall",
            "Because it's always placed at the highest point",
            "Because it's named after its inventor",
            "Because it requires divine intervention to place properly"
          ],
          correctIndex: 0,
          explanation: "The 'Jesus piece' is critical because it prevents a factor 2 fall directly onto your anchor, which could generate enough force to break gear or pull out the anchor."
        },
        {
          question: "Which of the following is NOT a typical component of a lead rope soloing system?",
          answers: [
            "A rope controller at the top of the route",
            "A self-belay device on your harness",
            "Backup knots in the brake strand",
            "A multi-directional ground anchor"
          ],
          correctIndex: 0,
          explanation: "Lead rope soloing uses a self-belay device carried by the climber, not a controller at the top of the route (which would be used in top-rope soloing)."
        },
        {
          question: "When using a GriGri for rope soloing, how should it be oriented?",
          answers: [
            "Usually upside-down compared to normal belaying",
            "Exactly the same as normal belaying",
            "Horizontally across the chest",
            "With the handle removed for safety"
          ],
          correctIndex: 0,
          explanation: "The GriGri is typically oriented upside-down compared to normal belaying to ensure proper rope feeding and locking in a fall."
        },
        {
          question: "What is the primary challenge of multi-pitch rope soloing compared to single-pitch?",
          answers: [
            "Each pitch must be climbed three times (lead, clean, re-ascend)",
            "It requires a completely different set of equipment",
            "It can only be done with static ropes",
            "It can only be performed in alpine environments"
          ],
          correctIndex: 0,
          explanation: "The main challenge is efficiency: each pitch must be climbed, then rappelled to clean gear, then re-ascended - effectively climbing each pitch three times."
        }
      ],
      intermediate: [
        {
          question: "What is a critical risk when transitioning between pitches during multi-pitch rope soloing?",
          answers: [
            "Making errors during system changeovers",
            "Running out of water",
            "Rope drag",
            "Getting sunburned"
          ],
          correctIndex: 0,
          explanation: "The transitions between climbing, rappelling, and ascending systems are where many accidents happen in rope soloing. Each transition must be carefully executed with proper redundancy."
        },
        {
          question: "Why is chest harness or tether often used when lead rope soloing with a GriGri?",
          answers: [
            "To maintain proper device orientation for reliable braking",
            "To prevent the device from being dropped",
            "To distribute the weight more comfortably",
            "To store extra gear"
          ],
          correctIndex: 0,
          explanation: "A chest harness holds the GriGri in the correct orientation on your torso, which is critical for proper rope feeding and ensuring the correct locking angle during a fall."
        },
        {
          question: "When rappelling to clean gear during rope soloing, what challenge must be managed?",
          answers: [
            "Avoiding rope tangles while cleaning gear on traversing routes",
            "The need to rappel extremely quickly",
            "The inability to use standard rappel devices",
            "The need to climb back up each rappel"
          ],
          correctIndex: 0,
          explanation: "Cleaning gear on traversing routes can be particularly challenging as the rope may pull you away from protection pieces. Planning the cleaning sequence is important."
        },
        {
          question: "Which of these is a common lead rope soloing system component?",
          answers: [
            "A chest harness or tether to position the belay device",
            "A pulley at the anchor",
            "A weight bag to maintain rope tension",
            "A second person to manage rope management"
          ],
          correctIndex: 0,
          explanation: "A chest harness or tether is commonly used to position the belay device correctly on the climber's torso for proper function."
        },
        {
          question: "What issue must be considered when placing protection during lead rope soloing that's less critical with a partner?",
          answers: [
            "How you'll be able to clean each piece when rappelling",
            "The color of the protection pieces",
            "The weight of each piece",
            "The manufacturer of each piece"
          ],
          correctIndex: 0,
          explanation: "When soloing, you must clean your own gear on rappel, so considering how each piece will be retrievable is important, especially on traversing routes."
        }
      ],
      advanced: [
        {
          question: "What is a key consideration when building a rope soloing anchor that differs from a standard climbing anchor?",
          answers: [
            "It must be capable of holding significant upward pull",
            "It requires exactly three pieces of protection",
            "It must be built using only cams",
            "It must be at least 10 feet off the ground"
          ],
          correctIndex: 0,
          explanation: "Since a factor 2 fall directly onto the anchor is possible in the early stages of the climb, the anchor must be built to withstand significant upward pull."
        },
        {
          question: "Why is rope management particularly critical during lead rope soloing?",
          answers: [
            "Poor management can cause backup knots to jam in the device or prevent proper feeding",
            "The rope must be a specific color",
            "The rope must be coiled in a counterclockwise direction",
            "The rope must be soaked in water before use"
          ],
          correctIndex: 0,
          explanation: "Poor rope management can cause backup knots to jam prematurely in the device, or create slack that prevents proper rope feeding and increases fall distances."
        },
        {
          question: "What is a key difference in fall dynamics when rope soloing versus climbing with a partner?",
          answers: [
            "Falls are often harder and more sudden due to lack of dynamic belayer movement",
            "Falls are always softer because the system is more elastic",
            "Falls are exactly the same as with a partner belay",
            "Falls are impossible if the system is set up correctly"
          ],
          correctIndex: 0,
          explanation: "When soloing, falls are often harder and more sudden because there's no dynamic belayer movement to help absorb the impact as there would be with a partner belay."
        },
        {
          question: "When using a Silent Partner for rope soloing, what is a critical consideration?",
          answers: [
            "The device must be used with the correct rope diameter range",
            "The device must be used with a static rope only",
            "The device must be placed at the anchor, not on the climber",
            "The device cannot be used with backup knots"
          ],
          correctIndex: 0,
          explanation: "The Silent Partner is designed to work with specific rope diameter ranges. Using a rope outside the specified range can cause the device to malfunction."
        },
        {
          question: "What is a key advantage of a mechanical self-belay device (like GriGri) over a progress-capture pulley system for rope soloing?",
          answers: [
            "It allows true lead climbing with the rope running from the ground up",
            "It is less expensive",
            "It weighs significantly less",
            "It doesn't require any backup systems"
          ],
          correctIndex: 0,
          explanation: "A mechanical self-belay device allows true lead climbing with the rope running from the ground up through protection, whereas progress-capture pulley systems usually require a pre-fixed rope from above."
        }
      ]
    }
  };

  // Memoize questions based on topic and knowledge level to prevent recreation on every render
  const questions = useMemo(() => {
    if (quizData[topic] && quizData[topic][knowledgeLevel]) {
      return quizData[topic][knowledgeLevel];
    }
    // Default to beginner questions if specific level not found
    return quizData[topic]?.beginner || [];
  }, [topic, knowledgeLevel]);

  // Shuffle answers when current question changes
  useEffect(() => {
    if (questions.length > 0 && currentQuestion < questions.length) {
      const currentQ = questions[currentQuestion];
      // Create array of answer objects with original index
      const answerObjects = currentQ.answers.map((text, index) => ({ 
        text, 
        originalIndex: index 
      }));
      
      // Shuffle the array with a more stable approach
      const shuffled = [...answerObjects];
      // Fisher-Yates shuffle algorithm
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      setShuffledAnswers(shuffled);
    }
  }, [currentQuestion, questions.length]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (!answerSubmitted) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null && !answerSubmitted) {
      // Check if selected answer is correct
      const isCorrect = shuffledAnswers[selectedAnswer].originalIndex === questions[currentQuestion].correctIndex;
      
      if (isCorrect) {
        setScore(score + 1);
      }
      
      setAnswerSubmitted(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      setQuizCompleted(true);
      if (onComplete) {
        onComplete(score, questions.length);
      }
    }
  };

  // If quiz data doesn't exist for this topic
  if (!quizData[topic]) {
    return (
      <div className="quiz-container card">
        <h2>Quiz Unavailable</h2>
        <p>Sorry, no quiz is available for this topic yet.</p>
      </div>
    );
  }

  return (
    <div className="quiz-container card" style={{ padding: '1.5rem' }}>
      <h2>Knowledge Check: {topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
      
      {!quizStarted ? (
        <div className="quiz-intro">
          <p>Test your knowledge about {topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} with this {knowledgeLevel}-level quiz.</p>
          <p><strong>Difficulty Level:</strong> {knowledgeLevel.charAt(0).toUpperCase() + knowledgeLevel.slice(1)}</p>
          <p><strong>Questions:</strong> {questions.length}</p>
          
          <button 
            onClick={handleStartQuiz}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Start Quiz
          </button>
        </div>
      ) : showResult ? (
        <div className="quiz-results">
          <h3>Quiz Complete!</h3>
          <div 
            className="score-display"
            style={{
              fontSize: '1.25rem',
              margin: '1.5rem 0',
              padding: '1rem',
              backgroundColor: score / questions.length >= 0.7 ? '#d4edda' : '#f8d7da',
              color: score / questions.length >= 0.7 ? '#155724' : '#721c24',
              borderRadius: '4px',
              textAlign: 'center'
            }}
          >
            <p>Your Score: <strong>{score}</strong> out of <strong>{questions.length}</strong></p>
            <p>
              {score / questions.length >= 0.8 
                ? 'Excellent! You have a strong understanding of this topic.' 
                : score / questions.length >= 0.6 
                  ? 'Good job! You have a decent grasp of this material.' 
                  : 'You might want to review this topic for better understanding.'}
            </p>
          </div>
          
          <button 
            onClick={handleStartQuiz}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              marginRight: '1rem'
            }}
          >
            Retry Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-question">
          <div className="progress-indicator" style={{ marginBottom: '1rem' }}>
            <p>Question {currentQuestion + 1} of {questions.length}</p>
            <div style={{ width: '100%', backgroundColor: '#e0e0e0', height: '8px', borderRadius: '4px' }}>
              <div 
                style={{ 
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`, 
                  backgroundColor: '#3498db', 
                  height: '100%',
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>
          
          <div className="question" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>{questions[currentQuestion].question}</h3>
            
            <div className="answer-options">
              {shuffledAnswers.map((answer, index) => (
                <div 
                  key={index}
                  className={`answer-option ${selectedAnswer === index ? 'selected' : ''} ${
                    answerSubmitted 
                      ? answer.originalIndex === questions[currentQuestion].correctIndex 
                        ? 'correct' 
                        : selectedAnswer === index 
                          ? 'incorrect' 
                          : ''
                      : ''
                  }`}
                  style={{
                    padding: '1rem',
                    marginBottom: '0.75rem',
                    border: `2px solid ${
                      answerSubmitted
                        ? answer.originalIndex === questions[currentQuestion].correctIndex
                          ? '#28a745'
                          : selectedAnswer === index
                            ? '#dc3545'
                            : '#e0e0e0'
                        : selectedAnswer === index
                          ? '#3498db'
                          : '#e0e0e0'
                    }`,
                    borderRadius: '4px',
                    cursor: answerSubmitted ? 'default' : 'pointer',
                    backgroundColor: answerSubmitted
                      ? answer.originalIndex === questions[currentQuestion].correctIndex
                        ? 'rgba(40, 167, 69, 0.1)'
                        : selectedAnswer === index
                          ? 'rgba(220, 53, 69, 0.1)'
                          : 'white'
                      : selectedAnswer === index
                        ? 'rgba(52, 152, 219, 0.1)'
                        : 'white'
                  }}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span style={{ fontWeight: '500' }}>{answer.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {answerSubmitted && (
            <div 
              className="explanation"
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderLeft: '4px solid #3498db',
                borderRadius: '4px',
                marginBottom: '1.5rem'
              }}
            >
              <p><strong>Explanation:</strong> {questions[currentQuestion].explanation}</p>
            </div>
          )}
          
          <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            {!answerSubmitted ? (
              <button 
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: selectedAnswer === null ? '#e0e0e0' : '#3498db',
                  color: selectedAnswer === null ? '#777' : 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  cursor: selectedAnswer === null ? 'not-allowed' : 'pointer'
                }}
              >
                Check Answer
              </button>
            ) : (
              <button 
                onClick={handleNextQuestion}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClimbingQuiz;
