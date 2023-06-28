'use client'

import React, { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import DashIcon from "@/components/icons/DashIcon";
// chakra imports

import routes from "@/data/routes";


type Props = {
  onClickRoute?: (e: MouseEvent<HTMLElement>) => any | any
}

export function SidebarLinks({ onClickRoute }: Props) {
  // Chakra color mode
  const pathname = usePathname()

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return pathname.includes(routeName);
  };

  const createLinks = (routes: any) => {
    return routes.map((route: any, index: number) => {
      if (
        route.layout === "/dashboard" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          // <Link key={index} href={route.layout + "/" + route.path}>
          <Link key={index} href={route.path} onClick={onClickRoute}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${activeRoute(route.path) === true
                    ? "font-bold text-brand-500 dark:text-white"
                    : "font-medium text-gray-600"
                    }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                    ? "font-bold text-navy-700 dark:text-white"
                    : "font-medium text-gray-600"
                    }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };

  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
