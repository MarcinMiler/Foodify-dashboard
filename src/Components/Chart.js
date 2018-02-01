import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'

const Chart = ({
    monthBalance
}) => {
    let data = [{ value: monthBalance.balance }, { value: monthBalance.balanceGoal-monthBalance.balance }]
    if(monthBalance.balance > monthBalance.balanceGoal) data = [{ value: monthBalance.balanceGoal }]
    const COLORS = ['#b907bc', 'lightgray']
    return(
        <PieChart width={150} height={150}>
            <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            innerRadius={52}
            outerRadius={60}
            >
                {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            
        </PieChart>
    )
}

export default Chart