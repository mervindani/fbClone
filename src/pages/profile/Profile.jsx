import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    fetchUser();
  }, [username]);
  const fetchUser = async () => {
    try {
      const res = await fetch(`/users?username=${username}`);
      const data = await res.json();
      console.log(data);
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={user.coverPicture} className="profileCoverImg" />
              <img src={user.proflePicture} className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <div className="profileInfoName">{user.username}</div>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
