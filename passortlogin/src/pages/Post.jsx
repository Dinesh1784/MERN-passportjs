import React from "react";
import { useParams } from "react-router";

import { posts } from "../data";

const Post = () => {
  const params = useParams();
  const post = posts.find((p) => p.id.toString() === params.id);
  // const location = useLocation();
  // const path = location.pathname.split("/")[2];
  // const post = posts.find((p) => p.id.toString() === path);
  // console.log(post);

  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
