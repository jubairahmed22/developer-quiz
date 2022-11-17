import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AllChart = ({ top }) => {
    const { name, total, } = top
    console.log(top);
    return (
        <div>
            <h1>{total}</h1>
            <BarChart width={1500} height={400} data={top}>
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default AllChart;