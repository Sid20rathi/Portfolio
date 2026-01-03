"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export function FloatingDockPage() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => {
        window.open("/", "_blank");
      },
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => {
        window.open("https://twitter.com/Siddhant_Rathi", "_blank");
      },
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => {
        window.open("https://github.com/Siddhant-Rathi", "_blank");
      },
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin
          className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => {
        window.open("https://www.linkedin.com/in/siddhant-rathi-048644224/", "_blank");
      },
    },
    {
      title: "Theme",
      icon: <AnimatedThemeToggler />,
      onClick: () => { }, // optional or noop
    }

  ];
  return (
    <div className="fixed bottom-10 left-0 right-0 z-50 flex flex-col items-center justify-end pointer-events-none">


      <div className="pointer-events-auto pb-5">
        <FloatingDock
          mobileClassName="translate-y-0"
          items={links}
        />
      </div>
    </div>
  );
}
