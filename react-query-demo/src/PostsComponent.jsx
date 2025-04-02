import { useQuery } from 'react-query';
import { useState } from 'react';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const [isRefetching, setIsRefetching] = useState(false);
  const { data, isLoading, error, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Data will be considered fresh for 5 seconds
    cacheTime: 30000, // Data will be kept in cache for 30 seconds
  });

  const handleRefetch = async () => {
    setIsRefetching(true);
    try {
      await refetch();
    } finally {
      setIsRefetching(false);
    }
  };

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleRefetch} disabled={isRefetching}>
        {isRefetching ? 'Refreshing...' : 'Refresh Posts'}
      </button>
      <div style={{ marginTop: '20px' }}>
        {data?.slice(0, 10).map((post) => (
          <div key={post.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;
