export interface MenuItemProps {
  title?: string;
  icon?: React.ElementType;
  href: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu?: MenuItemProps[];
  nested?: MenuItemProps[];
  onClick?: () => void;
  isHeader?: boolean;
}
export const mainMenu: MenuItemProps[] = [
  {
    title: "Doctors",

    href: "doctors",
  },
 
  {
    title: "Blogs",
    href: "blogs",
  },
];
