import { NewsList } from '../components/news/NewsList';
import { PageTitle, PageWrapper } from '../components/pageWrapper/Container';
import { Spinner } from '../components/spinner/Spinner';
import { useGetNewsIdsQuery, useGetNewsQuery } from '../store/slices/apiSlice';

export const Main: React.FC = () => {
  const {
    data: newsIds,
    isFetching: isFetchingIds,
    refetch,
    isError: isErrorIds,
  } = useGetNewsIdsQuery();
  const {
    data: news,
    isFetching,
    isError: isErrorNews,
  } = useGetNewsQuery(newsIds ?? []);

  const handleRefresh = () => {
    refetch();
  };

  const contenOrSpinner =
    isFetchingIds || isFetching ? <Spinner /> : <NewsList news={news!} />;

  const errorMsg = 'Error fetching list news. Please try refreshing';

  return (
    <PageWrapper title={PageTitle.Main} onRefetch={handleRefresh}>
      {isErrorIds || isErrorNews ? errorMsg : contenOrSpinner}
    </PageWrapper>
  );
};
