import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTopics from '../AllTopics/AllTopics';
import Descrip from '../Descrip/Descrip';
import './Topic.css'

const Topics = () => {
    const quizData = useLoaderData();


    return (

        <div >
            <Descrip></Descrip>
            <div className='topic'>

                {
                    quizData.data.map(topic => <AllTopics
                        key={topic.id}
                        topic={topic}
                    ></AllTopics>)
                }
            </div>
        </div>
    );
};

export default Topics;