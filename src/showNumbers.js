import React from 'react'

function ShowNumbers(props) {
    let { allQuestions } = props
    let filterdQuestions = allQuestions.filter(t => t.answered === false)
    // let filterdQuestions = allQuestions

    return (
        <div className='container'>
            <div className='col-md-12'>
                {filterdQuestions.map((q, index) => {
                    return <div className='col-md-2' onClick={() => { props.selectQuestion(q) }}>
                        <h2 className = 'questionNumber bounce'>{q.key}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ShowNumbers
