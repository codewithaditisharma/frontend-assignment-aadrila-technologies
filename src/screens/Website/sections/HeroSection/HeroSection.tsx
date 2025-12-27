import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Home", path: "/", active: true },
  { label: "Industries", path: "#industries", active: false },
  { label: "Products", path: "#products", active: false },
  { label: "Blog", path: "#blog", active: false },
  { label: "Contact Us", path: "#contact", active: false },
  { label: "About Us", path: "/about-us", active: false },
];

export const HeroSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="w-full bg-[#ffffff0d] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-12 lg:px-20 py-3 sm:py-4">
        <Link to="/" className="flex items-center">
          <img
            className="w-[120px] sm:w-[150px] md:w-[179.53px] h-auto"
            alt="Company Logo"
            src="/group-47.svg"
          />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2 lg:gap-[11.25px]">
            {navigationItems.map((item, index) => {
              const isActive = item.path === currentPath || (item.path === "/" && currentPath === "/");
              return (
                <NavigationMenuItem key={index}>
                  {item.path.startsWith("#") ? (
                    <a
                      href={item.path}
                      className={`gap-[7.5px] px-2 lg:px-[7.5px] py-[7.5px] inline-flex items-center justify-center cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#3e6eb4] ${
                        isActive
                          ? "font-manrope font-medium text-[#3e6eb4] text-sm lg:text-base tracking-[0] leading-[18px] whitespace-nowrap"
                          : "font-manrope font-normal text-[#1e1c26] text-sm lg:text-base tracking-[0] leading-[18px] whitespace-nowrap"
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`gap-[7.5px] px-2 lg:px-[7.5px] py-[7.5px] inline-flex items-center justify-center cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#3e6eb4] ${
                        isActive
                          ? "font-manrope font-medium text-[#3e6eb4] text-sm lg:text-base tracking-[0] leading-[18px] whitespace-nowrap"
                          : "font-manrope font-normal text-[#1e1c26] text-sm lg:text-base tracking-[0] leading-[18px] whitespace-nowrap"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3 sm:gap-4">
          <Button className="hidden sm:inline-flex h-[44px] sm:h-[48px] lg:h-[52px] px-6 sm:px-8 lg:px-9 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 whitespace-nowrap transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2">
            Get a Demo
          </Button>

          <button
            className="lg:hidden p-2 text-[#1e1c26] hover:text-[#3e6eb4] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4 pt-2 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item, index) => {
              const isActive = item.path === currentPath || (item.path === "/" && currentPath === "/");
              return item.path.startsWith("#") ? (
                <a
                  key={index}
                  href={item.path}
                  className={`px-4 py-3 rounded-lg transition-colors duration-200 ease-in-out ${
                    isActive
                      ? "font-manrope font-medium text-[#3e6eb4] bg-[#3e6eb4]/10"
                      : "font-manrope font-normal text-[#1e1c26] hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg transition-colors duration-200 ease-in-out ${
                    isActive
                      ? "font-manrope font-medium text-[#3e6eb4] bg-[#3e6eb4]/10"
                      : "font-manrope font-normal text-[#1e1c26] hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button className="w-full mt-2 h-[44px] px-6 py-3 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-base text-center tracking-[0] leading-5 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2">
              Get a Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
