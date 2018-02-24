import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop } from 'recharts'

const CustomLineChart = ({
    data,
    xKey,
    lineKey,
    name,
}) => {
    return(
        <ResponsiveContainer width='100%' height="90%">
            <LineChart data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="0%" stopColor="#D10AF4" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#FFBF00" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <XAxis axisLine={false} tickLine={false} dataKey={xKey} style={{fontSize: '12px'}} />
                <YAxis axisLine={false} tickLine={false} style={{fontSize: '12px'}}/>
                <CartesianGrid strokeDasharray="0" vertical={false}/>
                <Tooltip isAnimationActive={false} />
                <Line dot={false} name={name} type="monotone" dataKey={lineKey} stroke="url(#colorUv)" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default CustomLineChart