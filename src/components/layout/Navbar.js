import React, { useContext, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { AuthContext } from "../../contexts/AuthContext";

import { useParams, Link } from "react-router-dom";

const Navbar = () => {
  const {
    authState: { user },
    logoutUser,
  } = useContext(AuthContext);

  const { id } = useParams()

  console.log(id)

  const [dropdown, setDropdown] = useState(false);

  const navigation = [
    { name: "Trang chủ", href: "/home" },
    { name: "Tạo khóa học mới", href: "/studio" },
    { name: "Thành tích", href: "/dashboard" },
  ];

  const openDropdown = () => {
    if (dropdown == false) setDropdown(true);
    else setDropdown(false);
  };

  return (
    <Popover>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8 text-md mt-0">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Your Company"
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=600"
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            {user !== null ? (
              <>
                <div class="relative inline-block text-left">
                  <div>
                    <a
                      className="font-medium text-yellow-600 hover:text-yellow-500 hover:cursor-pointer inline-flex w-full justify-center"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={openDropdown}
                    >
                      {user.username}
                    </a>
                  </div>
                  {dropdown === true && (
                    <div
                      class="absolute right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none align-middle justify-center"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div class="py-1" role="none">
                        <a
                          href="/"
                          className="font-medium text-yellow-600 hover:text-yellow-500 hover:cursor-pointer block m-3"
                          onClick={logoutUser}
                        >
                          Đăng xuất
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <a
                href="login"
                className="font-medium text-yellow-600 hover:text-yellow-500 hover:cursor-pointer"
              >
                Log in
              </a>
            )}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=600"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
              {user !== null ? (
                <>
                  <div class="relative inline-block text-left">
                    <div>
                      <a
                        className="font-medium text-yellow-600 hover:text-yellow-500 hover:cursor-pointer w-full justify-center block rounded-md px-3 py-2 text-base"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={openDropdown}
                      >
                        {user.username}
                      </a>
                      <a
                        href="/"
                        className="font-medium text-yellow-600 hover:text-yellow-500 hover:cursor-pointer block rounded-md px-3 py-2 text-base"
                        onClick={logoutUser}
                      >
                        Đăng xuất
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href="login"
                  className="font-medium text-yellow-600 hover:text-yellow-500 hover:cursor-pointer block rounded-md px-3 py-2 text-base"
                >
                  Log in
                </a>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;