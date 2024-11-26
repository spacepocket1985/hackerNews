import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/routePaths';

export enum PageTitle {
  Main = 'News list | 100 last news',
  News = 'News page',
  Page404 = 'NotFound',
}

export const PageWrapper: React.FC<{
  title: PageTitle;
  children: React.ReactNode;
  onRefetch?: () => void;
}> = ({ title, children, onRefetch }) => {
  const renderControllButtons = () => (
    <>
      <Button color="primary" variant="contained" onClick={onRefetch}>
        {'Refresh '}
        {title === PageTitle.Main ? 'news' : 'comments'}
      </Button>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to={RoutePaths.Main}
      >
        Home
      </Button>
    </>
  );

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mt: 1,
          mb: 0.5,
        }}
      >
        <Typography
          component={'h5'}
          variant="h5"
          sx={{
            color: 'white',
            backgroundColor: 'primary.main',
            padding: '0.5rem',
            borderRadius: 2,
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>{renderControllButtons()}</Box>
      </Box>
      {children}
    </Container>
  );
};
