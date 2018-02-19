import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CustomLineChart = ({
    data,
    xKey,
    lineKey,
    name,
}) => {
    return(
        <ResponsiveContainer width='100%' height="90%">
            <LineChart data={data}>
                <XAxis dataKey={xKey} style={{fontSize: '12px'}} padding={{left: 15, right: 15}} />
                <YAxis style={{fontSize: '12px'}}/>
                <CartesianGrid strokeDasharray="1"/>
                <Tooltip isAnimationActive={false} />
                <Line name={name} type="monotone" dataKey={lineKey} stroke="#5D94F5" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default CustomLineChart