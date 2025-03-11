'use client';

import { useState } from 'react';
import Link from 'next/link';

const quizQuestions = [
  {
    question: '다음 중 종이류 분리배출 시 주의사항이 아닌 것은?',
    options: [
      '물에 젖은 종이는 일반쓰레기로 배출한다',
      '테이프는 제거 후 배출한다',
      '영수증은 일반쓰레기로 배출한다',
      '종이류는 반드시 세척 후 배출한다'
    ],
    correct: 3,
    explanation: '종이류는 세척할 필요가 없습니다. 오히려 물에 젖으면 재활용이 불가능합니다.'
  },
  {
    question: '플라스틱 용기 분리배출 시 올바른 방법은?',
    options: [
      '내용물을 비우고 라벨을 제거한다',
      '내용물이 조금 남아있어도 괜찮다',
      '라벨은 제거하지 않아도 된다',
      '뚜껑을 닫은 채로 배출한다'
    ],
    correct: 0,
    explanation: '플라스틱 용기는 내용물을 비우고 라벨을 제거한 후 배출해야 합니다.'
  },
  {
    question: '유리병 분리배출 시 올바른 것은?',
    options: [
      '깨진 유리는 그대로 배출한다',
      '소주병과 맥주병은 분리배출한다',
      '유리병은 깨뜨려서 배출한다',
      '도자기도 함께 배출한다'
    ],
    correct: 1,
    explanation: '소주병과 맥주병은 빈용기보증금 대상으로, 분리배출하면 보증금을 환급받을 수 있습니다.'
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <nav className="mb-8">
          <Link
            href="/guide"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            ← 가이드로 돌아가기
          </Link>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {!quizCompleted ? (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                      재활용 퀴즈
                    </h1>
                    <span className="text-gray-600">
                      {currentQuestion + 1} / {quizQuestions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    {quizQuestions[currentQuestion].question}
                  </h2>
                  <div className="space-y-4">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-4 text-left rounded-lg transition-all duration-300 ${
                          selectedAnswer === null
                            ? 'hover:bg-blue-50 bg-gray-50'
                            : selectedAnswer === index
                            ? index === quizQuestions[currentQuestion].correct
                              ? 'bg-green-100 border-green-500'
                              : 'bg-red-100 border-red-500'
                            : index === quizQuestions[currentQuestion].correct
                            ? 'bg-green-100 border-green-500'
                            : 'bg-gray-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {showExplanation && (
                  <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-600">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                {selectedAnswer !== null && (
                  <button
                    onClick={handleNext}
                    className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? '결과 보기' : '다음 문제'}
                  </button>
                )}
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  퀴즈 완료!
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  총 {quizQuestions.length}문제 중 {score}문제를 맞추셨습니다!
                </p>
                <div className="space-y-4">
                  <button
                    onClick={resetQuiz}
                    className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    다시 풀기
                  </button>
                  <Link
                    href="/guide"
                    className="block w-full py-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    가이드 다시 보기
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 