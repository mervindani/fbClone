import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";

import { useState, useEffect } from "react";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (username) {
          const res = await fetch("/posts/profile/" + username);
          const json = await res.json();
          console.log(json);
          setPosts(json);
        } else {
          const res = await fetch("/posts/timeline/60cd7e348825fb0c28c388fa");
          const json = await res.json();
          console.log(json);
          setPosts(json);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost();
  }, [username]);

  useEffect(() => {});
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
