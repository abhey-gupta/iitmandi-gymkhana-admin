"use client";

import { Sidebar } from "flowbite-react";
import { HiInbox } from "react-icons/hi";

import { IoMdAdd } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";

export default function SidebarComponent() {
  return (
    <Sidebar className="h-screen w-1/5">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link
            className="flex items-center rounded-lg px-3 py-2 gap-4 text-base font-normal text-gray-900 hover:bg-gray-100"
            href="/home"
          >
            <RxDashboard />
            Welcome
          </Link>
          <Sidebar.Collapse
            className="flex gap-5"
            icon={IoMdAdd}
            label="Add Entity"
          >
            <Link
              className="flex items-center rounded-lg px-3 py-2 gap-4 text-base font-normal text-gray-900 hover:bg-gray-100 pl-10"
              href="/home/add-entity?entity=member"
            >
              Add club member
            </Link>

            <Link
              className="flex items-center rounded-lg px-3 py-2 gap-4 text-base font-normal text-gray-900 hover:bg-gray-100 pl-10"
              href="/home/add-entity?entity=club"
            >
              Add new club
            </Link>

            <Link
              className="flex items-center rounded-lg px-3 py-2 gap-4 text-base font-normal text-gray-900 hover:bg-gray-100 pl-10"
              href="/home/add-entity?entity=society"
            >
              Add new society
            </Link>
            <Link
              className="flex items-center rounded-lg px-3 py-2 gap-4 text-base font-normal text-gray-900 hover:bg-gray-100 pl-10"
              href="/home/add-entity?entity=society-member"
            >
              Add new society member
            </Link>
          </Sidebar.Collapse>
          <Link
            className="flex items-center rounded-lg px-3 py-2 gap-4 text-base font-normal text-gray-900 hover:bg-gray-100"
            href="#"
          >
            <HiInbox />
            Inbox
          </Link>
          {/* <Link
            className="flex items-center rounded-lg px-3 py-2 gap-4 text-base font-normal text-gray-900 hover:bg-gray-100"
            href="#"
          >
            <HiUser />
            Users
          </Link> */}
        </Sidebar.ItemGroup>

        {/* <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup> */}
      </Sidebar.Items>
    </Sidebar>
  );
}
