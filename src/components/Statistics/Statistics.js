import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'


const Statistics = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const quizLoaded = data.data.data;
                const quizData = quizLoaded.map(phone => {
                    const nmbr = phone.total
                    const singleQuiz = {
                        name: phone.name,
                        tot: nmbr
                    }
                    return singleQuiz
                })
                console.log(quizData);
                setPhones(quizData)
            }
            );
    }, [])

    return (


        <div>
            <div className='margin'>
                <h1>Statistics</h1>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart width={150} height={40} data={phones}>
                        <Bar dataKey="tot" fill="#8884d8" />

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default Statistics;