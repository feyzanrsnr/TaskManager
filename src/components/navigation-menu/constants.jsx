import { RxDashboard } from "react-icons/rx";
import { RiTaskLine, RiSettings5Line } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { GoStopwatch } from "react-icons/go";


export const MENU = [
  {
    id: 0,
    icon: <RxDashboard />,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    icon: <RiTaskLine />,
    title: "Tasks",
    href: "/tasks",
  },
  {
    id: 2,
    icon: <AiOutlineProject />,
    title: "Projects",
    href: "/projects",
  },
  {
    id: 3,
    icon: <RiSettings5Line />,
    title: "Settings",
    href: "/settings",
  },
  {
    id: 4,
    icon: <GoStopwatch />,
    title: "Pomodoro",
    href: "/pomodoro",
  },
];