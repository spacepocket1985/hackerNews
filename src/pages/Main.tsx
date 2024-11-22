import { NewsList } from '../components/newsList/NewsList';
import { PageWrapper } from '../components/pageWrapper/Container';
import {
  useGetItemsQuery,
  useGetLastNewsQuery,
} from '../store/slices/apiSlice';

export const Main: React.FC = () => {
  const { data: newsIds } = useGetLastNewsQuery();
  const { data } = useGetItemsQuery(newsIds ?? []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { news, comments } = data;

  console.log({ news, comments });

  return (
    <PageWrapper title="Main page">
      <NewsList news={news}/>
    </PageWrapper>
  );
};
