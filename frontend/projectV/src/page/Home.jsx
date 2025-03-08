import React, { useState } from 'react';
import '../css/home.css';

// Sample data for posts
const postsData = [
  {
    id: 1,
    user: 'John Doe',
    content: 'Had a great day at the beach!',
    timestamp: '2 hours ago',
    likes: 5,
    comments: [
      { user: 'Jane Smith', comment: 'Looks like fun!' },
      { user: 'Alice Johnson', comment: 'Wish I was there!' }
    ],
  },
  {
    id: 2,
    user: 'Jane Smith',
    content: 'Excited for the weekend ahead!',
    timestamp: '1 day ago',
    likes: 12,
    comments: [
      { user: 'John Doe', comment: 'Same here!' },
    ],
  },
  {
    id: 3,
    user: 'Alice Johnson',
    content: 'Just finished reading a great book, highly recommend it!',
    timestamp: '3 days ago',
    likes: 8,
    comments: [
      { user: 'John Doe', comment: 'I need to check that out!' },
      { user: 'Jane Smith', comment: 'Add it to my list!' }
    ],
  },
];

export default function Home() {
  const [posts, setPosts] = useState(postsData);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleAddComment = (postId, comment) => {
    if (comment.trim() === '') return;

    setPosts(posts.map(post =>
      post.id === postId 
        ? { ...post, comments: [...post.comments, { user: 'You', comment }] } 
        : post
    ));
  };

  return (
    <div className="home-landing">
      <div className="left">
        <h1 className="name">Project V</h1>
        <p className="slogan">Connect. Share. Express.</p>
        <p id='user'>loggedIn user: Lalit</p>
      </div>
      <div className="right">
        <p className="message">Join the new era of messaging</p>
       
        {/* Feed Section */}
        <div className="feed">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <strong>{post.user}</strong> <span className="timestamp">{post.timestamp}</span>
              </div>
              <p className="post-content">{post.content}</p>

              {/* Like Section */}
              <div className="post-footer">
                <button className="like-btn" onClick={() => handleLike(post.id)}>
                  Like ({post.likes})
                </button>
                
                {/* Comment Section */}
                <div className="comments">
                  {post.comments.map((comment, index) => (
                    <div key={index} className="comment">
                      <strong>{comment.user}: </strong>{comment.comment}
                    </div>
                  ))}
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="comment-input"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleAddComment(post.id, e.target.value);
                        e.target.value = ''; // clear input after adding comment
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
