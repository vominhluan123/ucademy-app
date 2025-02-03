import { IconExlore, IconPlay } from "@/components/icons";
import { TMenueItem } from "@/types";

export const MenuIcons: TMenueItem[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/explore",
    title: "",
    icon: <IconExlore className="size-5" />,
  },
];
