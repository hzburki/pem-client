import { RiWallet3Fill } from "react-icons/ri";
import { HiDocumentReport, HiChartPie } from "react-icons/hi";

export const SideMenuData = [
  {
    route: "/",
    name: "Transactions",
    icon: <RiWallet3Fill size={24} />,
  },
  {
    name: "Reports",
    route: "/reports",
    icon: <HiChartPie size={24} />,
  },
  {
    name: "Budget",
    route: "/budget",
    icon: <HiDocumentReport size={24} />,
  },
];
