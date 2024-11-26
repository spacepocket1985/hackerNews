import { useParams } from 'react-router-dom';
import { PageTitle, PageWrapper } from '../components/pageWrapper/Container';
import {
  useGetCommentsQuery,
  useGetSingleNewsQuery,
} from '../store/slices/apiSlice';
import { News, NewsType } from '../components/news/News';
import { CommentsList } from '../components/comments/CommentsList';
import { Spinner } from '../components/spinner/Spinner';
import { Typography } from '@mui/material';
import { getCommentsCount } from '../utils/getCommentsCount';

export const NewsPage: React.FC = () => {
  const { id } = useParams();

  const newsId = Number(id);

  const { data: news, isFetching: isFetchingNews } =
    useGetSingleNewsQuery(newsId);
  const {
    data: comments,
    isFetching: isFetchingComments,
    refetch,
  } = useGetCommentsQuery(newsId);

  const handleRefresh = () => {
    refetch();
  };
  let errorMsg: null | string = null;
  if (isNaN(newsId)) errorMsg = 'Error. Invalid news id.';
  if (news === null) errorMsg = 'Error. News not found.';

  const contenOrSpinner = (
    <>
      {isFetchingNews ? (
        <Spinner />
      ) : (
        <>
          <News
            type={NewsType.SingleNews}
            news={news!}
            commentsCount={getCommentsCount(comments || [])}
          />

          {isFetchingComments ? (
            <Spinner />
          ) : (
            <CommentsList comments={comments!} />
          )}
        </>
      )}
    </>
  );

  return (
    <PageWrapper title={PageTitle.News} onRefetch={handleRefresh}>
      {!errorMsg ? (
        contenOrSpinner
      ) : (
        <Typography variant="h5" component={'h5'}>
          {errorMsg}
        </Typography>
      )}
    </PageWrapper>
  );
};
