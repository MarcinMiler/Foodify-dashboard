import React from 'react'
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop } from 'recharts'

const CustomLineChart = ({
    data,
    xKey,
    lineKey,
    name,
}) => {
    return(
        <ResponsiveContainer width='100%' height="90%">
            <AreaChart data={data} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ec407a" stopOpacity={0.3}/>
                        <stop offset="100%" stopColor="#ec407a" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis axisLine={false} tickLine={false} dataKey={xKey} style={{fontSize: '12px'}} />
                <YAxis axisLine={false} tickLine={false} style={{fontSize: '12px'}}/>
                <CartesianGrid strokeDasharray="0" vertical={false}/>
                <Tooltip isAnimationActive={false} />
                <Area dot={false} name={name} type="monotone" dataKey={lineKey} stroke='#ec407a' fill="url(#colorUv)" strokeWidth={2} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default CustomLineChart