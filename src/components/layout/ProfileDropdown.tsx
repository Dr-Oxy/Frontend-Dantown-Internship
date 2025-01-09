"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProfileDropdownProps {
  avatarUrl: string | StaticImport;
  userName: string;
}

const ProfileDropdown = ({ avatarUrl, userName }: ProfileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <Image
          src={avatarUrl}
          alt={"User avatar"}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="hidden lg:block font-medium text-gray-900">
          {userName}
        </div>
        <ChevronDown
          className={`hidden lg:block h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mr-2 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-[9999] border border-gray-200">
          <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </button>

          <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </button>

          <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 flex items-center space-x-2">
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
