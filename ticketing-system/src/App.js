import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/dashboard';
import CreateTicket from './pages/CreateTicket/CreateTicket';
import TicketDetails from './pages/TicketDetails/TicketDetails';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-ticket" element={<CreateTicket />} />
            <Route path="/tickets/:ticketId" element={<TicketDetails />} />
            {/* Add more routes as needed */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
