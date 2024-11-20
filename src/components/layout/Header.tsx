import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { RoutePaths } from '../../routes/routePaths';

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HackerNews
          </Typography>
          <Button color="inherit" component={Link} to={RoutePaths.Main}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
