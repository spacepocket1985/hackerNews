import { PageTitle, PageWrapper } from '../components/pageWrapper/Container';

import { Typography } from '@mui/material';

export const NotFound: React.FC = () => {
  return (
    <PageWrapper title={PageTitle.Page404}>
      <Typography>Go back</Typography>
    </PageWrapper>
  );
};
