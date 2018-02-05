import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const OrdersChart = ({
    weekOrders
}) => {
    return(
        <ResponsiveContainer width='100%' height="90%">
            <LineChart width={650} height={200} data={weekOrders}>
                <XAxis dataKey="day" padding={{left: 30, right: 30}} />
                <YAxis/>
                <CartesianGrid strokeDasharray="1"/>
                <Tooltip />
                <Line name="Orders" type="monotone" dataKey="orders" stroke="#b907bc" />

            </LineChart>
        </ResponsiveContainer>
    )
}

export default OrdersChart