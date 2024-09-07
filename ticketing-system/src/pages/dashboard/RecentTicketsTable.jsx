import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const RecentTicketsTable = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get('/api/tickets/recent')
      .then(response => setTickets(response.data))
      .catch(error => console.error('Error fetching recent tickets:', error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" gutterBottom>
        Recent Tickets
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ticket ID</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.id}</TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>{ticket.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentTicketsTable;
