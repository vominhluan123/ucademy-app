import { IconExlore, IconPlay } from "@/components/icons";
import { TMenueItem } from "@/types";

export const MenuIcons: TMenueItem[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/explore",
    title: "Khám phá",
    icon: <IconExlore className="size-5" />,
  },
];
