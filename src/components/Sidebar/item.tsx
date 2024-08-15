"use client";

import { useMemo, useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import SubMenuItem from "./sub-item";

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

const SidebarItem = ({ item, onItemClick, onPinClick, isPinned }: {
  item: ISidebarItem;
  onItemClick: (path: string) => void;
  onPinClick?: (path: string) => void;
  isPinned?: boolean;
}) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click event from bubbling up

    if (items && items.length > 0) {
      setExpanded(!expanded);
    } else {
      onItemClick(path); 
      router.push(path);
    }
  };

  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      if (items.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }
    }
    return path === pathname;
  }, [items, path, pathname]);

  return (
    <>
      <div
        className={`flex items-center p-3 rounded-lg hover:bg-gray-200 cursor-pointer hover:text-blue-600 justify-between
        ${isActive && "text-blue-600 bg-gray-200"}`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          <p className="text-sm font-semibold">{name}</p>
        </div>
        {items && items.length > 0 && <ChevronDown size={18} />}
      </div>
      {expanded && items && items.length > 0 && (
        <div className="flex flex-col space-y-1 ml-10">
          {items.map((subItem) => (
            <SubMenuItem key={subItem.path} item={subItem} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
