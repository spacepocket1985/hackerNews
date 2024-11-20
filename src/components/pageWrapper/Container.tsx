import { Container, Typography } from '@mui/material';

export const PageWrapper: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
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
      <Typography component={'h3'} variant="h3">
        {title}
      </Typography>
      {children}
    </Container>
  );
};
