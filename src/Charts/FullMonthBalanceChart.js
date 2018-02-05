import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const FullMonthBalanceChart = ({
    fullMonthBalance
}) => {
    return(
        <ResponsiveContainer width='100%' height="90%">
            <LineChart data={fullMonthBalance}>
                <XAxis dataKey="day" padding={{left: 30, right: 30}} />
                <YAxis/>
                <CartesianGrid strokeDasharray="1"/>
                <Tooltip />
                <Line name="Balance" type="monotone" dataKey="balance" stroke="#b907bc" />

            </LineChart>
        </ResponsiveContainer>
    )
}

export default FullMonthBalanceChart