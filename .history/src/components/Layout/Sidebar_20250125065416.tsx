import { MenuIcons } from "@/constants";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <Link href="/" className="font-bold text-3xl inline-block mb-5">
        <span className="font-primary">U</span>cademy
      </Link>
      <ul className="">
        {MenuIcons.map((item, index) => (
          <MenuItems
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItems>
        ))}
      </ul>
    </div>
  );
};
function MenuItems({
  url = "/",
  title = "Khu vực học tập",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <Link
        className="p-3 rounded-md flex items-center gap-3 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all"
        href={url}
      >
        {icon}
        {title}
      </Link>
    </li>
  );
}
export default Sidebar;
