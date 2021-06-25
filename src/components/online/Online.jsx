import "./online.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({ user }) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgcontainer">
          <img src={PF + user.profilePicture} className="rightbarProfileImg" />
          <span className="onlineBadge"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  );
}
