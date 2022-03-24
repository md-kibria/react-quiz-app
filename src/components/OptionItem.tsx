import React, { useEffect, useRef, useState } from 'react'
import { Result } from '../model'

interface Props {
    id: number,
    sn: number,
    option: string,
    result: Result[],
    ans: number,
    setResult: React.Dispatch<React.SetStateAction<Result[]>>,
    currQue: number,
    oId: number,
    setIsNext: React.Dispatch<React.SetStateAction<boolean>>
}

const OptionItem: React.FC<Props> = ({ id, sn, option, result, ans, setResult, currQue, oId, setIsNext }) => {

    const [hist, setHist] = useState<Result>()
    const optionRef = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
        let res = result.find(value => {
            return value.id === id
        })

        if (!res) {
            setResult([...result, { id: id, chose: oId, ans }])
            setIsNext(true)
        }
    }

    useEffect(() => {
        setHist(result[currQue])
    }, [result, currQue])

    return (
        <button ref={optionRef} className={hist?.ans === oId ? 'li right' : hist?.chose === oId ? 'li wrong' : 'li'} onClick={(e) => handleClick()}>
            <div className="sn">{sn}</div>
            <div className="text">
                <p>{option}</p>
            </div>
        </button>
    )
}

export default OptionItem
