const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <a href="/" className="font-bold text-3xl inline-block">
        Ucademy
      </a>
      <ul>
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
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
      <a href="/">Khu vực học tập</a>
    </li>
  );
}
export default Sidebar;
