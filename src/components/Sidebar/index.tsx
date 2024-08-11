"use client";
import {
  LucideIcon,
  House,
  PackageSearch,
  Ellipsis,
  Weight,
  ArrowRightLeft,
  Speech,
  CreditCard,
  ReceiptText,
  ChartColumnIncreasing,
} from "lucide-react";
import SidebarItem from "./item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Home",
    path: "/",
    icon: House,
  },
  {
    name: "Balances",
    path: "/balances",
    icon: Weight,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: ArrowRightLeft,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: Speech,
  },
  {
    name: "Product Catalogue",
    path: "/product",
    icon: PackageSearch,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: CreditCard,
    items: [
      {
        name: "Dispute",
        path: "/payments/disputes",
      },
      {
        name: "Radar",
        path: "/payments/radar",
      },
      {
        name: "Payment Links",
        path: "/payments/payment-links",
      },
      {
        name: "Terminal",
        path: "/payments/terminal",
      },
    ],
  },
  {
    name: "Billing",
    path: "/billing",
    icon: ReceiptText,
    items: [
      {
        name: "Overview",
        path: "/billing/overview",
      },
      {
        name: "Subscriptions",
        path: "/billing/subscriptions",
      },
      {
        name: "Invoices",
        path: "/billing/invoices",
      },
      {
        name: "Revenue",
        path: "/billing/revenue",
      },
    ],
  },
  {
    name: "Reporting",
    path: "/reporting",
    icon: ChartColumnIncreasing,
    items: [
      {
        name: "Reports",
        path: "/reporting/reports",
      },
      {
        name: "Sigma",
        path: "/reporting/sigma",
      },
      {
        name: "Revenue_Recognition",
        path: "/reporting/revenue-recognition",
      },
      {
        name: "Data Management",
        path: "/reporting/data-management",
      },
    ],
  },
  {
    name: "More",
    path: "/more",
    icon: Ellipsis,
    items: [
      {
        name: "Tax",
        path: "/more/tax",
      },
      {
        name: "Connect",
        path: "/more/connect",
      },
      {
        name: "Identity",
        path: "/more/identity",
      },
      {
        name: "Atlas",
        path: "/more/atlas",
      },
      {
        name: "Issuing",
        path: "/more/issuing",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;