import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop, Area, AreaChart } from 'recharts'

const CustomLineChart = ({
    data,
    xKey,
    lineKey,
    name,
}) => {
    return(
        <ResponsiveContainer width='100%' height="90%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DE23FF" stopOpacity={0.3}/>
                        <stop offset="100%" stopColor="#DE23FF" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis axisLine={false} tickLine={false} dataKey={xKey} style={{fontSize: '12px'}} />
                <YAxis axisLine={false} tickLine={false} style={{fontSize: '12px'}}/>
                <CartesianGrid strokeDasharray="0" vertical={false}/>
                <Tooltip isAnimationActive={false} />
                <Area dot={false} name={name} type="monotone" dataKey={lineKey} stroke='#DE23FF' fill="url(#colorUv)" strokeWidth={2} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default CustomLineChart