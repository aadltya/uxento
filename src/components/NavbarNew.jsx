import { Landing } from "./Landing";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { GridInfo } from "./GridInfo";
import { Grids } from "./Grids";

export function NavbarNew() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Platforms", link: "#platforms" },
    { name: "Docs", link: "https://uxento.gitbook.io/uxtension" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-6 text-xl text-white z-10">
              <a
                href="https://x.com/uxento"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-blue-500 transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://discord.com/invite/uxento"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="hover:text-indigo-600 transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a
                href="https://t.me/uxento"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="hover:text-blue-400 transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                target={item.name === "Docs" ? "_blank" : "_self"}
                rel={item.name === "Docs" ? "noreferrer" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full justify-center gap-8 text-2xl mt-4">
              <a
                href="https://x.com/uxento"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-blue-500 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://discord.com/invite/uxento"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="hover:text-indigo-600 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a
                href="https://t.me/uxento"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="hover:text-blue-400 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <Content />
    </div>
  );
}

const Content = () => {
  return (
    <div>
      <Landing />
      <GridInfo />
      <Grids />
    </div>
  );
};