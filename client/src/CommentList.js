import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = (props) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:5000/posts/${props.postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return (
    <div>
      <ul> {renderedComments} </ul>
    </div>
  );
};

export default CommentList;
