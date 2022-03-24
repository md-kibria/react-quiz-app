import React from 'react'
import { Result } from '../model'
import OptionItem from './OptionItem'

type options = {
    id: number;
    option: string;
}

interface Props {
    id: number,
    currQue: number,
    question: string,
    options: options[]
    ans: number,
    result: Result[],
    setResult: React.Dispatch<React.SetStateAction<Result[]>>,
    setIsNext: React.Dispatch<React.SetStateAction<boolean>>
}

const Quiz: React.FC<Props> = ({ id, currQue, question, options, ans, result, setResult, setIsNext }) => {
    return (
        <>
            <div className="info">
                <h2>Question {currQue + 1}</h2>
                <p>{question}</p>
            </div>
            <div className="hr"></div>
            <ul className="options">

                {options.map((op, i) => (
                    <OptionItem
                        key={i}
                        id={id}
                        oId={op.id}
                        sn={i + 1}
                        option={op.option}
                        ans={ans}
                        result={result}
                        setResult={setResult}
                        currQue={currQue}
                        setIsNext={setIsNext}
                    />
                ))}

            </ul>
        </>
    )
}

export default Quiz
