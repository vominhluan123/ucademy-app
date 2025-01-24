const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <a href="/" className="font-bold text-3xl inline-block">
        Ucademy
      </a>
      <ul>
        <li>
          <a href="/explore">Khám phá</a>
        </li>
      </ul>
    </div>
  );
};
function MenuItems() {
  return (
    <li>
      <a href="/">Khu vực học tập</a>
    </li>
  );
}
export default Sidebar;
