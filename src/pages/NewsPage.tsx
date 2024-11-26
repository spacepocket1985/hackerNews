import { useParams } from 'react-router-dom';
import { PageTitle, PageWrapper } from '../components/pageWrapper/Container';
import {
  useGetCommentsQuery,
  useGetSingleNewsQuery,
} from '../store/slices/apiSlice';
import { News, NewsType } from '../components/news/News';
import { CommentsList } from '../components/comments/CommentsList';
import { Spinner } from '../components/spinner/Spinner';

export const NewsPage: React.FC = () => {
  const { id } = useParams();

  const { data: news, isFetching: isFetchingNews } = useGetSingleNewsQuery(
    Number(id)
  );
  const {
    data: comments,
    isFetching: isFetchingComments,
    refetch,
  } = useGetCommentsQuery(Number(id));

  const handleRefresh = () => {
    refetch();
  };

  return (
    <PageWrapper title={PageTitle.News} onRefetch={handleRefresh}>
      {isFetchingNews ? (
        <Spinner />
      ) : (
        <>
          <News type={NewsType.SingleNews} news={news!} />

          {isFetchingComments ? (
            <Spinner />
          ) : (
            <CommentsList comments={comments!} />
          )}
        </>
      )}
    </PageWrapper>
  );
};
