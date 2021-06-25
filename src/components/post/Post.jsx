import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    fetchUser();
  }, [post.userId]);
  const fetchUser = async () => {
    try {
      const res = await fetch(`/users?userId=${post.userId}`);
      const data = await res.json();
      console.log(data);
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.proflePicture || PF + "person/noavatar.png"}
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={isLiked ? `${PF}like4.png` : `${PF}like3.png`}
              className="likeIcon"
              onClick={handleLike}
            />
            <span className="likeCounter">{like} people liked this post</span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">{post.comment}comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
