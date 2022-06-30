import { useState, useEffect } from 'react';
import axios, * as x from 'axios';

export interface IRunLogicProps {
    answer: string;
}
export function RunLogic({ answer }: IRunLogicProps) {
    const [numericResult, setNumericResult] = useState(0);
    const [strResult, setStrResult] = useState('');
    const [midStr, setMidStr] = useState('');

    useEffect(() => {
        setNumericResult(stringToNumber(answer));
    }, [answer]);

    useEffect(() => {
        setStrResult(numberToString(numericResult));
        setMidStr(findMiddleString("AAAAAA", "ZZZZZZ"));
    }, [numericResult]);

    function calculateNumber(answer: string) {
        postAnswer(findMiddleString("AAAAAA", "ZZZZZZ"));
    }
    return (
        <>
            <span>answer is {answer}</span><br />
            <button onClick={() => calculateNumber(answer)}>calculate</button>
            <p>string to number = {numericResult}</p>
            <p>number to string = {strResult}</p>
            <p>midStr = {midStr}</p>
        </>
    )
}

function postAnswer(answer: string) {
    axios({
        method: 'post',
        url: `https://torii-word-server.herokuapp.com/checkWord?word=${answer}`,
        data: {},
    }).then((res) => {
        console.log(res);
    })
}

function findMiddleString(minStr: string, maxStr: string): string {
    const numericMin = stringToNumber(minStr);
    const numericMax = stringToNumber(maxStr);
    const numericMid = Math.floor((numericMin + numericMax) / 2);
    return numberToString(numericMid);
}


function stringToNumber(str: string): number {
    return [...str].reverse().reduce((val, curr, index) => {
        return val + curr.charCodeAt(0) * Math.pow(10, index * 2);
    }, 0)
}


function numberToString(num: number): string {
    const output = [];
    const sNumber = '' + num;
    let substr: string[] = [];
    for (let i = 0; i < sNumber.length; i++) {
        substr.push(sNumber.charAt(i));
        i++;
        substr.push(sNumber.charAt(i));
        let num: number = parseInt(substr.join(''));
        output.push(String.fromCharCode(num));
        substr = [];
    }
    return output.join('');
}