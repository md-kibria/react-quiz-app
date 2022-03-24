import React, { useEffect, useState } from 'react';
import './App.scss';
import questions from './questions'
import { Result } from './model'
import Quiz from './components/Quiz';
import ResultPage from './components/Result';

function App() {

  const [currQue, setCurrQue] = useState(0)
  const [isNext, setIsNext] = useState(false)
  const [isPrev, setIsPrev] = useState(false)
  const [result, setResult] = useState<Result[]>([])
  const [showResult, setShowResult] = useState(false)
  const { id, question, options, ans } = questions[currQue]

  useEffect(() => {
    if (result.length !== questions.length) {
      setIsNext(false)
    }

  }, [currQue])

  const handleNext = () => {
    if (currQue + 1 < questions.length) {
      setCurrQue(currQue + 1)
    }

    if (currQue + 1 === questions.length) {
      setShowResult(true)
      // enable prev button
      setIsPrev(true)
    }
  }

  const handlePrev = () => {
    if (currQue > 0) {
      setCurrQue(currQue - 1)
    }

    if (currQue + 1 === questions.length) {
      setShowResult(false)
      setCurrQue(currQue - 1)
    }
  }

  return (
    <div className="app">
      <div className="container">

        {!showResult ? (
          <Quiz
            id={id}
            currQue={currQue}
            question={question}
            options={options}
            ans={ans}
            result={result}
            setResult={setResult}
            setIsNext={setIsNext}
          />
        ) : (
          <ResultPage
            result={result}
          />
        )}

        <div className="btns">
          <button onClick={handlePrev} className={!isPrev ? 'btn-disable' : ''} disabled={!isPrev}>Prev</button>
          <button onClick={handleNext} className={!isNext ? 'btn-disable' : ''} disabled={!isNext}>Next</button>
        </div>

      </div>
    </div>
  );
}

export default App;
