import React, { ChangeEvent, useState } from 'react';
import { useComments } from '@/services/commentsContext';
import styles from './PostComponent.module.scss';

interface PostComponentProps {
  postId: string;
}

const PostComponent: React.FC<PostComponentProps> = ({ postId }) => {
  const { comments, addComment, removeComment } = useComments();

  const [newComment, setNewComment] = useState<string>('');

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    addComment(postId, newComment);
    setNewComment('');
  };

  return (
    <div className={styles.comments}>
      <h3>Comments:</h3>
      <ul className={styles.commentsList}>
        {comments[postId] && comments[postId].map((comment, index) => (
          <li key={index}>
            {comment.text}
            <button onClick={() => removeComment(postId, index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className={styles.createComment}>
        <textarea value={newComment} onChange={handleCommentChange} />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default PostComponent;
