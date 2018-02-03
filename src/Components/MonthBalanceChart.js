import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const MonthBalanceChart = ({
    weekOrders
}) => {
    return(
        <LineChart width={700} height={200} data={weekOrders}
            margin={{top: 25, right: 30, left: 0, bottom: 5}}>
            <XAxis dataKey="day" padding={{left: 30, right: 30}} />
            <YAxis/>
            <CartesianGrid strokeDasharray="3"/>
            <Tooltip />
            <Line name="Orders" type="monotone" dataKey="orders" stroke="#b907bc" />

        </LineChart>
    )
}

export default MonthBalanceChart