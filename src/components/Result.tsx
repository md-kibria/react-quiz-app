import React from 'react'
import { Result } from '../model'

interface Props {
    result: Result[]
}

const ResultPage: React.FC<Props> = ({ result }) => {

    return (
        <>
            <div className="info">
                <h2>Result</h2>
                <p>Your all score </p>
            </div>
            <div className="hr"></div>
            <ul className="options">
                {result.map((res, i) => (
                    <button key={res.id} className={res.ans === res.chose ? 'li right' : 'li wrong'}>
                        <div className="sn">{i + 1}</div>
                        <div className="text">
                            <p>{res.ans === res.chose ? 'Correct!' : 'Wrong!'}</p>
                        </div>
                    </button>
                ))}
            </ul>
        </>
    )
}

export default ResultPage
