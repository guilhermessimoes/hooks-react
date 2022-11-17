import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n){
    const number = parseInt(n)
    if (number < 0 ) return -1
    if (number === 0 ) return 1
    return calcFatorial(number -1) * number
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parImpar, setParImpar] = useState()

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        if (fatorial > 10000) {
            document.title = "Eitaa!!!"            
        }
    }, [fatorial])

    useEffect(() => {
        console.log('fatorial', fatorial)
        if (number % 2 === 0) {
            setParImpar(true)
        }else{
            setParImpar(false)
        }
    }, [number, fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercicio #01'/> 
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={(event) => setNumber(event.target.value)}/>
            </div>

            <SectionTitle title='Exercicio #02'/> 
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{parImpar ? 'Par': 'Impar'}</span>                
            </div>
        </div>
    )
}

export default UseEffect
