import { useParams } from 'react-router-dom';
import { PageWrapper } from '../components/pageWrapper/Container';
import { useGetNewsWithCommentsQuery } from '../store/slices/apiSlice';
import { News, NewsType } from '../components/news/News';
import { CommentsList } from '../components/comments/CommentsList';
import { Spinner } from '../components/spinner/Spinner';

export const NewsPage: React.FC = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetNewsWithCommentsQuery(Number(id));
  

  if (isFetching) return <Spinner/>;
  return (
    <PageWrapper title={`News page`}>
      <News type={NewsType.SingleNews} news={data!.news}/>
      <CommentsList comments={data!.comments} />
    </PageWrapper>
  );
};
