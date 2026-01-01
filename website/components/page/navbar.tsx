"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export function Navbarpage() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Projects",
      link: "#project",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-50 pointer-events-auto pt-8 cursor-pointer ">
  <AnimatedThemeToggler />
</div>
          
        </NavBody>

      
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className=" flex felx-row gap-5">
              <div className="relative z-50 pointer-events-auto cursor-pointer">
  <AnimatedThemeToggler />
</div>
              <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            

            </div>
            
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative dark:text-black text-white"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      

     
    </div>
  );
}

