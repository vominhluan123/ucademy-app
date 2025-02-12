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
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};
type TcreateCourseParams = {
  title: string;
  slug: string;
  author: string;
};
export { TActiveLinkProps, TMenueItem, TCreateUserParams, TcreateCourseParams };
