import Link from "next/link";
import React from "react";

interface DropdownItemProps {
  item: {
    name: string;
    href: string;
    icon: React.ElementType;
    description: string;
    featured?: boolean;
  };
}

const DropdownItem: React.FC<DropdownItemProps> = ({ item }) => {
  const Icon = item.icon;

  if (item.featured) {
    return (
      <Link
        href={item.href}
        className="block p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 ease-in-out"
      >
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {item.name}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          {item.description}
        </p>
        <span className="text-zinc-500 dark:text-zinc-500 text-sm font-medium mt-2 inline-block">
          Learn More →
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      className="flex items-center p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 group"
    >
      <div className="flex-shrink-0 w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
        <Icon className="w-4 h-4 text-zinc-600 dark:text-zinc-400 transition-all duration-300 ease-in-out group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 transition-all duration-300 ease-in-out group-hover:text-zinc-900 dark:group-hover:text-white">
          {item.name}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 transition-all duration-300 ease-in-out group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
          {item.description}
        </p>
      </div>
    </Link>
  );
};

export default DropdownItem;