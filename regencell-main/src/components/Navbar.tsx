import {useState, useEffect} from "react";
import {cn} from "@/lib/utils";
import {Menu, X, ChevronDown} from "lucide-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-black")}
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              {/* ADD-The Logo Image */}
              <img src="/Images/7d120ee6-3614-4b75-9c35-716d54490d67.png" alt="RegenCell Technologies Logo" className={cn("h-8 w-auto brightness-0 invert")} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>About Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("bg-black text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>Customer Cases</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        {/* CHANGE - The Link Of This page */}
                        <Link to="##" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium"> System Architecture </div>
                          <p className="text-sm text-gray-500"> Design And Architecture System </p>
                        </Link>
                      </li>
                      <li>
                        {/* CHANGE - The Link Of This page */}
                        <Link to="##" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Programming Architect</div>
                          <p className="text-sm text-gray-500">C/C++ Programming Architect</p>
                        </Link>
                      </li>
                      <li>
                        {/* CHANGE - The Link Of This page */}
                        <Link to="##" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Backend Developer</div>
                          <p className="text-sm text-gray-500">Java/C# Developer</p>
                        </Link>
                      </li>
                      <li>
                        {/* CHANGE - The Link Of This page */}
                        <Link to="##" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Embedded Engineer</div>
                          <p className="text-sm text-gray-500">C/C++ Embedded Engineer</p>
                        </Link>
                      </li>
                      <li>
                        {/* CHANGE - The Link Of This page */}
                        <Link to="##" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Pet Activity Counter</div>
                          <p className="text-sm text-gray-500">Smart collars for pet activity monitoring</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("bg-black text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>Learn More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Technology Details</div>
                          <p className="text-sm text-gray-500">How our platform works</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Development Process</div>
                          <p className="text-sm text-gray-500">Our approach to creating custom solutions</p>
                        </Link>
                      </li>
                      <li></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>News</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button onClick={() => scrollToSection("contact")} className={cn("px-4 py-2 rounded-md transition-colors", "bg-gray-700 text-white hover:bg-gray-600")}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100 text-white" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80 bg-black")}>
          <Link
            to="/"
            className={cn("block px-3 py-1.5 rounded-md text-sm")}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
            Home
          </Link>

          <Link
            to="/about"
            className={cn("block px-3 py-1.5 rounded-md text-sm")}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
            About Us
          </Link>

          {/* Simplified Customer Cases - no dropdown */}
          <Link
            to="##"
            className={cn("block px-3 py-1.5 rounded-md text-sm")}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
            Customer Cases
          </Link>

          {/* Simplified Learn More - no dropdown */}
          <Link
            to="/tech-details"
            className={cn("block px-3 py-1.5 rounded-md text-sm")}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
            Learn More
          </Link>

          <Link
            to="/blog"
            className={cn("block px-3 py-1.5 rounded-md text-sm")}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
            News
          </Link>

          <button onClick={() => scrollToSection("contact")} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm")}>
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
