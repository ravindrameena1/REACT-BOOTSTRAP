import React from 'react'
import PostCard from './PostCard';

export const PostList = () => {
  return (
    <div className="post-container">
      <div>
        <PostCard />
      </div>
      <div>
        <PostCard />
      </div>
      <div>
        <PostCard />
      </div>
      <div>
        <PostCard />
      </div>
    </div>
  );
}
export default PostList;
