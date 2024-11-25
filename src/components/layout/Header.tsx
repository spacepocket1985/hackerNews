import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { RoutePaths } from '../../routes/routePaths';

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ paddingX: { xs: 2, sm: 8, md: 30 } }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HackerNewsApi
        </Typography>
        <Button color="inherit" component={Link} to={RoutePaths.Main}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};
