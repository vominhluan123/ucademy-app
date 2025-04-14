const Layout = ({
  player,
  outline,
}: {
  player: React.ReactNode;
  outline: React.ReactNode;
}) => {
  return (
    <div>
      <>{player}</>
      {outline}
    </div>
  );
};

export default Layout;
