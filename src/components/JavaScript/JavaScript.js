import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const JavaScript = () => {
    const quiz = useLoaderData();
    const { name } = quiz.data
    console.log(quiz);

    return (
        <div>
            <h1 className='quiz-name'>Quiz of {name}</h1>
            {
                quiz.data.questions.map(ans =>
                    <Quiz
                        key={ans.id}
                        ans={ans}
                    >
                    </Quiz>)


            }
        </div>
    );
};

export default JavaScript;