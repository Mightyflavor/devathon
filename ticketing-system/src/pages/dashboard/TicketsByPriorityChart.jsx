import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { priority: 'High', tickets: 15 },
  { priority: 'Medium', tickets: 25 },
  { priority: 'Low', tickets: 35 },
];

const TicketsByPriorityChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="priority" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="tickets" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default TicketsByPriorityChart;
