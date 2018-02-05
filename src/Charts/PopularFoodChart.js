import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts'

const PopularFoodChart = ({
    popularFood
}) => {
    return(
        <ResponsiveContainer width='100%' height="90%">
            <RadarChart outerRadius={150} data={popularFood}>
            <PolarGrid />
            <PolarAngleAxis dataKey="type" />
            <PolarRadiusAxis/>
            <Tooltip isAnimationActive={false} />
            <Radar name="Orders" dataKey="orders" stroke="#b907bc" fill="#b907bc" fillOpacity={0.5}/>
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default PopularFoodChart