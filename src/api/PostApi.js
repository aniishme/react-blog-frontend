import { useEffect } from "react";
import axios from "axios";

function PostApi({ getPosts }) {
  useEffect(() => {
    let isMounted = true;
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      if (isMounted === true) {
        getPosts(response.data);
      }
    });
    return () => (isMounted = false);
  }, [getPosts]);

  return null;
}

export default PostApi;
