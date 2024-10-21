"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import useScrollDirection from "../components/ui/useScrollDirection";
import { FloatingDockDemo } from "./materialCom/mobileTabBar";

const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 dark:text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Blocks
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block dark:bg-black">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem className="dark:text-white">
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform dark:text-white  ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl dark:bg-black dark:text-white">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem className="dark:text-white">React</MenuItem>
          <MenuItem className="dark:text-white">TailwindCSS</MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem className="dark:text-white">
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform dark:text-white ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden dark:bg-black dark:text-white">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem className="dark:text-white">React</MenuItem>
          <MenuItem className="dark:text-white">TailwindCSS</MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <motion.div
        className="card md:flex"
        initial={{ opacity: 1, y: -30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Only animate once
      >
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 dark:text-white">
            Pages
          </ListItem>
        </Typography>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 dark:text-white">
            Account
          </ListItem>
        </Typography>

        <NavListMenu />
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 dark:text-white">
            Docs
          </ListItem>
        </Typography>
      </motion.div>
    </List>
  );
}

export function NavbarMain() {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("Theme");
      return savedMode === "dark" ? true : savedMode === null ? true : false;
    }
    return true; // Default to dark mode if localStorage is not available
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth >= 960) {
          setOpenNav(false);
        }
      };
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("Theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("Theme", "light");
      }
    }
  }, [darkMode]);
  const scrollDirection = useScrollDirection();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
  };
  return (
    <div className="flex justify-center w-full dark:bg-black z-20 ">
      <Navbar
        className={`mx-auto max-w-screen-2xl px-4 py-2 md:rounded-lg fixed top-0 w-full transition-transform duration-300 z-20 ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } dark:bg-black rounded-none border-none bg-white shadow-none`}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <motion.div
            className="card"
            initial={{ opacity: 1, x: -100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Only animate once
          >
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2 dark:text-white"
            >
              e-commerce
            </Typography>
          </motion.div>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <motion.div
            className="card"
            initial={{ opacity: 1, x: 100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Only animate once
          >
            <div className="hidden gap-2 lg:flex">
              <Button size="sm" className="dark:bg-white dark:text-black">
                Get Started
              </Button>
              <Button
                className="dark:text-white dark:border dark:border-white"
                variant="outlined"
                size="sm"
                onClick={toggleDarkMode}
              >
                Theme
              </Button>
            </div>
          </motion.div>
          <IconButton
            variant="text"
            className="lg:hidden dark:text-white"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button
              size="sm"
              fullWidth
              className="dark:bg-white dark:text-black"
            >
              Get Started
            </Button>
            <Button
              className="dark:text-white dark:border dark:border-white"
              variant="outlined"
              size="sm"
              fullWidth
              onClick={toggleDarkMode}
            >
              Theme
            </Button>
          </div>
        </Collapse>
      </Navbar>
      <div className="max-lg:flex w-[100vw] flex-row justify-between fixed bottom-0 left-0 z-50 bg-darkblue pb-16 text-center items-center transition-all ease-in-out duration-100 rounded-t-3xl bg-opacity-100 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
        <FloatingDockDemo />
      </div>
    </div>
  );
}
