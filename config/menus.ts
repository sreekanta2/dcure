import {
  CalendarDays,
  LayoutDashboard,
  Lock,
  MessageSquare,
  Receipt,
  Settings,
  Share2,
  Star,
  User,
  UserPlus,
  Users,
} from "lucide-react";

export const menus = [
  {
    title: "Doctors",
    href: "/doctors",
  },

  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export interface MenuItemProps {
  title?: string;
  icon?: React.ElementType;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu?: MenuItemProps[];
  nested?: MenuItemProps[];
  onClick?: () => void;
  isHeader?: boolean;
}

// specific configuration
export const doctorConfig: MenuItemProps[] = [
  {
    isHeader: true,
    title: "Menu",
  },

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
  },
  {
    title: "My Patients",
    href: "patients",
    icon: Users,
  },

  {
    title: "Appointments",
    href: "appointments",
    icon: CalendarDays,
  },

  {
    title: "Reviews",
    href: "reviews",
    icon: Star,
  },

  {
    title: "Profile",
    href: "profile",
    icon: User,
  },
  // {
  //   title: "Invoices",
  //   href: "/invoices",
  //   icon: FileText,
  //   child: [
  //     {
  //       title: "Create Invoice",
  //       href: "/create-invoice",
  //       icon: DollarSign,
  //     },

  //     {
  //       title: " Invoices List",
  //       href: "/invoice-list",
  //       icon: Heart,
  //     },
  //   ],
  // },

  {
    title: "Settings",
    href: "settings",
    icon: Settings,
  },

  {
    title: "Social Media",
    href: "socials",
    icon: Share2,
  },

  {
    title: "Change Password",
    href: "change-password",

    icon: Lock,
  },
];

// specific configuration
export const patientConfig: MenuItemProps[] = [
  {
    isHeader: true,
    title: "Patient Dashboard",
  },

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
  },

  {
    title: "Profile",
    href: "profile",
    icon: User,
  },

  {
    title: "Settings",
    href: "settings",
    icon: Settings,
  },

  {
    title: "Change Password",
    href: "change-password",
    icon: Lock,
  },
];
export const adminConfig: MenuItemProps[] = [
  // dashboard
  {
    isHeader: true,
    title: "Admin Dashboard",
  },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
  },
  {
    title: " Doctors",
    href: "doctors",
    icon: UserPlus,
  },
  {
    title: "Patients",
    href: "patients",
    icon: Receipt,
  },
  {
    title: "Appointments",
    href: "appointments",
    icon: CalendarDays,
  },
  {
    title: "Specialties",
    href: "specialties",
    icon: Users,
  },

  {
    title: "Reviews",
    href: "reviews",
    icon: MessageSquare,
  },

  {
    title: "Settings",
    href: "settings",
    icon: User,
  },

  {
    title: "Change Password",
    href: "change-password",
    icon: Lock,
  },
];
// export const pharmacyConfig: MenuItemProps[] = [
//   {
//     isHeader: true,
//     title: "Menu",
//   },

//   {
//     title: "Dashboard",
//     icon: LayoutDashboard,
//     href: "dashboard",
//   },

//   {
//     title: "Products",
//     href: "products",
//     icon: CalendarDays,
//     child: [
//       {
//         title: "Products ",
//         href: "products",
//         icon: Heart,
//         // multi_menu: [
//         //   {
//         //     title: "Active Products",
//         //     href: "active-products",
//         //     icon: Heart,
//         //   },
//         //   {
//         //     title: "Inactive Products",
//         //     href: "inactive-products",
//         //     icon: Heart,
//         //   },
//         // ],
//       },
//       {
//         title: "Add Product",
//         href: "add-product",
//         icon: DollarSign,
//       },
//       {
//         title: "Out of Stock",
//         href: "out-of-stock",
//         icon: DollarSign,
//       },
//       {
//         title: "Expired",
//         href: "expired",
//         icon: DollarSign,
//       },
//     ],
//   },
//   {
//     title: "Categories",
//     href: "categories",
//     icon: Users,
//   },
//   {
//     title: "Orders",
//     href: "orders",
//     icon: Heart,
//   },

//   {
//     title: "Transactions",
//     href: "transactions",
//     icon: CreditCard,
//   },
//   {
//     title: "Settings",
//     href: "settings",
//     icon: User,
//   },

//   {
//     title: "Change Password",
//     href: "change-password",
//     icon: Lock,
//   },
// ];
