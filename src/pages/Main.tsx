import { NewsList } from '../components/news/NewsList';
import { PageWrapper } from '../components/pageWrapper/Container';

export const Main: React.FC = () => {
  return (
    <PageWrapper title="News list">
      <NewsList />
    </PageWrapper>
  );
};
