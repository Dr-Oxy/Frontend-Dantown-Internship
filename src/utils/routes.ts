import {
  ballIcon,
  gamingIcon,
  musicIcon,
  techIcon,
} from "../../public/assets/icons";

import HomeIcon from "./assets/home.svg";
import TimelineIcon from "./assets/timeline.svg";
import CommunityIcon from "./assets/community.svg";
import DiscoverIcon from "./assets/discover.svg";
import FriendIcon from "./assets/friend.svg";
import BookmarkIcon from "./assets/bookmark.svg";
import EventIcon from "./assets/event.svg";
import DiscussionIcon from "./assets/discussion.svg";

const mainRoutes = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "Timeline",
    link: "/timeline",
    icon: TimelineIcon,
  },
  {
    id: 3,
    name: "Community",
    link: "/community",
    icon: CommunityIcon,
  },
  {
    id: 4,
    name: "Discover",
    link: "/discover",
    icon: DiscoverIcon,
  },

  {
    id: 5,
    name: "Friends",
    link: "/friends",
    icon: FriendIcon,
  },

  {
    id: 6,
    name: "Bookmark",
    link: "/bookmark",
    icon: BookmarkIcon,
  },

  {
    id: 7,
    name: "Event",
    link: "/event",
    icon: EventIcon,
  },

  {
    id: 8,
    name: "Discussion",
    link: "/discussion",
    icon: DiscussionIcon,
  },
];

const categories = [
  {
    id: 1,
    name: "Sports",
    link: "/sports",
    icon: ballIcon,
  },
  {
    id: 2,
    name: "Gaming",
    link: "/gaming",
    icon: gamingIcon,
  },
  {
    id: 3,
    name: "Music",
    link: "/music",
    icon: musicIcon,
  },
  {
    id: 4,
    name: "Tech & Science",
    link: "/tech-science",
    icon: techIcon,
  },
];

export { mainRoutes, categories };
