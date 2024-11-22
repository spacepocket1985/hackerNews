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
      <div>Top 100 News</div>
      {/* {news.map((newsItem) => (  
        <div key={newsItem.id}>  
          <h2>{newsItem.title}</h2>  
          <p>Comments: {comments.filter(comment => comment.parent === newsItem.id).length}</p> 
        </div>  
      ))}   */}
    </PageWrapper>
  );
};
