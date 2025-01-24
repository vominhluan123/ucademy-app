import { MenuIcons } from "@/constants";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        Ucademy
      </a>
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
      <a
        className="p-3 rounded-md flex items-center gap-3 hover:text-primary hover:bg-primary"
        href={url}
      >
        {icon}
        {title}
      </a>
    </li>
  );
}
export default Sidebar;
