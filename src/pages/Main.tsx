import { NewsList } from '../components/news/NewsList';
import { PageTitle, PageWrapper } from '../components/pageWrapper/Container';
import { Spinner } from '../components/spinner/Spinner';
import { useGetNewsIdsQuery, useGetNewsQuery } from '../store/slices/apiSlice';

export const Main: React.FC = () => {
  const {
    data: newsIds,
    isFetching: isFetchingIds,
    refetch,
  } = useGetNewsIdsQuery();
  const { data: news, isFetching } = useGetNewsQuery(newsIds ?? []);

  const handleRefresh = () => {
    refetch();
  };

  return (
    <PageWrapper title={PageTitle.Main} onRefetch={handleRefresh}>
      {isFetchingIds || isFetching ? <Spinner /> : <NewsList news={news!} />}
    </PageWrapper>
  );
};
