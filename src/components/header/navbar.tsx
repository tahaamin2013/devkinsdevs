"use client";

import React, { useCallback, useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navlinks } from "./navlinks";
import DropdownItem from "./dropdown-item";
import ThemeButton from "../ThemeButton";
import { useTheme } from "next-themes";
import {NavLinkMobile} from "./NavLinkMobile";

const NavItem: React.FC<{
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?:
    | {
        columns: {
          title: string;
          items: {
            name: string;
            href: string;
            icon: React.ElementType;
            description: string;
          }[];
        }[];
      }
    | {
        name: string;
        href: string;
        icon: React.ElementType;
        description: string;
      }[];
}> = ({ href, name, hasDropdown, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    if (hasDropdown) {
      setIsDropdownOpen((prev) => !prev);
    }
  }, [hasDropdown]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const isColumnsDropdown = dropdownItems && !Array.isArray(dropdownItems);
  const isCompanyDropdown = name === "Company" && Array.isArray(dropdownItems);

  return (
    <div
      className="relative group"
      onMouseEnter={() => hasDropdown && setIsDropdownOpen(true)}
      onMouseLeave={() => hasDropdown && setIsDropdownOpen(false)}
    >
      <Link
        href={href}
        onClick={toggleDropdown}
        className="relative text-muted-foreground hover:text-foreground text-[15px] flex items-center gap-1 transition-all duration-300 font-medium cursor-pointer group"
      >
        {name}
        {hasDropdown && (
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4 opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
          </motion.div>
        )}
      </Link>

      <AnimatePresence>
        {hasDropdown && isDropdownOpen && dropdownItems && (
          <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2 translate-y-full">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-1 w-[720px] rounded-xl bg-white dark:bg-black dark:text-white/90 dark:bg-zinc-950/90 py-4 px-4 shadow-lg backdrop-blur-sm border border-zinc-200/20 dark:border-zinc-700/20"
            >
              {isColumnsDropdown && (
                <div className="grid grid-cols-3 gap-8">
                  {dropdownItems.columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-3">
                      <h3 className="px-2 text-sm font-medium text-muted-foreground">
                        {column.title}
                      </h3>
                      <div className="space-y-1">
                        {column.items.map((item, itemIndex) => (
                          <DropdownItem key={itemIndex} item={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {isCompanyDropdown && (
                <div className="grid grid-cols-2 gap-8">
                  <div className="col-span-1 space-y-3">
                    <DropdownItem
                      item={{
                        ...dropdownItems[0],
                        featured: true,
                      }}
                    />
                  </div>
                  <div className="col-span-1 space-y-4">
                    {dropdownItems.slice(1).map((item, index) => (
                      <DropdownItem key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme
      ? navlinks.logo[resolvedTheme === "dark" ? "dark" : "light"]
      : navlinks.logo.default;

  const toggleUserMenu = useCallback(() => {
    setIsUserMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsUserMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-16 bg-white dark:bg-black dark:text-white/70 dark:bg-zinc-950/70 backdrop-blur-[10px] border border-zinc-200/20 dark:border-zinc-700/20 shadow-lg shadow-zinc-200/20 dark:shadow-zinc-900/20">
      <div className="mx-auto h-full max-w-7xl px-8">
        <div ref={menuRef} className="flex h-full items-center justify-between">
          <NavLinkMobile />
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoSrc}
              alt={navlinks.logo.alt}
              width={navlinks.logo.width}
              height={navlinks.logo.height}
              priority
              className="cursor-pointer"
            />
          </Link>

          <div className="hidden items-center space-x-6 md:flex">
            {navlinks.navItems.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                href={item.href}
                hasDropdown={item.hasDropdown}
                dropdownItems={item.dropdownItems}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleUserMenu}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200"
              >
                <User className="h-5 w-5" />
              </motion.button>
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-black dark:text-white/90 dark:bg-zinc-950/90 py-3 px-2 shadow-lg backdrop-blur-sm border border-zinc-200/20 dark:border-zinc-700/20"
                  >
                    {navlinks.userMenuItems.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="block rounded-lg px-4 py-3 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <ThemeButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;