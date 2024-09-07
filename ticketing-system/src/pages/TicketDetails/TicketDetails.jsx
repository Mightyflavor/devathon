import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Button, TextField, Snackbar, Alert, Select, MenuItem,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TicketDetails = () => {
  const { ticketId } = useParams();
  const [ticketData, setTicketData] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    // Fetch ticket details
    axios.get(`/api/tickets/${ticketId}`)
      .then(response => setTicketData(response.data))
      .catch(() => setSnackbar({ open: true, message: 'Error loading ticket.', severity: 'error' }));
  }, [ticketId]);

  const handleUpdate = () => {
    axios.put(`/api/tickets/${ticketId}`, ticketData)
      .then(() => setSnackbar({ open: true, message: 'Ticket updated successfully!', severity: 'success' }))
      .catch(() => setSnackbar({ open: true, message: 'Failed to update ticket.', severity: 'error' }));
  };

  if (!ticketData) return <Typography>Loading...</Typography>;

  return (
    <Grid container spacing={2}>
      <Typography variant="h4">Ticket Details</Typography>

      <Grid item xs={12}>
        <TextField
          label="Subject"
          fullWidth
          value={ticketData.subject}
          onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={ticketData.description}
          onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Select
          label="Priority"
          fullWidth
          value={ticketData.priority}
          onChange={(e) => setTicketData({ ...ticketData, priority: e.target.value })}
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Select
          label="Status"
          fullWidth
          value={ticketData.status}
          onChange={(e) => setTicketData({ ...ticketData, status: e.target.value })}
        >
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update Ticket
        </Button>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Grid>
  );
};

export default TicketDetails;
