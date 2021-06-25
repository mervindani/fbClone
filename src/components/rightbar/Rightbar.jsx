import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";

export default function Rightbar({ user }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" className="birthdayImage" />
          <span className="birthdayText">
            <b>Iron man</b> and <b> 4 other</b> friends have their birthday
            today
          </span>
        </div>
        <img src="/assets/ads.jpg" alt="" className="rightbarAd" />
        <h3 className="rightbarTitle">Online Friends</h3>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
        <h3 className="rightBarTitle">User information</h3>
        <div className="rightBarInfo">
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h3 className="rightBarTitle">User Followings</h3>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src={`${PF}person/2.jpg`} className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">thanoz</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/3.jpg`} className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">thanoz</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/4.jpg`} className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">thanoz</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/5.jpg`} className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">thanoz</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/6.jpg`} className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">thanoz</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/7.jpg`} className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">thanoz</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
