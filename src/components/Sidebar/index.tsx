"use client";

import { useState, useEffect } from "react";
import SidebarItem from "./item";
import PinShortcutModal from "./PinShortcutModal";
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
  ChevronDown,
  ChevronUp,
  Menu
} from "lucide-react";

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
        name: "Revenue Recognition",
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
  const [recentRoutes, setRecentRoutes] = useState<string[]>([]);
  const [pinnedRoutes, setPinnedRoutes] = useState<string[]>([]);
  const [shortcutsExpanded, setShortcutsExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedRoutes = localStorage.getItem("recentRoutes");
    const storedPinnedRoutes = localStorage.getItem("pinnedRoutes");
    if (storedRoutes) {
      setRecentRoutes(JSON.parse(storedRoutes));
    }
    if (storedPinnedRoutes) {
      setPinnedRoutes(JSON.parse(storedPinnedRoutes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentRoutes", JSON.stringify(recentRoutes));
  }, [recentRoutes]);

  useEffect(() => {
    localStorage.setItem("pinnedRoutes", JSON.stringify(pinnedRoutes));
  }, [pinnedRoutes]);

  const handleItemClick = (path: string) => {
    setRecentRoutes((prevRoutes) => {
      const updatedRoutes = [path, ...prevRoutes.filter((route) => route !== path)];
      if (updatedRoutes.length > 5) {
        updatedRoutes.pop();
      }
      return updatedRoutes;
    });
  };

  const toggleShortcuts = () => {
    setShortcutsExpanded(!shortcutsExpanded);
  };

  const togglePin = (path: string) => {
    setPinnedRoutes((prevPinnedRoutes) =>
      prevPinnedRoutes.includes(path)
        ? prevPinnedRoutes.filter((route) => route !== path)
        : [...prevPinnedRoutes, path]
    );
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4 overflow-y-auto">
      <div className="flex flex-col space-y-10 w-full">
        <div className="flex flex-col space-y-2">
          {items.map((item) => (
            <div key={item.path}>
              {item.name === "Payments" && (
                <p className="text-gray-500 mt-2">Products</p>
              )}
              <SidebarItem
                item={item}
                onItemClick={handleItemClick}
                onPinClick={togglePin}
                isPinned={pinnedRoutes.includes(item.path)}
              />
            </div>
          ))}
          {recentRoutes.length > 0 && (
            <div className="mt-10">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleShortcuts}
              >
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold">Shortcuts</h3>
                  <button onClick={() => setIsModalOpen(true)} className="text-blue-500 float-left">
                    <Menu className="h-5 w-5" />
                  </button>
                </div>
                {shortcutsExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
              {shortcutsExpanded && (
                <div className="flex flex-col space-y-2 mt-2">
                  {pinnedRoutes.map((route) => {
                    const item = items.find((item) => item.path === route);
                    return item ? (
                      <SidebarItem
                        key={route}
                        item={item}
                        onItemClick={handleItemClick}
                        onPinClick={togglePin}
                        isPinned={true}
                      />
                    ) : null;
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <PinShortcutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          recentItems={recentRoutes.map((route) => items.find((item) => item.path === route)!)}
          pinnedItems={pinnedRoutes}
          togglePin={togglePin}
        />
      )}
    </div>
  );
};

export default Sidebar;