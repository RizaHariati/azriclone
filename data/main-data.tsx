import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark,
  faBriefcaseClock,
  faBullhorn,
  faCalendarDays,
  faChartSimple,
  faClock,
  faFileVideo,
  faFlag,
  faHandHoldingHeart,
  faPeopleGroup,
  faPuzzlePiece,
  faRectangleAd,
  faSeedling,
  faShieldHeart,
  faStar,
  faStore,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const mainLeftLinks = [
  {
    name: "Friends",
    icon: faUserGroup,
    href: "/",
    color: "text-sky-500",
  },
  {
    name: "Pages",
    icon: faFlag,
    href: "/",
    color: "text-red-500",
  },
  {
    name: "Watch",
    icon: faCirclePlay,
    href: "/",
    color: "text-sky-500",
  },
  {
    name: "Favourites",
    icon: faStar,
    href: "/",
    color: "text-yellow-500",
  },
  {
    name: "Fundraisers",
    icon: faShieldHeart,
    href: "/",
    color: "text-red-500",
  },
  {
    name: "Messenger",
    icon: faFacebookMessenger,
    href: "/",
    color: "text-sky-500",
  },
  {
    name: "Groups",
    icon: faPeopleGroup,
    href: "/",
    color: "text-slate-100",
  },
  {
    name: "Ad Centre",
    icon: faBullhorn,
    href: "/",
    color: "text-yellow-500",
  },
  {
    name: "Ads Manager",
    icon: faChartSimple,
    href: "/",
    color: "text-sky-500",
  },
  {
    name: "Climate Science Center",
    icon: faSeedling,
    href: "/",
    color: "text-green-500",
  },
  {
    name: "Emotional Health",
    icon: faHandHoldingHeart,
    href: "/",
    color: "text-yellow-500",
  },
  {
    name: "Events",
    icon: faCalendarDays,
    href: "/",
    color: "text-red-500",
  },
  {
    name: "Gaming Video",
    icon: faPuzzlePiece,
    href: "/",
    color: "text-sky-500",
  },
  {
    name: "Live Videos",
    icon: faFileVideo,
    href: "/",
    color: "text-red-500",
  },
  {
    name: "Marketplace",
    icon: faStore,
    href: "/",
    color: "text-sky-500",
  },
  {
    name: "Memories",
    icon: faClock,
    href: "/",
    color: "text-sky-500",
  },
  {
    name: "Messenger Kids",
    icon: faFacebookMessenger,
    href: "/",
    color: "text-green-500",
  },
  {
    name: "Most Recent",
    icon: faBriefcaseClock,
    href: "/",
    color: "text-sky-500",
  },
  {
    name: "Recent Ad Activity",
    icon: faRectangleAd,
    href: "/",
    color: "text-yellow-500",
  },
  {
    name: "Saved",
    icon: faBookmark,
    href: "/",
    color: "text-red-500",
  },
];
const mainShortcuts = [
  {
    name: "Germany Tourism",
    src: "page1",
    href: "https://www.facebook.com/germanytourism",
  },
  {
    name: "City Car Community Indonesia",
    src: "page2",
    href: "https://www.facebook.com/groups/citycarcommunityindonesia",
  },
  {
    name: "Community of single people",
    src: "page3",
    href: "https://www.facebook.com/groups/CommunityofSinglePeople",
  },
  {
    name: "Horror movies forever",
    src: "page4",
    href: "/https://www.facebook.com/groups/HorrorMF",
  },
  {
    name: "Lady Diana",
    src: "page5",
    href: "https://www.facebook.com/groups/125280534641344",
  },
];
const mainSponsor = [
  {
    id: "sponsor-1",
    name: "Take 20% Off Today Before Offer Expires",
    url: "yoga",
    href: "https://yogainternational.com/",
  },
  {
    id: "sponsor-2",
    name: "Lite Air Mask",
    url: "gadget",
    href: "https://www.airinum.com/",
  },
];

const mainRightContacts = [
  {
    id: "contact-1",
    name: "room",
    url: "room",
    text: "New Room",
  },

  {
    id: "contact-2",
    name: "search",
    url: "search",
    text: "Search for name or group",
  },
  {
    id: "contact-3",
    name: "more",
    url: "more",
    text: "options",
  },
];

const pagesData = [
  {
    index: "pag-1",
    name: "business suite",
    icon: "business",
  },
  {
    index: "pag-2",
    name: "Discover",
    icon: "discover",
  },
  {
    index: "pag-3",
    name: "liked pages",
    icon: "like",
  },
  {
    index: "pag-4",
    name: "invitations",
    icon: "invitation",
  },
];

export {
  mainLeftLinks,
  mainShortcuts,
  mainSponsor,
  mainRightContacts,
  pagesData,
};
