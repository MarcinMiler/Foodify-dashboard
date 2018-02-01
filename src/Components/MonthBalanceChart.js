import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const MonthBalanceChart = () => {
    const data = [
        {name: 1, currentWeek: 2, lastWeek: 7},
        {name: 2, currentWeek: 6, lastWeek: 5},
        {name: 3, currentWeek: 4, lastWeek: 3},
        {name: 4, currentWeek: 12, lastWeek: 0},
        {name: 5, currentWeek: 3, lastWeek: 4},
        {name: 6, currentWeek: 20, lastWeek: 4},
        {name: 7, currentWeek: 7, lastWeek: 9},
  ];
    return(
        <LineChart width={700} height={200} data={data}
            margin={{top: 25, right: 30, left: 0, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="5 5"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="currentWeek" stroke="#b907bc" />
            <Line type="monotone" dataKey="lastWeek" stroke="lightgray" />
        </LineChart>
    )
}

export default MonthBalanceChart