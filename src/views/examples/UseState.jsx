import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <div>
                        <button className="btn" onClick={() => setCount(count -1)}>-1</button>
                        <button className="btn" onClick={() => setCount(count +1)}>+1</button>
                        <button className="btn" onClick={() => setCount(currect => currect + 1000)}>+1000</button>
                    </div>
                </div>
            </div>
            <SectionTitle title="Exercício #01"/>
        </div>
    )
}

export default UseState