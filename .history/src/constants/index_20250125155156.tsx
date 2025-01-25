import { IconExlore, IconPlay } from "@/components/icons";

export const MenuIcons: {
  url: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/exlore",
    title: "Khám phá",
    icon: <IconExlore className="size-5" />,
  },
];
