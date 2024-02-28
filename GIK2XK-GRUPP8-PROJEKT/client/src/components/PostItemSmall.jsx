function PostItemSmall({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>Skrivet av: {post.author.username}</p>
      <p>Skrivet av: {post.body}</p>
    </>
  );
}

export default PostItemSmall;
