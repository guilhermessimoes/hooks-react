import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const soma = (a, b) => {
    const future = Date.now() + 2000
    while(Date.now() < future) {
    }
    return a + b
}

const UseMemo = (props) => {
    const [n1, setN1]= useState()
    const [n2, setN2]= useState()
    const [n3, setN3]= useState()

    // Resolvendo com o state e useEffect
    // const [result, setResult] = useState(soma(0))

    // useEffect(()=>{
    //     setResult(soma(n1, n2))
    // },[n1, n2]) 

    // resolvendo com useMemo
    const result = useMemo(()=>soma(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
