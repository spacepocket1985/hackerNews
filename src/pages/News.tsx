import { useParams } from "react-router-dom";

export const News: React.FC = () => {
  const{ id } = useParams();
  return <h2>{`News id is ${id}` }</h2>;
};
