import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const BalanceChart = ({
    monthBalance
}) => {
    let data = [{ value: monthBalance.balance }, { value: monthBalance.goal-monthBalance.balance }]
    if(monthBalance.balance > monthBalance.goal) data = [{ value: monthBalance.goal }]
    const COLORS = ['#ec407a', 'lightgray']
    return(
        <PieChart width={150} height={150}>
            <Pie
            isAnimationActive={true}
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            innerRadius={52}
            outerRadius={60}
            stroke='none'
            >
                {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            
        </PieChart>
    )
}

export default BalanceChart