import React, { useState, Fragment } from "react";

import Thumbnail from "../card/Thumbnail";
import PostApi from "../../api/PostApi";

function Body() {
  const [posts, setPosts] = useState([]);

  function getPosts(data) {
    setPosts(data.slice(0, 6));
  }

  return (
    <Fragment>
      <PostApi getPosts={getPosts} />
      <div className="container">
        <h4 className="text-center mt-5">Recent Posts</h4>
        <div className="row">
          {posts.length ? (
            posts.map((post) => {
              return (
                <div className="col-sm" key={post.id}>
                  <Thumbnail post={post} />
                </div>
              );
            })
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Body;
