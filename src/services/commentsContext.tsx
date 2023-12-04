import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Comment {
  id: string;
  text: string;
}

interface CommentsContextProps {
  comments: Record<string, Comment[]>;
  addComment: (postId: string, commentText: string) => void;
  removeComment: (postId: string, commentIndex: number) => void;
}

const CommentsContext = createContext<CommentsContextProps | undefined>(undefined);

interface CommentsProviderProps {
  children: ReactNode;
}

export const CommentsProvider: React.FC<CommentsProviderProps> = ({ children }) => {
  const [comments, setComments] = useState<Record<string, Comment[]>>({});

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const addComment = (postId: string, commentText: string) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), { id: postId, text: commentText }],
    }));
  };

  const removeComment = (postId: string, commentIndex: number) => {
    setComments((prevComments) => {
      const updatedComments = [...(prevComments[postId] || [])];
      updatedComments.splice(commentIndex, 1);
      return { ...prevComments, [postId]: updatedComments };
    });
  };

  useEffect(() => {
    const saveComments = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      localStorage.setItem('comments', JSON.stringify(comments));
    };

    saveComments();
  }, [comments]);

  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem('comments', JSON.stringify(comments));
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [comments]);

  const value: CommentsContextProps = {
    comments,
    addComment,
    removeComment,
  };

  return <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>;
};

export const useComments = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error('error useComments');
  }
  return context;
};
