import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ m: 'auto' }}>
        <Typography variant="h5" component="h5">
          HackerNewsApi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
