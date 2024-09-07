import React from 'react';
import { Grid } from '@mui/material';
import TicketStatusChart from './TicketStatusChart';
import TicketsByPriorityChart from './TicketsByPriorityChart';
import RecentTicketsTable from './RecentTicketsTable';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TicketStatusChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <TicketsByPriorityChart />
      </Grid>
      <Grid item xs={12}>
        <RecentTicketsTable />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
