import React from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

const PopularFoodChart = () => {
    const data = [
        { subject: 'Salads', A: 120, fullMark: 150 },
        { subject: 'Meat', A: 98, fullMark: 150 },
        { subject: 'Fishes', A: 86, fullMark: 150 },
        { subject: 'SeaFood', A: 99, fullMark: 150 },
        { subject: 'Sushi', A: 85, fullMark: 150 },
        { subject: 'Desserts', A: 65, fullMark: 150 },
    ];
    return(
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#b907bc" fill="#b907bc" fillOpacity={0.6}/>
        </RadarChart>
    )
}

export default PopularFoodChart