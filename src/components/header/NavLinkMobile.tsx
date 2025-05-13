"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { navlinks } from "./navlinks"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function NavLinkMobile() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const logoSrc =
    mounted && resolvedTheme
      ? navlinks.logo[resolvedTheme === "dark" ? "dark" : "light"]
      : navlinks.logo.default;

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="sm:hidden block" asChild>
        <Button variant="ghost" size="icon" className="relative h-10 w-10">
          <Menu className={cn("h-5 w-5 transition-opacity", isOpen ? "opacity-0" : "opacity-100")} />
          <X className={cn("absolute h-5 w-5 transition-opacity", isOpen ? "opacity-100" : "opacity-0")} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[100dvh] pt-16">
        <div className="fixed top-0 left-0 right-0 bg-background z-50 flex items-center justify-between p-4 border-b">
          <Image
            src={logoSrc}
            alt={navlinks.logo.alt}
            width={navlinks.logo.width}
            height={navlinks.logo.height}
          />
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </DrawerClose>
        </div>
        <div className="px-4 py-6 overflow-y-auto h-full pb-20">
          <Accordion type="single" collapsible className="w-full">
            {navlinks.navItems.map((item, index) => (
              <AccordionItem value={item.name} key={index} className="border-b-0">
                {item.hasDropdown ? (
                  <AccordionTrigger className="py-4 text-lg font-semibold hover:no-underline">
                    {item.name}
                  </AccordionTrigger>
                ) : (
                  <Link
                    href={item.href}
                    className="flex h-14 items-center justify-between py-4 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.hasDropdown && (
                  <AccordionContent className="pb-4">
                    {Array.isArray(item.dropdownItems) ? (
                      <div className="space-y-2">
                        {item.dropdownItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center space-x-2 py-2 pl-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <subItem.icon className="h-4 w-4" />
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    ) : item.dropdownItems && (
                      item.dropdownItems.columns.map((column, columnIndex) => (
                        <div key={columnIndex} className="mb-4">
                          <h3 className="font-semibold text-sm text-muted-foreground mb-2 pl-4">{column.title}</h3>
                          <div className="space-y-2">
                            {column.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="flex items-center space-x-2 py-2 pl-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <subItem.icon className="h-4 w-4" />
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex justify-between space-x-2">
          {navlinks.userMenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex-1 py-2 px-4 rounded-md bg-primary/10 text-center text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
