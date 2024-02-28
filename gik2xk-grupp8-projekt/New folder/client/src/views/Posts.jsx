import { useParams, useLocation } from 'react-router-dom';
import PostList from '../components/PostList';

function Posts() {
  console.log(useParams(), useLocation());
  const location = useLocation();
  return <PostList pathname={location.pathname} />;
}

export default Posts;
