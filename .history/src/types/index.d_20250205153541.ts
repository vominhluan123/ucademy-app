type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};
type TMenueItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
};
type TCreateUserParams = {
  username: string;
  email__address: string;
  name?: string;
  avatar?: string;
};
export { TActiveLinkProps, TMenueItem };
