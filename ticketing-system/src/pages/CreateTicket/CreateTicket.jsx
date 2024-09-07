import React, { useState } from 'react';
import {
  Grid, Typography, Button, TextField, Snackbar, Alert, Select, MenuItem,
} from '@mui/material';
import axios from 'axios';

const CreateTicket = () => {
  const [ticketData, setTicketData] = useState({
    subject: '',
    description: '',
    priority: 'Medium',
    status: 'Open',
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleSubmit = () => {
    axios.post('/api/tickets', ticketData)
      .then(() => {
        setSnackbar({ open: true, message: 'Ticket created successfully!', severity: 'success' });
        // Reset form
        setTicketData({ subject: '', description: '', priority: 'Medium', status: 'Open' });
      })
      .catch(() => {
        setSnackbar({ open: true, message: 'Failed to create ticket.', severity: 'error' });
      });
  };

  return (
    <Grid container spacing={2}>
      <Typography variant="h4">Create New Ticket</Typography>

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

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Ticket
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

export default CreateTicket;
