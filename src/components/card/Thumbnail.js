import React from "react";
import { Link } from "react-router-dom";

function Thumbnail({ post }) {
  return (
    <div className="thumbnail">
      <div className="card mt-5 mb-5">
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
