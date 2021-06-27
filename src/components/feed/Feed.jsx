import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // if (username) {
        //   const res = await fetch("/posts/profile/" + username);
        //   const data = await res.json();
        //   // console.log(data);
        //   setPosts(data);
        // } else {
        //   const res = await fetch("/posts/timeline/" + user._id);
        //   const data = await res.json();
        //   // console.log(data);
        //   setPosts(data);
        // }
        const res = username
          ? await fetch("/posts/profile/" + username)
          : await fetch("/posts/timeline/" + user._id);
        const data = await res.json();
        setPosts(
          data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost();
  }, [username, user._id]);

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
