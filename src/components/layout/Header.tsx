import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { NewsUrl } from '../../store/slices/apiSlice';

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ m: 'auto' }}>
        <Button
          color="inherit"
          component={Link}
          to={NewsUrl}
          target="_blank"
          size="large"
          sx={{ fontSize: 20 }}
        >
          Hacker-News-Api
        </Button>
      </Toolbar>
    </AppBar>
  );
};
