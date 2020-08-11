import React, { useEffect, useState } from "react";
import axios from "axios";

function Post({ match }) {
  const [post, setPost] = useState([]);

  const id = match.params.post_id;
  useEffect(() => {
    let isMounted = true;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (isMounted === true) {
          setPost(response.data);
        }
      });
    return () => (isMounted = false);
  }, []);

  return (
    <div className="container text-left">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
