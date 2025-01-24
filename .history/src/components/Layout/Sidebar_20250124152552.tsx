const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <a href="/" className="font-bold text-3xl inline-block">
        Ucademy
      </a>
      <ul>
        <MenuItems url="/" title="Khu vực học tập"></MenuItems>
        <MenuItems url="/exlore" title="Khám phá"></MenuItems>
      </ul>
    </div>
  );
};
function MenuItems({
  url = "/",
  title = "Khu vực học tập",
}: {
  url: string;
  title: string;
}) {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
}
export default Sidebar;
