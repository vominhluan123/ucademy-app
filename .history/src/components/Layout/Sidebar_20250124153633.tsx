const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        Ucademy
      </a>
      <ul>
        <MenuItems url="/" title="Khu vực học tập" icon></MenuItems>
        <MenuItems url="/exlore" title="Khám phá"></MenuItems>
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
      <a className="p-3 rounded-md flex items-center gap-3" href={url}>
        {title}
        {icon}
      </a>
    </li>
  );
}
export default Sidebar;
