import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts'

const PopularFoodChart = ({
    popularFood
}) => {
    return(
        <RadarChart outerRadius={150} width={500} height={350} data={popularFood}>
          <PolarGrid />
          <PolarAngleAxis dataKey="type" />
          <PolarRadiusAxis/>
          <Tooltip isAnimationActive={false} />
          <Radar name="Orders" dataKey="orders" stroke="#b907bc" fill="#b907bc" fillOpacity={0.5}/>
        </RadarChart>
    )
}

export default PopularFoodChart