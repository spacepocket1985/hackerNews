import { useParams } from 'react-router-dom';
import { PageWrapper } from '../components/pageWrapper/Container';

export const News: React.FC = () => {
  const { id } = useParams();
  return (
    <PageWrapper title={`News id is -> ${id}`}>
      <div>some data</div>
    </PageWrapper>
  );
};
