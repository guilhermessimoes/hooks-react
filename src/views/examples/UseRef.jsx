import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (string1, string2) =>{
    return [...string1].map((e, i) => {
        return `${e}${string2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const count = useRef()
    const myInput1 = useRef()
    const myInput2 = useRef()

    useEffect(()=>{
        count.current++
        myInput2.current.focus()
    }, [value1])

    useEffect(()=>{
        count.current6++
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title='Exercicio #01'/> 
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={value1} onChange={(event) => setValue1(event.target.value)} ref={myInput1}/>
            </div>
            <SectionTitle title='Exercicio #01'/> 
            <div className="center">
                <input type="text" className="text" value={value2} onChange={(event) => setValue2(event.target.value)} ref={myInput2}/>
            </div>
        </div>
    )
}

export default UseRef
