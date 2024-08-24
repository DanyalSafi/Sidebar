"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

interface ISubItem {
  name: string;
  path: string;
}

const SubMenuItem = ({ item }: { item: ISubItem }) => {
  const { name, path } = item;
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <div
      className={`text-sm p-2 cursor-pointer rounded-lg ${
        isActive ? "text-blue-600 bg-gray-200 font-semibold" : "hover:text-blue-600 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default SubMenuItem;
