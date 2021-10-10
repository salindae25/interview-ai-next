import {
  MdCardTravel,
  MdPeople,
  MdPieChartOutline,
  MdSlideshow,
  MdTheaters,
} from "react-icons/md";
import { NavItem } from "types/nav-item";

export const navItems: NavItem[] = [
  {
    type: "link",
    href: "/",
    icon: MdSlideshow,
    label: "Overview",
  },
  {
    type: "link",
    href: "/interviews",
    icon: MdCardTravel,
    label: "Interviews",
  },
  {
    type: "link",
    href: "/insights",
    icon: MdPieChartOutline,
    label: "Insights",
  },
  {
    type: "link",
    href: "/talent-pool",
    icon: MdPeople,
    label: "Talent Pool",
  },
  {
    type: "link",
    href: "/team",
    icon: MdTheaters,
    label: "Team",
  },
];
