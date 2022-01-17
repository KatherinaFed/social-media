import './sidebar.css';
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  Work,
  Event,
  Storefront,
} from '@mui/icons-material';
import { CloseFriends } from '../Users/closeFriends/CloseFriends';
import { Users } from '../../dummyData';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <Storefront className="sidebarIcon" />
            <span className="sidebarListItemText">Marketplace</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="hr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};
