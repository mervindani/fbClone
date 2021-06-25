import "./sidebar.css";
import {
  RssFeed,
  Chat,
  VideoCall,
  Group,
  Bookmark,
  QuestionAnswer,
  Book,
  Event,
  Computer,
} from "@material-ui/icons";
import { Users } from "../../data";
import CloseFriends from "../closeFriends/CloseFriends";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed classname="sidebarIcon" />
            <span className="sidebarListItemText">FEED</span>
          </li>
          <li className="sidebarListItem">
            <Chat classname="sidebarIcon" />
            <span className="sidebarListItemText">CHATS</span>
          </li>
          <li className="sidebarListItem">
            <VideoCall classname="sidebarIcon" />
            <span className="sidebarListItemText">VIDEOS</span>
          </li>
          <li className="sidebarListItem">
            <Group classname="sidebarIcon" />
            <span className="sidebarListItemText">GROUPS</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark classname="sidebarIcon" />
            <span className="sidebarListItemText">BOOKMARKS</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswer classname="sidebarIcon" />
            <span className="sidebarListItemText">QUESTIONS</span>
          </li>
          <li className="sidebarListItem">
            <Book classname="sidebarIcon" />
            <span className="sidebarListItemText">JOBS</span>
          </li>
          <li className="sidebarListItem">
            <Event classname="sidebarIcon" />
            <span className="sidebarListItemText">EVENTS</span>
          </li>
          <li className="sidebarListItem">
            <Computer classname="sidebarIcon" />
            <span className="sidebarListItemText">COURSES</span>
          </li>
        </ul>
        <button className="sidebarButton">SHOW MORE</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
