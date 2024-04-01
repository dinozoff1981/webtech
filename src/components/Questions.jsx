import React, { useState } from 'react';
import QnAs from '../assets/q&a.json';
import '../components/Questions.css'

const Questions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentQuestionIndex(prevIndex =>
            prevIndex === 0 ? QnAs.questions.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentQuestionIndex(prevIndex =>
            prevIndex === QnAs.questions.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
        
            <section>
                <div className='wrapper'>
                    <div className='quest'>
                        <h3>{QnAs.questions[currentQuestionIndex].id}: {QnAs.questions[currentQuestionIndex].title}</h3>
                    </div>
                    <div className='ans'>
                        <p>{QnAs.questions[currentQuestionIndex].content}</p>
                    </div>
                </div>
            </section>
            <div className='btn'>
                <button onClick={handlePrevious} className='pre'>Previous</button>
                <button onClick={handleNext} className='next'>Next</button>
            </div>
        </>
    );
};

export default Questions;
