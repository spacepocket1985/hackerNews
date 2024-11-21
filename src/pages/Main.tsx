import { PageWrapper } from '../components/pageWrapper/Container';
import {
  useGetLastNewsQuery,
  useGetNewsItemsQuery,
} from '../store/slices/apiSlice';

export const Main: React.FC = () => {
  const { data: newsIds } = useGetLastNewsQuery();
  const { data } = useGetNewsItemsQuery(newsIds!);

  console.log(data);

  return (
    <PageWrapper title="Main page">
      <div>Top 100 News</div>
    </PageWrapper>
  );
};
