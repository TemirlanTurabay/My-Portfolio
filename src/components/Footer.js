import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Footer({mode, setMode}) {
  const theme = useTheme();
  return (
    <AppBar position="static" color="primary" sx={{backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary}}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Typography variant="body1" color="inherit">
            Made with ❤️ at nFactorial in 2024.
          </Typography>
          <Switch onChange={(e) => setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
