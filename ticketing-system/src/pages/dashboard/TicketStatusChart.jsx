import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Open', value: 40 },
  { name: 'In Progress', value: 30 },
  { name: 'Closed', value: 30 },
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const TicketStatusChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export default TicketStatusChart;
