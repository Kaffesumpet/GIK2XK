import PostItemSmall from './PostItemSmall';
import { getAll } from '../services/PostService';
import { useEffect, useState } from 'react';

function PostList({ pathname }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((posts) => {
      setPosts(posts);
    });
  }, [pathname]);

  return (
    <ul>
      {posts?.length > 0 ? (
        posts
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((post) => (
            <li key={`posts_${post.id}`}>
              <PostItemSmall post={post} />
            </li>
          ))
      ) : (
        <h3>Kunde inte hämta inlägg</h3>
      )}
    </ul>
  );
}

export default PostList;
